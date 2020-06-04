<template>
  <div id="app">
    <Header />
    <template v-if="$route.matched.length">
      <router-view></router-view>
    </template>
    <template v-else>
      <Home />
    </template>
  </div>
</template>

<script>
  import auth from './auth'
  import Home from "./components/homeContainer/Home";
  import Header from "./components/Header";
  // import connectDBService from "./services/connectDBService";

  export default {

    components: {Home, Header},
    data () {
      return {
        loggedIn: auth.loggedIn(),
      }
    },
    created () {
      auth.onChange = loggedIn => {
        this.loggedIn = loggedIn
      }
    },
    beforeMount() {
      // connectDBService.connectDB()
    }
  }
</script>

<style>

</style>

