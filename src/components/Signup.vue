<template>
  <div>
    <div class="register-photo">
      <div class="form-container">
        <div class="image-holder"></div>
        <form method="post">
          <h2 class="text-center"><strong>Crea</strong>&nbsp;una cuenta.</h2>
          <div class="form-group"><input class="form-control" type="text" name="firstname" placeholder="Nombre"></div>
          <div class="form-group"><input class="form-control" type="text" name="lastname" placeholder="Apellido" ></div>
          <div class="form-group"><input class="form-control" type="text" name="cedula" placeholder="Cédula" ></div>
          <div class="form-group"><input class="form-control" type="text" name="telefono" placeholder="Telefono" ></div>
          <div class="form-group"><input class="form-control" type="email" name="email" placeholder="Email" ></div>
          <div class="form-group"><input class="form-control" type="password" name="password" placeholder="Contraseña" ></div>
          <div class="form-group"><input class="form-control" type="password" name="password-repeat" placeholder="Repetir Contraseña" ></div>
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

  export default {
    data() {
      return{

      }
    },
    methods: {

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
