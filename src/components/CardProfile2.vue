<template>
<div class="cp">
  <div class="col-sm-9">
            <div class="card mb-4">
              <div class="card-body">
                <h6 class="card-title cards-title">PROFILE</h6>
                <h3 class="card-text mb-5 font-weight-bold">Profile</h3>
                <div class="row">
                  <div class="col-6">
                    <p class="font-weight-bold">Contact</p>
                    <div class="login-box">
                    <form>
                      <div class="user-box">
                        <input type="text">
                        <label> Email</label>
                      </div>
                      <div class="user-box">
                        <input type="text">
                        <label> Phone Number</label>
                      </div>
                    </form>
                    <p class="text-right color-default font-weight-bold">Account Settings
                      <img src="../../src/assets/image/btnback.png">
                      <img  src="../../src/assets/image/btnback (1).png">
                    </p>
                  </div>
                  </div>
                  <div class="col-6">
                    <p class="font-weight-bold"> Biodata</p>
                    <div class="login-box">
                    <form>
                      <div class="user-box">
                        <input type="text" name="">
                        <label> Username</label>
                      </div>
                      <div class="user-box">
                          <input type="text">
                        <label> City</label>
                      </div>
                      <div class="user-box">
                        <input type="text">
                        <label> Address</label>
                      </div>
                      <div class="user-box">
                        <input type="text">
                        <label> Post Code</label>
                      </div>
                      <button type="submit" class="btn float-rigth">Save</button>
                    </form>
                  </div>
                  </div>
                </div>
              </div>
            </div>
  </div>
</div>
</template>

<script>
export default {
}
</script>

<style scoped>
body, html {
  overflow: hidden;
}
.btn {
  color: #fff;
  font-weight: bold;
  background-color: #2395ff;
  box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
  padding: 12px 12px 12px 12px;
  border-radius: 10px;
}
.card-detail {
  margin-top: -15px;
  font-size: 12px;
}
.card-id {
  letter-spacing: 1px;
  word-spacing: 1px;
}
.card-title {
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.3em;
  color: #2395FF;
}
.color-default {
  color: #2395FF;
}
</style>
