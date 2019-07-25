<template>
  <div>
    <div class="login-dark">
      <form method="post" @submit.prevent="getFormValues">
        <h2 class="sr-only">Iniciar Sesión</h2>
        <div class="illustration"><i class="icon ion-ios-locked-outline"></i></div>
        <div class="form-group"><input class="form-control" type="email" name="email" placeholder="Email" v-model="email"></div>
        <div class="form-group"><input class="form-control" type="password" name="password" placeholder="Password" v-model="password"></div>
        <div class="form-group"><button class="btn btn-primary btn-block">Regístrate</button></div>
      </form>
    </div>
  </div>
</template>

<script>
  import Firebase from 'firebase';
  import firebaseConfig from './config.js'

  Firebase.initializeApp(firebaseConfig);
  const auth = Firebase.auth();
  export default {
    data() {
      return{
        email: '',
        password: ''
      }
    },
    methods: {
      getFormValues() {
        const email = this.email;
        const password = this.password;
        auth.createUserWithEmailAndPassword(email, password).then(cred => {
          console.log(cred)
        })
      }
    },
    computed: {

    },
    props: {

    }
  }
</script>

<style>
  @import "../assets/css/Login-Form-Dark.css";
</style>
