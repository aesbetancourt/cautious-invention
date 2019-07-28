<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
    // Components
import Start from './components/Start';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Profile from './components/Profile';

export default {
  name: 'App',
  components: {
      Start,
      Signup,
      Login,
      Home,
      Profile
  }
}
</script>
