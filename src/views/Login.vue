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
          <form class="text-center">
            <input type="text" class="form-control mb-4" placeholder="Username"  required />
            <input type="password" class="form-control mb-4" placeholder="Password"  required >
            <button type="submit" class="btn btn-block btn-login" >Sign In</button>
            <p class="small text-muted mt-3 mb-3">
              Did you forget your password? <br />
              <router-link class="text-primary" to="/forgot">Tap here for reset</router-link>
            </p>
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
export default {
  name: 'Login'
}
</script>

<style scoped src="../assets/css/style.css">
</style>
