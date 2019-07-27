<template>
  <div class="container profile profile-view" id="profile">
    <form>
      <div class="form-row profile-row">
        <div class="col-md-4 relative">
          <div class="avatar">
            <div class="avatar-bg center"></div>
          </div><input type="file" class="form-control" name="avatar-file"></div>
        <div class="col-md-8">
          <h1>Profile </h1>
          <hr>
          <div class="form-row">
            <div class="col-sm-12 col-md-6">
              <div class="form-group"><label>Nombre</label><input class="form-control" type="text" name="firstname" v-model="profile.firstname"></div>
            </div>
            <div class="col-sm-12 col-md-6">
              <div class="form-group"><label>Apellido</label><input class="form-control" type="text" name="lastname" v-model="profile.lastname"></div>
            </div>
          </div>
          <div class="form-group"><label>Email</label><input class="form-control" type="email" autocomplete="off" required="" name="email"></div>
          <div class="form-row">
            <div class="col-sm-12 col-md-6">
              <div class="form-group"><label>Cedula</label><input class="form-control" type="text" name="ci" autocomplete="off" required="" v-model="profile.ci"></div>
            </div>
            <div class="col-sm-12 col-md-6">
              <div class="form-group"><label>Telefono</label><input class="form-control" type="text" name="phone" autocomplete="off" required=""></div>
            </div>
          </div>
          <div class="form-row">
            <div class="col-sm-12 col-md-6">
              <div class="form-group"><label>Contraseña</label><input class="form-control" type="password" name="password" autocomplete="off" required=""></div>
            </div>
            <div class="col-sm-12 col-md-6">
              <div class="form-group"><label>Confirmar Contraseña</label><input class="form-control" type="password" name="confirmpass" autocomplete="off" required=""></div>
            </div>
          </div>
          <hr>
          <div class="form-row">
            <div class="col-md-12 content-right"><button class="btn btn-primary form-btn" type="submit">GUARDAR</button><button class="btn btn-danger form-btn" type="reset">CANCELAR</button></div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
    import Firebase from 'firebase';
    const auth = Firebase.auth();
    const db = Firebase.firestore();

    export default {
        name: 'profile',
        data() {
            return{
                profile: {
                    firstname: '',
                    lastname: '',
                    ci: '',
                    phone: '',
                }
            }
        },
        methods: {

        },
        firestore(){
            const user = auth.currentUser;
            console.log(user);
            return{
                profile: db.collection('profiles').doc(user.uid)
            }
        }
    }
</script>


<style>
  @import "../assets/css/bootstrap.min.css";
  @import "../assets/css/Profile-Edit-Form.css";
  @import "../assets/css/Profile-Edit-Form-1.css";
</style>
