<template>
  <div class="container-fluid p-0 m-0">
    <div class="row m-0 p-0" id="wrapper">
      <aside class="main-sidebar col-12 col-md-3 col-lg-2 px-0">
        <div class="main-navbar">
          <nav class="navbar align-items-stretch navbar-light bg-white flex-md-nowrap border-bottom p-3">
            <a class="navbar-brand w-100 mr-0">
              <div class="d-table m-auto">
              <img id="main-logo" class="d-inline-block align-top mr-1" src="/logo.png">
              <span style="font-weight:500;">Ankasa</span>
              </div>
            </a>
          </nav>
        </div>
          <div class="nav-wrapper">
            <ul class="nav flex-column">
              <li class="separator p-1">
                <h6 class="ml-2 m-0">Dashboard</h6>
              </li>
              <li class="nav-item sidebar-item p-2">
                <a class="nav-link" @click="toPage('/admin/analytic')">
                <i class="fa fa-database" aria-hidden="true"></i>
                  <span class="ml-3">Analytic</span>
                </a>
              <li class="nav-item sidebar-item p-2">
                <a class="nav-link" @click="toPage('/admin/airlines')">
                  <i class="fa fa-plane"></i>
                  <span class="ml-3">Airlines</span>
                </a>
              </li>
              <li class="nav-item sidebar-item p-2">
                <a class="nav-link" @click="toPage('/admin/flight-route')">
                  <i class="fa fa-location-arrow"></i>
                  <span class="ml-3">Flight Route</span>
                </a>
              </li>
            </ul>
          </div>
      </aside>
      <main class="main-content col-lg-10 col-md-9 col-sm-12 p-0">
        <div class="main-navbar sticky-top bg-white">
          <nav class="navbar align-items-stretch navbar-light flex-md-end justify-content-end p-0">
              <ul class="navbar-nav border-left flex-row">
                <li class="nav-item dropdown">
                  <a class="nav-link d-flex align-items-center dropdown-toggle text-nowrap px-3" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                    <div class="user-avatar ">
                    <img class="rounded-circle mr-2" :src="getUserData.image" alt="User Avatar">
                    </div>
                    <span class="d-none d-md-inline-block ml-2">{{ getUserData.username }}</span>
                  </a>
                </li>
              </ul>
          </nav>
        </div>
        <div class="main-content-container no-gutters p-4">
          <router-view></router-view>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import { mapGetters } from 'vuex'
export default {
  name: 'AdminDashboard',
  state: {

  },
  methods: {
    toPage (path) {
      this.$router.push({ path: path })
    },
    cssFunction () {
      $('.sidebar-item').on('click', function () {
        $('.sidebar-item').removeClass('active')

        $(this).addClass('active')
      })
    }
  },
  mounted () {
    this.cssFunction()
  },
  computed: {
    ...mapGetters('auth', ['getUserData'])
  }
}
</script>

<style scoped>
* {
  /* border:1px solid red; */
}
#wrapper {
  min-height:100vh;
}
#main-logo {
  width:40px;
}
.main-sidebar {
  border-right:1px solid #E1E5EB;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
}
.sidebar-item {
  border-bottom:1px solid #E1E5EB;
}
.sidebar-item:hover {
  border-left:5px solid #007BFF;
}
.sidebar-item:hover {
  background:#EEEFF2;
}
.sidebar-item:hover a {
  background:#EEEFF2;
  color:#007BFF;
}
.nav-item a{
  color:#3D5170;
  font-weight:300;
  font-size:13px;
}
.user-avatar {
  width:50px;
  height:50px;
}
.user-avatar img{
  width:100%;
  height: 100%;
  object-fit: cover;
}
.prepend-search {
  height:max-content;
}
.main-content {
  background:#EEEFF2;
}
.separator {
  background:#FFFFFF;
  border:1px solid #E1E5EB;
}
.separator h6 {
  color:#3D5170;
  font-weight:500;
  font-size:13px;
  text-transform: uppercase;
}
.active {
    background:#EEEFF2;
}
.active a {
    color:#007BFF !important;
}
</style>
