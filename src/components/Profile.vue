<template>
  <div class="container profile profile-view" id="profile">
    <form method="post" @submit.prevent="updateProfile">
      <div class="form-row profile-row">
        <div class="col-md-4 relative">
          <div class="avatar">
            <div class="avatar-bg center"></div>
          </div><input type="file" class="form-control" name="avatar-file"></div>
        <div class="col-md-8">
          <h1>Perfil</h1>
          <hr>
          <div class="form-row">
            <div class="col-sm-12 col-md-6">
              <div class="form-group"><label>Nombre</label><input class="form-control" type="text" name="firstname" v-model="profile.firstname"></div>
            </div>
            <div class="col-sm-12 col-md-6">
              <div class="form-group"><label>Apellido</label><input class="form-control" type="text" name="lastname" v-model="profile.lastname"></div>
            </div>
          </div>
          <div class="form-row">
            <div class="col-sm-12 col-md-6">
              <div class="form-group"><label>Cedula</label><input class="form-control" type="text" name="ci" autocomplete="off" required="" v-model="profile.ci"></div>
            </div>
            <div class="col-sm-12 col-md-6">
              <div class="form-group"><label>Telefono</label><input class="form-control" type="text" name="phone" autocomplete="off" required="" v-model="profile.phone"></div>
            </div>
          </div>
          <div class="form-row">
            <div class="col-sm-12 col-md-6">
              <div class="form-group"><label>Contraseña</label><input class="form-control" type="password" name="password" v-model="newpassword"></div>
            </div>
            <div class="col-sm-12 col-md-6">
              <div class="form-group"><label>Confirmar Contraseña</label><input class="form-control" type="password" name="confirmpass" v-model="newpassword"></div>
            </div>
          </div>
          <hr>
          <div class="form-row">
            <div class="col-md-12 content-right">
              <button class="btn btn-primary form-btn" type="submit">
                GUARDAR
              </button>
              <router-link to="/home">
                <button class="btn btn-danger form-btn" >
                  CANCELAR
                </button>
              </router-link>

            </div>
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
                newpassword : null,
                profile: {
                    firstname: '',
                    lastname: '',
                    ci: '',
                    phone: '',
                }
            }
        },
        firestore(){
            const user = auth.currentUser;
            console.log(user);
            return{
                profile: db.collection('profiles').doc(user.uid)
            }
        },
        methods: {
            updateProfile(){
                const user = auth.currentUser;
                db.collection('profiles').doc(user.uid).update(this.profile).then(() =>{
                    window.alert('Profile Updated');
                    this.$router.replace('/home');
                });
                if (this.newpassword !== null) {
                    user.updatePassword(this.newpassword).then(() => {
                        window.alert('New password set')
                    }).catch((error)=>{
                        console.log(error)
                    })
                }

               /* user.updateProfile({
                    displayName: this.firstname + this.lastname,
                    photoURL: "http://img.geocaching.com/cache/25624207-2700-4447-85d3-038f91521f77.jpg"
                }).then(function() {
                    console.log('ok');
                    if (user != null) {
                        user.providerData.forEach(function (profile) {
                            console.log("  Name: " + profile.displayName);
                            console.log("  Email: " + profile.email);
                            console.log("  Photo URL: " + profile.photoURL);
                        });
                    }
                }).catch(function(error) {
                    console.log('fuck')
                });*/
            }
        }

    }
</script>


<style>
  @import "../assets/css/bootstrap.min.css";
  @import "../assets/css/Profile-Edit-Form.css";
  @import "../assets/css/Profile-Edit-Form-1.css";
</style>
