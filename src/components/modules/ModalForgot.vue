<template>
  <div>
    <div class="modal" tabindex="-1" id="forgot-pass">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <h5 class="text-center mb-5">
            <img src="../../assets/img/planeBlue.png" alt="logo" /> Ankasa
          </h5>
          <p class="small text-muted text-center mt-3">
            Forgot your password? Please, enter your email here!
            <br />
            You'll get message soon to create a new password
          </p>
          <form class="text-center" @submit.prevent="forgotPassword()">
            <input type="text" class="form-control" placeholder="Email" autofocus required v-model="forgotEmail" />
            <button type="submit" class="btn btn-block btn-login">Send</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import { mapActions } from 'vuex'

export default {
  name: 'ModalForgot',
  data () {
    return {
      forgotEmail: null
    }
  },
  methods: {
    ...mapActions({
      onForgotPassword: 'auth/onForgotPassword'
    }),
    forgotPassword () {
      const data = {
        email: this.forgotEmail
      }
      this.onForgotPassword(data).then(result => {
        this.alertActivate(result)
        location.reload()
      }).catch(err => this.alertError(err.message))
    },
    alertActivate () {
      Swal.fire(
        'Check your email',
        'Please Check Your Email to reset password',
        'success'
      )
    },
    alertError () {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Send Email Failed!'
      })
    }
  }
}

</script>
<style scoped>
h5 img {
  width: 5%;
}
input[type="text"] {
  margin: 5% auto 0 auto;
  width: 80%;
}
.btn-login {
  width: 80%;
  margin: 5% auto 0 auto;
  color: #fff;
  font-weight: bold;
  background-color: #2395ff;
  box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
  border-radius: 10px;
  margin: 25px auto;
}
</style>
