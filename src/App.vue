<template>
  <div id="app">
    <img id="mainLogo" alt="Vue logo" src="./assets/logo.png" />
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/start">Start</router-link>
      <router-link to="/todolist">TodoList</router-link>
      <router-link to="/chartTest">ChartTest</router-link>
      <router-link to="/vuetstrap">Vuetstrap</router-link>
      <router-link to="/slot">Slot</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }

    padding: 10px;
  }
}

#mainLogo {
  width: 100px;
}
</style>
