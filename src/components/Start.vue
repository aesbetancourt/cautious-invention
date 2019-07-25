<template>
  <div>
    <section class="flex-column" id="top">
      <nav class="navbar navbar-dark navbar-expand-md sticky-top bg-dark">
        <div class="container-fluid"><a class="navbar-brand" href="#">FreeBook.com</a><button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
          <div class="collapse navbar-collapse"
               id="navcol-1">
            <ul class="nav navbar-nav ml-auto">
              <li class="nav-item" role="presentation">
                <router-link to="/signup">
                 Registrate
                </router-link>
              </li>
              <li class="nav-item" role="presentation">
                <router-link to="/login">
                  Iniciar Sesión
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <h1 class="text-center" id="title">Biblioteca Virtual</h1>
      <h1 class="text-center" id="subtitle">El mayor repositorio de libros gratis.</h1>
    </section>
    <section></section>
    <div class="footer-dark">
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-md-3 item">
              <h3>Services</h3>
              <ul>
                <li><a href="#">Web design</a></li>
                <li><a href="#">Development</a></li>
                <li><a href="#">Hosting</a></li>
              </ul>
            </div>
            <div class="col-sm-6 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li><a href="#">Company</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
            <div class="col-md-6 item text">
              <h3>Company Name</h3>
              <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
            </div>
          </div>
          <p class="copyright">FreeBook.com © 2019</p>
        </div>
      </footer>
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
  @import "../assets/css/styles.css";
  @import "../assets/css/Footer-Dark.css";
</style>
