<template>
  <div class="container-fluid forgot-pass">
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
          <h3 class="mb-5">Reset Password</h3>
          <form class="text-center">
            <input type="password" id="password" class="form-control mb-4" placeholder="New Password" required />
            <input type="password" class="form-control mb-4" placeholder="Confirm New Password" required />
            <router-link to="/login">
            <button type="submit" class="btn btn-block btn-login">Reset</button>
            </router-link>
            <p class="small text-muted mt-3 mb-3">
              Please set a secure password that contains both uppercase and lowercase as well as number and symbols. This is for your own safety
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ForgotPass'
}
</script>

<style scoped src="../assets/css/style.css">
</style>
