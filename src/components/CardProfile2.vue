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
                        <label> Email :</label>
                        <input type="text" class="form-control" v-model="input.email">
                      </div>
                      <div class="user-box">
                        <label> Phone Number :</label>
                        <input type="text" class="form-control" v-model="input.phoneNumber">
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
                    <form @submit.prevent="handleUpdateProfile">
                      <div class="user-box">
                        <label> Username :</label>
                        <input type="text" class="form-control" name="" v-model="input.userName">
                      </div>
                      <div class="user-box">
                        <label> City :</label>
                        <input type="text" class="form-control" name="" v-model="input.city" id="">
                      </div>
                      <div class="user-box">
                        <label> Address :</label>
                        <input type="text" class="form-control" v-model="input.address">
                      </div>
                      <div class="user-box">
                        <label> Post Code :</label>
                        <input type="text" class="form-control" v-model="input.postCode">
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
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      input: {
        email: '',
        phoneNumber: '',
        userName: '',
        city: '',
        address: '',
        postCode: ''
      }
    }
  },
  methods: {
    ...mapActions('user', ['getUser', 'updateProfile']),
    async handleGetProfile () {
      await this.getUser()
      this.setInput()
    },
    async handleUpdateProfile () {
      const payload = {
        email: this.input.email,
        phone_number: this.input.phoneNumber,
        username: this.input.userName,
        city: this.input.city,
        address: this.input.address,
        post_code: this.input.postCode
      }
      this.updateProfile(payload)
        .then((result) => {
          this.$awn.success('Profile has been updated')
        }).catch((err) => {
          console.log('err :>> ', err)
        })
    },
    setInput () {
      this.input.email = this.getUserData.email
      this.input.phoneNumber = this.getUserData.phone_number
      this.input.userName = this.getUserData.username
      this.input.city = this.getUserData.city
      this.input.address = this.getUserData.address
      this.input.postCode = this.getUserData.post_code
    }
  },
  mounted () {
    this.handleGetProfile()
  },
  computed: {
    ...mapGetters('user', ['getUserData'])
  }
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
