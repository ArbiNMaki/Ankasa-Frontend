<template>
  <div class="wrapper p-0">
            <div class="card p-0 m-0">
              <div class="card-body">
                <h6 class="card-title cards-title">PROFILE</h6>
                <h3 class="card-text mb-5 font-weight-bold">Profile</h3>
                <div class="row">
                  <div class=" col-sm-12 col-lg-6">
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
                  </div>
                  </div>
                  <div class=" col-sm-12 col-lg-6">
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
                      <button type="submit" class="btn float-rigth mt-4">Save</button>
                    </form>
                  </div>
                  </div>
                </div>
              </div>
            </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Swal from 'sweetalert2'
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
        .then(() => {
          Swal.fire({
            title: 'Data Successfully Updated',
            icon: 'success'
          })
          this.getUserProfile()
          this.$awn.success('Profile has been updated')
        }).catch(() => {
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
.wrapper {
  height:100%;
}
.card {
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 15px;
    height:100%;
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
@media screen and (max-width:575.98px) {
  .wrapper {
    margin: 50px 0 0 0 ;
  }
}
</style>
