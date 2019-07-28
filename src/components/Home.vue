<template>
  <div id="page-top">
    <div id="wrapper">
      <nav class="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
        <div class="container-fluid d-flex flex-column p-0">
          <a class="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
            <div class="sidebar-brand-icon rotate-n-15"><i class="fas fa-laugh-wink"></i></div>
            <div class="sidebar-brand-text mx-3"><span>FreeBook.com</span></div>
          </a>
          <hr class="sidebar-divider my-0">
          <ul class="nav navbar-nav text-light" id="accordionSidebar">
            <li class="nav-item" role="presentation"><a class="nav-link active" href="/home"><span>Dashboard</span></a></li>
            <li class="nav-item" role="presentation"><a class="nav-link active" href="/home"><span>Libros</span></a></li>
            <li class="nav-item" role="presentation"><a class="nav-link active" href="/home"><span>Lorem ipsum.</span></a></li>
            <li class="nav-item" role="presentation"><a class="nav-link active" href="/home"><span>Lorem.</span></a></li>
          </ul>
        </div>
      </nav>
      <div class="d-flex flex-column" id="content-wrapper">
        <div id="content">
          <nav class="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
            <div class="container-fluid"><button class="btn btn-link d-md-none mr-3" id="sidebarToggleTop" type="button"><i class="fas fa-bars"></i></button>
              <ul class="nav navbar-nav flex-nowrap ml-auto">
                <div class="d-none d-sm-block topbar-divider"></div>
                <li class="nav-item dropdown no-arrow" role="presentation">
                <li>
                <b-nav-item-dropdown right>
                  <!-- Using 'button-content' slot -->
                  <template slot="button-content"><em>{{this.email}}</em></template>
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
                  <div
                    class="dropdown-menu shadow dropdown-menu-right animated--grow-in" role="menu"><a class="dropdown-item" role="presentation" href="#"><i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Profile</a><a class="dropdown-item" role="presentation" href="#"><i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Settings</a>
                    <a
                      class="dropdown-item" role="presentation" href="#"><i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Activity log</a>
                    <div class="dropdown-divider"></div><a class="dropdown-item" role="presentation" href="#"><i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Logout</a></div>
                </li>
                </li>
              </ul>
            </div>
          </nav>
          <div class="container-fluid">
            <div class="d-sm-flex justify-content-between align-items-center mb-4">
              <h3 class="text-dark mb-0">Dashboard</h3></div>

          </div>
        </div>
        <footer class="bg-white sticky-footer">
          <div class="container my-auto">
            <div class="text-center my-auto copyright"><span>FreeBook.com © Brand 2019</span></div>
          </div>
        </footer>
      </div></div>
  </div>
</template>

<script>
    import Firebase from 'firebase';
    const auth = Firebase.auth();

  export default {
    data() {
      return{
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

</style>
