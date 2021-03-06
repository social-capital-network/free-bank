<template>
  <div id="signup">
    <h2>Join the live web</h2>
    <div class="signup-form">
      <form @submit.prevent="onSubmit">
        <div class="input" :class="{ invalid: $v.email.$error }">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            @blur="$v.email.$touch()"
            v-model="email"
          />
          <p v-if="!$v.email.email">valid email address required.</p>
          <p v-if="!$v.email.required">required</p>
        </div>
        <div class="input" :class="{ invalid: $v.age.$error }">
          <label for="age">Your Age</label>
          <input
            type="number"
            id="age"
            @blur="$v.age.$touch()"
            v-model.number="age"
          />
          <p v-if="!$v.age.minVal">
            Min {{ $v.age.$params.minVal.min }} y.o. 18 for ai patenting.
          </p>
        </div>
        <div class="input" :class="{ invalid: $v.password.$error }">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            @blur="$v.password.$touch()"
            v-model="password"
          />
        </div>
        <div class="input" :class="{ invalid: $v.confirmPassword.$error }">
          <label for="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            @blur="$v.confirmPassword.$touch()"
            v-model="confirmPassword"
          />
        </div>
        <div class="input">
          <label for="country">Country</label>
          <select id="country" v-model="country">
            <option value="eukarya">Tester's Eukarya Superkingdom</option>
            <option value="usa">USA</option>
            <option value="china">China</option>
            <option value="india">India</option>
            <option value="canada">Canada</option>
            <option value="uk">United Kindom</option>
          </select>
        </div>
        <div class="interests">
          <h3>Add Interests</h3>
          <button @click="onAddInterest" type="button">Add Interest</button>
          <div class="interest-list">
            <div
              class="input"
              v-for="(interestInput, index) in interestInputs"
              :class="{ invalid: $v.interestInputs.$each[index].$error }"
              :key="interestInput.id"
            >
              <label :for="interestInput.id">Interest #{{ index + 1 }}</label>
              <input
                type="text"
                :id="interestInput.id"
                @blur="$v.interestInputs.$each[index].value.$touch()"
                v-model="interestInput.value"
              />
              <button @click="onDeleteInterest(interestInput.id)" type="button">
                X
              </button>
            </div>
            <p v-if="$v.interestInputs.minLen - 1">
              At least {{ $v.interestInputs.$params.minLen.min }} interests
            </p>
            <p v-if="!$v.interestInputs.required">
              Your interests in realtime economy.
            </p>
          </div>
        </div>
        <div class="input inline" :class="{ invalid: $v.terms.$invalid }">
          <input
            type="checkbox"
            id="terms"
            @change="$v.terms.$touch()"
            v-model="terms"
          />
          <label for="terms">Accept Terms of Use</label>
        </div>
        <div class="submit">
          <button type="submit" :disabled="$v.$invalid">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {
  required,
  email,
  numeric,
  minValue,
  minLength,
  sameAs
} from 'vuelidate/lib/validators'
import axios from 'axios'

export default {
  data() {
    return {
      email: '',
      age: null,
      password: '',
      confirmPassword: '',
      country: 'eukarya',
      interestInputs: [],
      terms: false
    }
  },
  validations: {
    email: {
      required,
      email,
      unique: val => {
        if (val === '') return true
        return axios
          .get('/users.json?orderBy="email"&equalTo="' + val + '"')
          .then(res => {
            return Object.keys(res.data).length === 0
          })
      }
    },
    age: {
      required,
      numeric,
      minVal: minValue(10)
    },
    password: {
      required,
      minLen: minLength(6)
    },
    confirmPassword: {
      // sameAs: sameAs('password')
      sameAs: sameAs(vm => {
        return vm.password
      })
    },
    terms: {
      checked: (value, vm) => (vm.country === 'eukarya' ? true : value)
    },
    interestInputs: {
      required,
      minLen: minLength(2),
      $each: {
        value: {
          required,
          minLen: minLength(2)
        }
      }
    }
  },
  methods: {
    onAddInterest() {
      const newInterest = {
        id: Math.random() * Math.random() * 1000,
        value: ''
      }
      this.interestInputs.push(newInterest)
    },
    onDeleteInterest(id) {
      this.interestInputs = this.interestInputs.filter(
        interest => interest.id !== id
      )
    },
    onSubmit() {
      const formData = {
        email: this.email,
        age: this.age,
        password: this.password,
        confirmPassword: this.confirmPassword,
        country: this.country,
        interests: this.interestInputs.map(interest => interest.value),
        terms: this.terms
      }
      console.log(formData)
      this.$store.dispatch('signup', formData)
    }
  }
}
</script>

<style scoped>
#signup {
  display: flex;
  flex-flow: column;
  justify-content: center;
}

h2 {
  text-align: center;
  margin: 1rem auto;
}

.signup-form {
  width: 300px;
  margin: 0px auto;
  border: 1px solid #eee;
  padding: 0px 20px;
  box-shadow: 0 2px 3px #ccc;
}

.input {
  margin: 10px auto;
}

.input label {
  display: block;
  color: #4e4e4e;
  margin-bottom: 6px;
}

.input.inline label {
  display: inline;
}

.input input {
  font: inherit;
  width: 100%;
  padding: 6px 12px;
  box-sizing: border-box;
  border: 1px solid #ccc;
}

.input.inline input {
  width: auto;
}

.input input:focus {
  outline: none;
  border: 1px solid #6aa84f;
  background-color: #eee;
}

.input.invalid label {
  color: red;
}

.input.invalid input {
  border: 1px solid red;
  background-color: #ffc9aa;
}

.input select {
  border: 1px solid #ccc;
  font: inherit;
}

.interests button {
  border: 1px solid #6aa84f;
  background: #6aa84f;
  color: white;
  padding: 6px;
  font: inherit;
  cursor: pointer;
}

.interests button:hover,
.interests button:active {
  background-color: #99cc99;
}

.interests input {
  width: 90%;
}

.submit button {
  border: 1px solid #6aa84f;
  color: #6aa84f;
  padding: 10px 20px;
  margin: 10px 0px 20px;
  font: inherit;
  cursor: pointer;
}

.submit button:hover,
.submit button:active {
  background-color: #6aa84f;
  color: white;
}

.submit button[disabled],
.submit button[disabled]:hover,
.submit button[disabled]:active {
  border: 1px solid #ccc;
  background-color: transparent;
  color: #ccc;
  cursor: not-allowed;
}

button {
  margin-bottom: 10px;
}

h3 {
  margin: 15px 0px 10px 0px;
}
</style>
