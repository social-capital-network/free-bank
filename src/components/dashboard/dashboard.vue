<template>
  <div id="dashboard">
    <h1>social ai coins</h1>
    <p v-if="email">cell email: {{ email }}</p>
    <div class="container">
      <div class="row">
        <div class="col">
          <ul class="nav nav-pills">
            <li class="nav-item">
              <a class="nav-link active" href="/" title="Collaboration Economy">Collaboration</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/network" title="ECO Social Network">Network</a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div v-if="error" class="alert alert-danger" role="alert">{{ error }}</div>
      <div v-if="success" class="alert alert-success" role="alert">{{ success }}</div>
      <div class="row">
        <div class="col">
          <div v-if="!walletLoading">
            <button
              class="btn btn-primary"
              @click="onCreateWallet"
              title="Create new Project Wallet"
            >Jobs</button>
             <button class="btn btn-primary" title="Knowledge Wallet">Skills</button>
             <button class="btn btn-primary" @click="onLoadWallet" title="Investor Wallet">Bank</button>
          </div>

          <div v-if="walletLoading" class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

      </div>
        <div class="col text-right">
          <h4>live: {{ funds.toFixed(0) }} ai &#162;</h4>
        </div>      
      <hr />
      <div v-if="!wallet" class="row">
        <div class="col">
          <div class="alert alert-warning">Create a Cell Wallet to start Collaboration and Progress!</div>
        </div>
      </div>
      <div v-if="wallet" class="row">
        <div class="col">
          <form @submit.prevent="onSendTx">
            <div class="form-group">
              <label for="recipient">Recipient cell</label>
              <input
                v-model="outgoingTx.recipient"
                type="text"
                class="form-control"
                id="recipient"
                placeholder="Enter email - job id"
              />
            </div>
            <div class="form-group">
              <label for="amount">ai Amount or Skill id</label>
              <input
                v-model.number="outgoingTx.amount"
                type="number"
                step="0.001"
                class="form-control"
                id="amount"
              />
              <small class="form-text text-muted">no fractions for ai coins</small>
            </div>
            <div v-if="txLoading" class="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <button
              :disabled="txLoading || outgoingTx.recipient.trim() === '' || outgoingTx.amount <= 0"
              type="submit"
              class="btn btn-primary"
            >Send</button>
          </form>
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col">
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a
                class="nav-link"
                :class="{active: view === 'chain'}"
                href="#"
                @click="view = 'chain'"
              >Job Blockchain</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" :class="{active: view === 'tx'}" href="#" @click="view = 'tx'">
                Open
                Deals
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="row my-3">
        <div class="col">
          <button
            class="btn btn-primary"
            @click="onLoadData"
          >{{ view === 'chain' ? 'Cooperate' : 'Commits' }}</button>
          <button v-if="view === 'chain' && wallet" class="btn btn-success" @click="onMine">
            Mine
          </button>
          <button class="btn btn-warning" @click="onResolve">Compete</button>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div v-if="dataLoading" class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div v-if="!dataLoading" class="accordion">
            <div class="card" v-for="(data, index) in loadedData">
              <div v-if="view === 'chain'" class="card-header">
                <h5 class="mb-0">
                  <button
                    class="btn btn-link"
                    type="button"
                    @click="showElement === index ? showElement = null : showElement = index"
                  >contribution block #{{ data.index }}</button>
                </h5>
              </div>
              <div v-if="view === 'chain'" class="collapse" :class="{show: showElement === index}">
                <div class="card-body">
                  <p>Previous Job Status | Hash: {{ data.previous_hash.substring(0, 16) + ' ...' }}</p>
                  <div class="list-group">
                    <div
                      v-for="tx in data.transactions"
                      class="list-group-item flex-column align-items-start"
                    >
                      <div>Commit Sender: {{ tx.sender }}</div>
                      <div>Commit Recipient: {{ tx.recipient.substring(0, 16) + ' ...' }}</div>
                      <div>Commit Sum: {{ tx.amount }} ai &#162;</div>
                    </div>
                  </div>
                </div>
              </div>

              <div v-if="view === 'tx'" class="card-header">
                <h5 class="mb-0">
                  <button
                    class="btn btn-link"
                    type="button"
                    @click="showElement === index ? showElement = null : showElement = index"
                  >Transaction | Commit #{{ index }}</button>
                </h5>
              </div>
              <div v-if="view === 'tx'" class="collapse" :class="{show: showElement === index}">
                <div class="card-body">
                  <div class="list-group">
                    <div class="list-group-item flex-column align-items-start">
                      <div>Commit Sender: {{ data.sender }}</div>
                      <div>Commit Recipient: {{ data.recipient }}</div>
                      <div>Commit Amount: {{ data.amount }} $ECO (sec or cal/ATP)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import minerAxios from '../../axios-miner';

