<template>
  <div>
    <div class="register-photo">
      <div class="form-container">
        <div class="image-holder"></div>
        <form method="post" @submit.prevent="createAuthUser">
          <h2 class="text-center"><strong>Crea</strong>&nbsp;una cuenta.</h2>
          <div class="form-group"><input class="form-control" type="text" name="firstname" placeholder="Nombre" v-model="firstname"></div>
          <div class="form-group"><input class="form-control" type="text" name="lastname" placeholder="Apellido" v-model="lastname"></div>
          <div class="form-group"><input class="form-control" type="text" name="cedula" placeholder="Cédula" v-model="ci"></div>
          <div class="form-group"><input class="form-control" type="text" name="telefono" placeholder="Telefono" v-model="phone"></div>
          <div class="form-group"><input class="form-control" type="email" name="email" placeholder="Email" v-model="email"></div>
          <div class="form-group"><input class="form-control" type="password" name="password" placeholder="Contraseña" v-model="password"></div>
          <div class="form-group"><input class="form-control" type="password" name="password-repeat" placeholder="Repetir Contraseña"></div>
          <div class="form-group"><button class="btn btn-primary btn-block" type="submit" style="background-color: rgb(37,55,102);">Registrate!</button>
          </div>
            <a class="already" href="#">
              <router-link to="/login">
                Ya tienes una cuenta? Inicia aqui.
              </router-link>

            </a>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import Firebase from 'firebase';
  import firebaseConfig from './config.js'
  Firebase.initializeApp(firebaseConfig);
  const auth = Firebase.auth();
  const db = Firebase.firestore();

  export default {
    data() {
      return{
          email: '',
          password: '',
          firstname: '',
          lastname: '',
          ci: '',
          phone: ''

      }
    },
    methods: {
      createAuthUser() {
        const email = this.email;
        const password = this.password;
        auth.createUserWithEmailAndPassword(email, password).then((user) => {
            db.collection('profiles').doc(user.user.uid).set({
                firstname: this.firstname,
                lastname: this.lastname,
                ci: this.ci,
                phone: this.phone
            })
                .then(() =>{
                    console.log("Doc Written")
                })
                .catch((error)=>{
                    console.error("error: ",error)
                });
          this.$router.replace('/home')
        }).catch((error)=>{
            let errorCode = error.code;
            let errorMessage = error.message;
            window.alert('Error Message: ' + errorMessage + ' Error Code: ' + errorCode)
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
  @import "../assets/css/Registration-Form-with-Photo.css";
</style>
