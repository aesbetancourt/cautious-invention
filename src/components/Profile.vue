<template>
  <div class="container profile profile-view" id="profile">
    <form method="post" @submit.prevent="updateProfile">
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
        <div class="form-group"><label>Contraseña</label><input class="form-control" type="password" name="password" v-model="newpassword1"></div>
      </div>
      <div class="col-sm-12 col-md-6">
        <div class="form-group"><label>Confirmar Contraseña</label><input class="form-control" type="password" name="confirmpass" v-model="newpassword2"></div>
      </div>
      <div class="form-row">
        <div class="col-md-12 content-right">
          <button class="btn btn-primary form-btn" @click="updatePassword">
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
    import Firebase from 'firebase';
    const auth = Firebase.auth();
    const db = Firebase.firestore();

    export default {
        name: 'profile',
        data() {
            return{
                newpassword1 : null,
                newpassword2 : null,
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
            },
            updatePassword(){
                const user = auth.currentUser;
                if (this.newpassword1 !== null && this.newpassword2 !== null){
                    if (this.newpassword1 === this.newpassword2) {
                        user.updatePassword(this.newpassword1).then(() => {
                            window.alert('New password set');
                            auth.signOut()
                                .then(()=>{
                                    console.log('out');
                                    this.$router.replace('/')
                                })
                                .catch((err)=>{
                                    alert("Error " + err)
                                })
                        }).catch((error)=>{
                            alert(error)
                        })
                    } else {
                        window.alert("Contraseña no es igual")
                }
              } else {
                    window.alert("Para cambiar contraseña debe llenar ambos campos")
                }
            }
        }
    }
</script>


<style>
  @import "../assets/css/bootstrap.min.css";
  @import "../assets/css/Profile-Edit-Form.css";
  @import "../assets/css/Profile-Edit-Form-1.css";
</style>