export default {
  data() {
    return {
      blockchain: [],
      openTransactions: [],
      wallet: null,
      view: "chain",
      walletLoading: false,
      txLoading: false,
      dataLoading: false,
      showElement: null,
      error: null,
      success: null,
      funds: 0,
      outgoingTx: {
        recipient: "",
        amount: 0
      }
    };
  },
  created() {
    this.$store.dispatch('fetchUser')
  },
  computed: {
    email() {
      return !this.$store.getters.user ? false : this.$store.getters.user.email;
    },
    loadedData: function() {
      if (this.view === 'chain') {
        return this.blockchain
      } else {
        return this.openTransactions
      }
    }
  },
  methods: {
    onCreateWallet: function() {
      // Send Http request to create a new wallet (and return keys)
      var vm = this
      this.walletLoading = true;
      minerAxios
        .post('/wallet')
        .then(function(response) {
          vm.error = null
          vm.success =
            'Created ECO Wallet! Public Key: ' +
            response.data.public_key +
            ', Private Key: ' +
            response.data.private_key
          vm.wallet = {
            public_key: response.data.public_key,
            private_key: response.data.private_key
          }
          vm.funds = response.data.funds
          vm.walletLoading = false
        })
        .catch(function(error) {
          vm.success = null
          vm.error = error.response.data.message
          vm.wallet = null
          vm.walletLoading = false
        });
    },
    onLoadWallet: function() {
      // Send Http request to load an existing wallet (from a file on the server)
      var vm = this
      this.walletLoading = true
      minerAxios
        .get('/wallet')
        .then(function(response) {
          vm.error = null;
          vm.success =
            'ai cell Public Key: ' +
            response.data.public_key.substring(0, 20) + ' ...'
            // ', Private Key: ' +
            // response.data.private_key
          vm.wallet = {
            public_key: response.data.public_key,
            private_key: response.data.private_key
          }
          vm.funds = response.data.funds
          vm.walletLoading = false
        })
        .catch(function(error) {
          vm.success = null
          vm.error = error.response.data.message;
          vm.wallet = null
          vm.walletLoading = false
        })
    },
    onSendTx: function() {
      // Send Transaction to backend
      this.txLoading = true
      var vm = this
      minerAxios
        .post('/transaction', {
          recipient: this.outgoingTx.recipient,
          amount: this.outgoingTx.amount
        })
        .then(function(response) {
          vm.error = null
          vm.success = response.data.message
          console.log(response.data)
          vm.funds = response.data.funds
          vm.txLoading = false
        })
        .catch(function(error) {
          vm.success = null
          vm.error = error.response.data.message
          vm.txLoading = false
        });
    },
    onMine: function() {
      var vm = this
      minerAxios
        .post('/mine')
        .then(function(response) {
          vm.error = null
          vm.success = response.data.message
          console.log(response.data)
          vm.funds = response.data.funds
        })
        .catch(function(error) {
          vm.success = null
          vm.error = error.response.data.message
        });
    },
    onResolve: function() {
      var vm = this
      minerAxios
        .post('/resolve-conflicts')
        .then(function(response) {
          vm.error = null
          vm.success = response.data.message
        })
        .catch(function(error) {
          vm.success = null
          vm.error = error.response.data.message
        });
    },
    onLoadData: function() {
      if (this.view === 'chain') {
        // Load blockchain data
        var vm = this
        this.dataLoading = true
        minerAxios
          .get('/chain')
          .then(function(response) {
            vm.blockchain = response.data
            vm.dataLoading = false
          })
          .catch(function(error) {
            vm.dataLoading = false
            vm.error = 'Something went wrong.'
          });
      } else {
        // Load transaction data
        var vm = this
        minerAxios
          .get('/transactions')
          .then(function(response) {
            vm.openTransactions = response.data
            vm.dataLoading = false
          })
          .catch (function (error) {
            vm.dataLoading = false
            vm.error = 'Something went wrong.'
          })
      }
    }
  }
}
</script>

<style scoped>
h1,
p {
  text-align: center;
}

p {
  color: #333;
}

/* ai-miner style below */

.lds-ring {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}

.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 51px;
  height: 51px;
  margin: 6px;
  border: 6px solid #fa923f;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fa923f transparent transparent transparent;
}

.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}

.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}

.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}

@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.btn {
  margin-right: 5px;
}

h1 {
  margin-top: 10px;
}

h4 {
  margin-top: 14px;
}
</style>
