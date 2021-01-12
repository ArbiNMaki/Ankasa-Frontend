<template>
    <div class="w-75 pl-5">
    <div class="card d-sm-block d-none">
        <div class="card-body">
        <div class="text-center">
          <div class="img-profile">
            <img :src="getUserData.image? getUserData.image : '/img/default-avatar.png'"  class="img-thumbnail" alt="image">
          </div>
        </div>
        <div class="text-center mt-3" >
            <div class="fileUpload btn btn-outline-primary btn-lg font-weight-bold">
                <span>Select Photo</span>
                 <input class="upload" id="image-profile" type="file" />
            </div>
        </div>
        <div class="text-center mt-3" >
            <h4 class="font-weight-bold" ></h4>
        </div>
        <div class="text-center mt-2" >
             <p style="color: #6B6B6B;" ></p>
        </div>
        <div class="row">
            <div class="col-6"><p class="" >Cards</p></div>
            <div class="col-6"><p class="text-right add-cards" >+ Add</p></div>
        </div>
        <div class="text-white cards mb-4 pt-2 pl-3 pr-3">
            <p class="font-weight-bold cards-id" >4441 1235 5512 5551</p>
            <div class="row cards-detail">
            <div class="col-6"><p class="" >X Card</p></div>
            <div class="col-6"><p class="text-right" >$ 1,440.2</p></div>
            </div>
        </div>
        <div class="font-weight-bold">
            <router-link to="profile" class="router-link">
            <p class="body-text-profile ml-2 mb-4"><img class="mr-4" src="../../src/assets/image/user.svg">Profile</p>
            </router-link>
            <p class="ml-2 mb-4"><img class="mr-4" src="../../src/assets/image/star.svg">My Review</p>
            <p class="ml-2 mb-4"><img class="mr-4" src="../../src/assets/image/setting.svg">Settings</p>
            <a class="body-text-logout ml-2 mb-4" style="cursor: pointer;" @click="handleLogout"><img class="mr-4" src="../assets/image/logout.svg">Logout</a>
        </div>
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
          if (this.files[0].size >= 1 * 1000000) {
            return self.alert('Sorry,file too large', 'error')
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
.img-profile {
  width:135px;
  height:135px;
  margin: auto auto;
}
.img-thumbnail {
  background-color: #fff;
  border: 2px solid rgba(35, 149, 255, 1) !important;
  border-radius: 50% !important;
  width:100%;
  height: 100%;
  object-fit: cover;
}
.edit-photo {
    display:flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background: #FFFFFF;
    box-shadow: 0px 8px 27px rgba(14, 63, 108, 0.19);
    border-radius: 20px;
    top:1000px;
}
.cont-edit-photo {
    position: absolute;
    right: 100px;
    bottom: 0px;
}
.cards {
    height: 68px;
}
.fileUpload {
    position: relative;
    overflow: hidden;
    margin: 10px;
}
.fileUpload input.upload {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    padding: 0;
    font-size: 20px;
    cursor: pointer;
    opacity: 0;
    filter: alpha(opacity=0);
}
.add-cards {
  color: rgba(35, 149, 255, 1);
}
.cards {
  background-color: rgba(35, 149, 255, 1);
  box-shadow: 0px 8px 25px rgba(35, 149, 255, 0.49);
  border-radius: 10px;
}
.cards-detail {
  margin-top: -15px;
  font-size: 12px;
}
.cards-id {
  letter-spacing: 1px;
  word-spacing: 1px;
}
.cards-title {
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height */
  letter-spacing: 0.3em;
  color: #2395FF;
}
</style>
