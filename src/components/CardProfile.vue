<template>
  <div class="card-main mt-3">
    <div class="sub-card m-4">
      <form enctype="multipart/form-data" @change.prevent="update">
        <div class="text-center">
        <div class="user-profile">
        <img :src="getUserData.image? getUserData.image : '/img/default-avatar.png'" alt="profile" class="rounded-circle mt-4">
        </div>
        <label class="custom-file-upload">
          <input class="upload" id="image-profile" type="file" />
          Select Photo
        </label>
        <h5></h5>
        <p class="small text-muted"></p>
      </div>
      </form>
        <b-row>
            <b-col><b>Card</b></b-col>
            <b-col><p class="text-info text-right">+ Add</p></b-col>
          </b-row>
        <div class="mini-card">
          <b>4441 1235 5512 5551</b>
          <b-row>
            <b-col><p>X Card</p></b-col>
            <b-col><p class="text-right">$ 1,440.2</p></b-col>
          </b-row>
        </div>

        <div class="menu">
          <ul>
            <li class="text-primary">
              <router-link to="/user"> <b-icon-person-circle class="mr-3"></b-icon-person-circle> Profile
              </router-link>
            </li>
            <li> <b-icon-star-fill class="text-secondary mr-3"></b-icon-star-fill> My Review</li>
            <li> <b-icon-gear-fill class="text-secondary mr-3"></b-icon-gear-fill> Settings</li>
            <li class="text-danger" style="cursor: pointer;" @click="handleLogout"> <b-icon-box-arrow-right class="mr-3"></b-icon-box-arrow-right>Logout</li>
          </ul>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import $ from 'jquery'
import Swal from 'sweetalert2'
import mixin from '../mixins/index'
export default {
  mixins: [mixin],
  data () {
    return {
    }
  },
  methods: {
    ...mapActions('user', ['updateImage', 'getUser']),
    ...mapMutations('auth', ['LOGOUT_AUTH']),
    ...mapMutations(['LOGOUT_INDEX']),
    ...mapMutations('user', ['LOGOUT_USER']),
    ...mapMutations('customer', ['LOGOUT_CUSTOMER']),
    uploadImage () {
    },
    detectChangeImage () {
      const self = this
      $('#image-profile').change(function () {
        if (this.files && this.files[0]) {
          if (this.files[0].size >= 2 * 1000000) {
            return self.alert('error', 'Sorry File too large')
          }
          Swal.fire({
            title: 'Are you sure?',
            icon: 'question',
            text: 'change your profile photo?',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, I want to change!'
          }).then((result) => {
            if (result.isConfirmed) {
              const form = new FormData()
              form.append('image', this.files[0])
              self.$awn.asyncBlock(
                self.updateImage(form),
                resp => {
                  self.getUser()
                    .then((result) => {
                      self.$awn.success('Photo profile has been updated')
                    }).catch(() => {
                    })
                }
              )
            }
          })
        }
      })
    },
    handleLogout () {
      this.LOGOUT_INDEX()
      this.LOGOUT_USER()
      this.LOGOUT_CUSTOMER()
      this.LOGOUT_AUTH()
      this.alert('success', 'See you later 👋', '', false)
      this.$router.push({ path: '/login' })
    }
  },
  mounted () {
    this.detectChangeImage()
  },
  computed: {
    ...mapGetters('user', ['getUserData'])
  }
}
</script>

<style scoped>
input[type="file"] {
  display: none;
  border-radius: 10px;
  font-weight: bold;
  padding: 8px;
  margin: 20px auto;
}
.custom-file-upload {
  border: 1px solid #ccc;
  display: inline-block;
  padding: 6px 12px;
  cursor: pointer;
  background-color: #FFFFFF;
  border: 1px solid #2395FF;
  box-sizing: border-box;
  border-radius: 10px;
  color: #2395FF;
  margin-bottom: 15px;
}
.card-main {
  background-color: #fff;
  border-radius: 15px;
  width: 300px;
  height: 100%;
  margin: auto;
}
.user-profile img{
  width: 100px;
  height: 90px;
  border: 3px solid #2395FF;
  padding: 5px;
  margin-bottom: 15px;
}
.btn-photo {
  border-radius: 10px;
  font-weight: bold;
  padding: 8px;
  margin: 20px auto;
}
h5 {
  font-weight: bolder;
}
p {
  font-size: 12px;
}
.mini-card {
  background-color: #2395FF;
  color: #fff;
  box-shadow: 0px 8px 25px rgba(35, 149, 255, 0.49);
  border-radius: 10px;
  padding: 15px;
}
.mini-card b {
  letter-spacing: 2.3px;
}
.mini-card p {
  color: #AEFAFF;
}
.menu ul li{
  margin-top: 20px;
  list-style: none;
  font-weight: bold;
  cursor: pointer;
}
@media (max-width: 1008px) {
  .card-main {
    width: 400px;
  }
  .user-profile img {
    margin-bottom: 15px;
  }
  .mini-card b {
    letter-spacing: 4px;
  }
}
@media (max-width: 576px) {
  .card-main {
    width: 400px;
  }
  .user-profile img {
    margin-bottom: 15px;
  }
  .mini-card b {
    letter-spacing: 4px;
  }
}
</style>
