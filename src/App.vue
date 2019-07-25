<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>



// Components
import Start from './components/Start';
import Signup from './components/Signup';
import Login from './components/Login';

export default {
  name: 'App',
  components: {
    Start,
    Signup,
    Login
  }
}
</script>
