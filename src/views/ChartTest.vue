<template>
    <div>
        <h2>Chart Library Test</h2>
        <router-link to="/chartTest/chartjs">vue-chartjs</router-link>
        <router-link to="/chartTest/googlechart">vue-google-charts</router-link>
        <router-view />
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
    a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }

    padding: 10px;
  }
</style>