<template>
  <div class="register-photo">
    <div class="form-container">
      <div class="image-holder" ></div>
      <form method="post" @submit.prevent="authUser">
        <h2 class="text-center"><strong>Inicia</strong>&nbsp;sesión.</h2>
        <div class="form-group"><input class="form-control" type="email" name="email" placeholder="Email" v-model="email"></div>
        <div class="form-group"><input class="form-control" type="password" name="password" placeholder="Contraseña" v-model="password"></div>
        <div class="form-group"><button class="btn btn-primary btn-block" type="submit" style="background-color: rgb(37,55,102);">Iniciar Sesion</button></div>
      </form>
    </div>
  </div>
</template>

<script>
  import Firebase from 'firebase';
  const auth = Firebase.auth();
  const db = Firebase.database();

  export default {
    data() {
      return{
          email: '',
          password: '',
      }
    },
    methods: {
      authUser() {
        const email = this.email;
        const password = this.password;
        auth.signInWithEmailAndPassword(email, password).then(() =>{
            this.$router.replace('home')
        }).catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            window.alert('Error Message: ' + errorMessage + ' Error Code: ' + errorCode)
        });

      },
    },
    computed: {

    },
    props: {

    },
  }
</script>

<style>
  @import "../assets/css/Login-Form-with-Photo.css";
</style>
