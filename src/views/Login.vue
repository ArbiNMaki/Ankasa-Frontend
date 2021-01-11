<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-6 d-none d-sm-block">
        <div class="img-left">
          <img src="../assets/image/illustrationWhite.png" />
        </div>
      </div>

      <div class="right-side col-sm-6">
        <div class="container">
          <h5 class="mt-3 mb-5">
            <img src="../assets/image/planeBlue.png" alt="logo" /> Ankasa
          </h5>
          <h3 class="mb-5">Login</h3>
          <form class="text-center" @submit.prevent="login">
            <input type="text" class="form-control mb-4" placeholder="Email" autofocus required v-model="form.email" />
            <input type="password" class="form-control mb-5" placeholder="Password" required v-model="form.password"/>
            <button type="submit" class="btn btn-block btn-login" >Sign In</button>
            <p class="small text-muted mt-3 mb-3">
              Did you forget your password? <br />
              <a class="text-primary" data-toggle="modal" data-target="#forgot-pass">Tap here for reset</a>
            </p>
            <ModalForgot />
            <hr />
            <p class="small text-muted">Or Sign in with</p>
            <b-button class="sign" variant="outline-info">
              <img src="../assets/image/google.png" alt="google" />
            </b-button>
            <b-button class="sign" variant="outline-info">
              <img src="../assets/image/fb.png" alt="facebook" />
            </b-button>
            <p class="small text-muted mt-4 mb-5">
              Don't have an account? please,
              <router-link to="/register">create a new one!</router-link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import { mapActions, mapGetters } from 'vuex'
import ModalForgot from '../../src/components/modules/ModalForgot'

export default {
  name: 'Login',
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  components: {
    ModalForgot
  },
  methods: {
    ...mapActions({
      onLogin: 'auth/onLogin'
    }),
    login () {
      this.onLogin(this.form).then((result) => {
        if (result === "Cannot read property 'password' of undefined") {
          this.alertExist()
          localStorage.removeItem('token')
          localStorage.removeItem('id')
          localStorage.removeItem('username')
        } else if (result === 'Incorrect password! Please try again') {
          this.alertMatch()
          localStorage.removeItem('token')
          localStorage.removeItem('id')
          localStorage.removeItem('username')
        } else {
          if (this.getUserData.role_id === 1) {
            this.$router.push({ path: '/cust/profile' })
          } else if (this.getUserData.role_id === 2) {
            this.$router.push({ path: '/admin' })
          }
        }
      }).catch(err => this.alertError(err.message))
    },
    alertExist () {
      Swal.fire({
        icon: 'error',
        title: 'Username Doesnt Exist!',
        text: 'Please check your personal info or create a new one'
      })
    },
    alertMatch () {
      Swal.fire({
        icon: 'question',
        title: 'Username and Password Doesnt Match!'
      })
    },
    alertError () {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!'
      })
    }
  },
  computed: {
    ...mapGetters('auth', ['getUserData'])
  }
}
</script>

<style scoped src="../assets/css/style.css">
</style>
