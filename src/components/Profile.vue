<template>
  <div class="container profile profile-view" id="profile">
    <form method="post">
      <div class="form-row profile-row">
        <div class="col-md-4 relative">
          <div class="avatar">
            <div class="avatar-bg center"></div>
          </div><input type="file" class="form-control" name="avatar-file"></div>
        <div class="col-md-8">
          <h1>Perfil - Actualizar datos</h1>
          <hr>
          <div class="form-row">
            <div class="col-sm-12 col-md-6">
              <div class="form-group"><label>Nombre</label><input class="form-control" type="text" name="firstname"></div>
            </div>
            <div class="col-sm-12 col-md-6">
              <div class="form-group"><label>Apellido</label><input class="form-control" type="text" name="lastname"></div>
            </div>
          </div>
          <div class="form-row">
            <div class="col-sm-12 col-md-6">
              <div class="form-group"><label>Cedula</label><input class="form-control" type="text" name="ci" autocomplete="off" required=""></div>
            </div>
            <div class="col-sm-12 col-md-6">
              <div class="form-group"><label>Telefono</label><input class="form-control" type="text" name="phone" autocomplete="off" required=""></div>
            </div>
          </div>

          <hr>
          <div class="form-row">
            <div class="col-md-12 content-right">
              <button class="btn btn-primary form-btn" type="submit">
                Guardar
              </button>
              <router-link to="/home">
                <button class="btn btn-danger form-btn" >
                  Cancelar
                </button>
              </router-link>
              </div>
            </div>
        </div>
      </div>
    </form>
    <hr>
    <h1>Cambiar Constraseña</h1>
    <hr>
    <div class="form-row">
      <div class="col-sm-12 col-md-6">
        <div class="form-group"><label>Contraseña</label><input class="form-control" type="password" name="password"></div>
      </div>
      <div class="col-sm-12 col-md-6">
        <div class="form-group"><label>Confirmar Contraseña</label><input class="form-control" type="password" name="confirmpass"></div>
      </div>
      <div class="form-row">
        <div class="col-md-12 content-right">
          <button class="btn btn-primary form-btn">
            Cambiar
          </button>
          <router-link to="/home">
            <button class="btn btn-danger form-btn" >
              Cancelar
            </button>
          </router-link>
        </div>
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

        }
    }
</script>


<style>
  @import "../assets/css/bootstrap.min.css";
  @import "../assets/css/Profile-Edit-Form.css";
  @import "../assets/css/Profile-Edit-Form-1.css";
</style>
