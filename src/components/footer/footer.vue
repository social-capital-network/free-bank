<template>
  <footer id="footer">
    <nav>
      <ul>
        <li>
          <a href="https://github.com/ai-economy/ai-eco-wallet"
            >rb&#162; coin miner</a
          >
        </li>
        <li>
          <p>MIT © Ianta Labs</p>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<style scoped>
#footer {
  height: 56px;
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  background-color: #6aa84f;
  padding: 0 20px;
}

.logo {
  font-weight: bold;
  color: white;
}

.logo a {
  text-decoration: none;
  color: white;
}

nav {
  height: 100%;
  width: 100%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
}

li p {
  margin: 0px auto;
}

li a {
  text-decoration: none;
  color: white;
}

li a:hover,
li a:active,
li a.router-link-active {
  color: #333;
}

.logout {
  background-color: transparent;
  border: none;
  font: inherit;
  color: white;
  cursor: pointer;
}
</style>
