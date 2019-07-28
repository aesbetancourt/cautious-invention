<template>
  <div id="page-top">
    <div id="wrapper">
      <nav class="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
        <div class="container-fluid d-flex flex-column p-0">
          <a class="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0">
            <div class="sidebar-brand-text mx-3 text-light"><span>FreeBook.com</span></div>
          </a>
          <hr style="height: 1px; width: 180px;border: none; background-color: #fff ">
          <ul class="nav navbar-nav text-light" id="accordionSidebar">
            <li class="nav-item" role="presentation"><a class="nav-link active h3"><span>Dashboard</span></a></li>
            <li class="nav-item" role="presentation"><a class="nav-link active"><span>Tus libros</span></a></li>
            <li class="nav-item" role="presentation"><a class="nav-link active"><span>Amigos</span></a></li>
            <li class="nav-item" role="presentation"><a class="nav-link active"><span>Recomendaciones</span></a></li>
            <li class="nav-item" role="presentation"><a class="nav-link active" @click="logOut"><span>Cerrar Sesión</span></a></li>
          </ul>
        </div>
      </nav>
      <div class="d-flex flex-column" id="content-wrapper">
        <div id="content">
          <nav class="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
            <div class="container-fluid">
              <ul class="nav navbar-nav flex-nowrap ml-auto">
                <div class="d-none d-sm-block topbar-divider"></div>
                <li class="nav-item dropdown no-arrow" role="presentation">
                <li>
                <b-nav-item-dropdown right>
                  <!-- Using 'button-content' slot -->
                  <template slot="button-content" class="text-dark"><strong>{{this.email}}</strong></template>
                  <b-dropdown-item >
                    <router-link to="/profile">
                      Perfil
                    </router-link>
                  </b-dropdown-item>
                  <b-dropdown-item @click="logOut">
                    Cerrar Sesión
                  </b-dropdown-item>
                </b-nav-item-dropdown>
                </li>
              </ul>
            </div>
          </nav>
          <div class="container-fluid">
            <div class="d-sm-flex justify-content-between align-items-center mb-4">
              <h3 class="text-dark mb-4">Dashboard</h3>
            </div>
            <div class="row">
              <div class="col-lg-7 col-xl-8">
                <div class="card shadow mb-4">
                  <div class="card-header d-flex justify-content-between align-items-center">
                    <h6 class="text-primary font-weight-bold m-0"><strong>Bienvenido</strong> a la comunidad de libros mas grande de internet</h6>
                  </div>
                  <div class="card-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum facere iure nisi obcaecati perspiciatis! Adipisci
                      blanditiis delectus earum eius eligendi expedita, fugiat ipsam laudantium,
                      libero omnis possimus quasi quia quibusdam sunt tenetur. Eaque ipsa libero maiores molestiae nemo
                      possimus, quam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolorum velit vitae!
                      Aspernatur delectus dolorum est expedita in iure molestias neque sint vel voluptates! Consectetur
                      cumque facere, id illo, magnam magni maiores non quam recusandae, repellendus saepe sit suscipit vero.
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores autem cum error facilis
                      illum laudantium officiis placeat quasi sunt?</p>
                    <button class="btn btn-primary">Lorem.</button>
                  </div>
                </div>
              </div>
              <div class="col-lg-5 col-xl-4">
                <div class="card shadow mb-4">
                  <div class="card-header d-flex justify-content-between align-items-center">
                    <h6 class="text-primary font-weight-bold m-0">Aqui encontraras...</h6>
                  </div>
                  <div class="card-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, alias autem culpa cum deleniti dolorem
                      ea eaque eius eos error esse excepturi facere id incidunt inventore minima,
                      nam nemo perspiciatis quisquam ratione repudiandae sed tempora totam vero voluptas voluptatibus voluptatum.
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, incidunt.</p>
                    <button class="btn btn-primary">Lorem.</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer class="bg-white sticky-footer">
          <div class="container my-auto">
            <div class="text-center my-auto copyright"><span>FreeBook.com © 2019</span></div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
    import Firebase from 'firebase';
    const auth = Firebase.auth();
    const db = Firebase.firestore();

  export default {
    data() {
      return {
          user: '',
          email: '',
      }
    },
    methods: {
        logOut(){
            auth.signOut()
                .then(()=>{
                    console.log('out');
                    this.$router.replace('/')
                })
                .catch((err)=>{
                    alert("Error " + err)
                })
        }

    },
    computed: {

    },
    props: {

    },
      created() {
          var user = auth.currentUser;
          this.email = user.email;
          console.log(user)
      }
  }
</script>

<style>
  @import "../assets/css/bootstrap.min.css";
  @import "../assets/fonts/font-awesome.min.css";

</style>
