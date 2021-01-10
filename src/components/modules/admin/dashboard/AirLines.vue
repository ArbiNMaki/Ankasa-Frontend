<template>
  <div class="m-0">
    <div class="row">
      <div class="col-lg-12 col-sm-12">
        <div class="card card-small mb-4">
          <div class="card-header border-bottom d-flex justify-content-between align-items-center">
            <h6 class="m-0">AirLines</h6>
            <div class="search">
            <div class="input-group prepend-search input-group-seamless ml-3">
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalNewAirLines">
              <i class=" fa fa-plus"></i> New Airlines
            </button>
            <div class="input-group-prepend">
                  <div class="input-group-text border-0 bg-white">
                    <i v-if="!input.search" class="fa fa-search"></i>
                    <i v-if="input.search" class="fa fa-times" @click="clearSearch"></i>
                  </div>
                </div>
                <input v-model="input.search" @keyup.enter.prevent="handleSearchAirLines" class="navbar-search border-0 form-control search-input shadow-none rounded" type="text" placeholder="Search for something..." aria-label="Search"> </div>
            </div>
          </div>
          <div v-if="!input.search" class="card-body p-0 text-center">
            <div v-for="airLine in getairLinesData" :key="airLine.id" class="card card-airlines card-small d-flex flex-lg-row flex-sm-column justify-content-between p-3 mb-3">
              <div class="information d-flex flex-lg-row flex-column justify-content-center">
              <div class="logo">
                <img :src="airLine.logo" alt="">
              </div>
              <div class="name ml-lg-4 d-flex align-items-center">
                <p>{{airLine.name}}</p>
              </div>
              </div>
              <div class="actions d-flex flex-lg-row">
                <!-- <button class="btn btn-actions btn-primary">
                  <i class="fa fa-info-circle"></i>
                </button> -->
                <button class="btn btn-actions btn-danger ml-2" @click="handleDeleteAirLines(airLine.id)">
                 <i class="fa fa-trash"></i>
                </button>
                <button class="btn btn-actions btn-warning ml-2"  @click="showModalUpdateAirLines(airLine.id)">
                 <i class="fa fa-pencil"></i>
                </button>
              </div>
            </div>
          </div>
          <div v-if="input.search" class="card-body p-0 text-center">
            <div v-for="airLine in searchData" :key="airLine.id" class="card card-airlines card-small d-flex flex-lg-row flex-sm-column justify-content-between p-3 mb-3">
              <div class="information d-flex flex-lg-row flex-column justify-content-center">
              <div class="logo">
                <img :src="airLine.logo" alt="">
              </div>
              <div class="name ml-lg-4 d-flex align-items-center">
                <p>{{airLine.name}}</p>
              </div>
              </div>
              <div class="actions d-flex flex-lg-row">
                <!-- <button class="btn btn-actions btn-primary">
                  <i class="fa fa-info-circle"></i>
                </button> -->
                <button class="btn btn-actions btn-danger ml-2" @click="handleDeleteAirLines(airLine.id)">
                 <i class="fa fa-trash"></i>
                </button>
                <button class="btn btn-actions btn-warning ml-2"  @click="showModalUpdateAirLines(airLine.id)">
                 <i class="fa fa-pencil"></i>
                </button>
              </div>
            </div>
          </div>
          <div v-if="airLinesDataPagination" class="card-footer">
  <nav class="d-flex" aria-label="Page navigation example" >
            <ul class="pagination mx-auto">
                <li class="page-item"><a class="page-link" href="#" @click.prevent="handleGetAirLines(parseInt(airLinesDataPagination.currentPage) - 1)">Previous</a></li>
                <li v-for="noPage in airLinesDataPagination.totalPage" :key="noPage" :class="[airLinesDataPagination.currentPage == noPage ? 'active' : '']" class="page-item"><a class="page-link" href="#" @click.prevent="handleGetAirLines(noPage)">{{noPage}}</a></li>
                <li class="page-item" :class="[airLinesDataPagination.currentPage == airLinesDataPagination.totalPage ? 'disabled' : '']"><a class="page-link" href="#" @click.prevent="handleGetAirLines(parseInt(airLinesDataPagination.currentPage) + 1)">Next</a></li>
            </ul>
        </nav>
          </div>
        </div>
      </div>
      <!-- New AirLines Modal -->
      <div class="modal fade" id="modalNewAirLines" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">New AirLine</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
               <div class="row">
                <div class="col">
                  <form @submit.prevent="handleInsertNewAirLines">
                    <div class="form-row d-flex flex-column">
                      <div class="foto-create-airline mx-auto">
                       <img id="upload-image" class="" src="../../../../assets/image/vector 02.png" alt="user profile">
                      </div>
                        <div class="edit-image">
                            <input class="d-none" id="input-upload-image" type="file" accept="image/x-png/,image/gif,image/jpeg"/>
                            <label for="input-upload-image" class="label-create"><i class="fa fa-camera"></i> Add Image</label>
                        </div>
                      <div class="form-group col-md-12">
                        <label for="airLineName">AirLine Name</label>
                        <input type="text" v-model="input.airLineName" class="form-control" id="airLineName" placeholder="AirLine Name"> </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" @click="handleInsertNewAirLines">Save changes</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Update AirLines Modal -->
      <div class="modal fade" id="modalUpdateAirLines" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Update AirLine</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
               <div class="row">
                <div class="col">
                  <form @submit.prevent="handleUpdateAirLines">
                    <div class="form-row d-flex flex-column">
                      <div class="foto-create-airline mx-auto">
                       <img id="upload-update-image" class="" src="../../../../assets/image/vector 02.png" alt="user profile">
                      </div>
                        <div class="edit-image">
                            <input class="d-none" id="input-upload-update-image" type="file" accept="image/x-png/,image/gif,image/jpeg"/>
                            <label for="input-upload-update-image" class="label-create"><i class="fa fa-camera"></i> change photo</label>
                        </div>
                      <div class="form-group col-md-12">
                        <label for="updateAirLineName">AirLine Name</label>
                        <input type="text" v-model="input.updateAirLineName" class="form-control" id="updateAirLineName" placeholder="AirLine Name"> </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <input type="text" class="d-none" v-model="input.idUpdate">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" @click="handleUpdateAirLines()">Save changes</button>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="col-lg-8">
        <div class="card card-small mb-4">
          <div class="card-header border-bottom">
            <h6 class="m-0">Account Details</h6>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item p-3">
              <div class="row">
                <div class="col">
                  <form>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label for="feFirstName">First Name</label>
                        <input type="text" class="form-control" id="feFirstName" placeholder="First Name" value="Sierra"> </div>
                      <div class="form-group col-md-6">
                        <label for="feLastName">Last Name</label>
                        <input type="text" class="form-control" id="feLastName" placeholder="Last Name" value="Brooks"> </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label for="feEmailAddress">Email</label>
                        <input type="email" class="form-control" id="feEmailAddress" placeholder="Email" value="sierra@example.com"> </div>
                      <div class="form-group col-md-6">
                        <label for="fePassword">Password</label>
                        <input type="password" class="form-control" id="fePassword" placeholder="Password"> </div>
                    </div>
                    <div class="form-group">
                      <label for="feInputAddress">Address</label>
                      <input type="text" class="form-control" id="feInputAddress" placeholder="1234 Main St"> </div>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label for="feInputCity">City</label>
                        <input type="text" class="form-control" id="feInputCity"> </div>
                      <div class="form-group col-md-4">
                        <label for="feInputState">State</label>
                        <select id="feInputState" class="form-control">
                          <option selected>Choose...</option>
                          <option>...</option>
                        </select>
                      </div>
                      <div class="form-group col-md-2">
                        <label for="inputZip">Zip</label>
                        <input type="text" class="form-control" id="inputZip"> </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-12">
                        <label for="feDescription">Description</label>
                        <textarea class="form-control" name="feDescription" rows="5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?</textarea>
                      </div>
                    </div>
                    <button type="submit" class="btn btn-accent">Update Account</button>
                  </form>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import $ from 'jquery'
import Swal from 'sweetalert2'
import mixin from '../../../../mixins/index'
export default {
  name: 'AirLines',
  mixins: [mixin],
  data () {
    return {
      airLinesData: null,
      airLinesDataPagination: null,
      searchData: [],
      input: {
        airLineName: '',
        updateAirLineName: '',
        idUpdate: '',
        search: ''
      }
    }
  },
  methods: {
    ...mapActions('airlines', ['getDataAirLines', 'searchAirLines', 'insertNewAirLines', 'getDataAirLinesById', 'updateLogo', 'deleteAirLines', 'updateAirLines']),
    async handleGetAirLines (noPage) {
      const payload = {
        page: noPage || 1,
        limit: 10
      }
      // const airLinesData = await this.getDataAirLines(payload)
      // this.airLinesData = await airLinesData.airlines
      // this.airLinesDataPagination = await airLinesData.pagination

      this.getDataAirLines(payload)
        .then(async (result) => {
          this.airLinesData = await result.airlines
          this.airLinesDataPagination = await result.pagination
        }).catch((err) => {
          console.log('err :>> ', err)
        })
    },
    changePhoto () {
      $('#input-upload-image').change(function () {
        if (this.files && this.files[0]) {
          var reader = new FileReader()
          reader.readAsDataURL(this.files[0])
          reader.onload = function (e) {
            var img = $('#upload-image')
            img.attr('src', this.result)
          }
        }
      })
    },
    handleInsertNewAirLines () {
      const self = this
      if (!document.getElementById('input-upload-image').files[0] || this.input.airLineName === '') {
        return this.$awn.alert('Foto or Name cannot empty', { icons: { prefix: '<i class="fa fa-exclamation-triangle"' } })
      }
      const form = new FormData()
      form.append('logo', document.getElementById('input-upload-image').files[0])
      form.append('name', this.input.airLineName)
      this.$awn.asyncBlock(
        this.insertNewAirLines(form),
        resp => {
          $('#upload-image').attr('src', '/logo.png')
          this.input.airLineName = ''
          $('#modalNewAirLines .close').click()
          self.handleGetAirLines()
          this.$awn.success('airlines successfully added')
        },
        () => {
          this.$awn.alert('Looks like server having trouble', { icons: { prefix: '<i class="fa fa-sad-tear"' } })
        }
      )
    },
    async showModalUpdateAirLines (id) {
      const result = await this.getDataAirLinesById(id)
      // set data input
      this.input.updateAirLineName = result.name
      $('#upload-update-image').attr('src', result.logo)
      console.log('result.id :>> ', result.id)
      this.input.idUpdate = result.id
      window.$('#modalUpdateAirLines').modal('toggle')
    },
    handleUpdateAirLines (id) {
      if (this.input.updateAirLineName === '') {
        return this.$awn.alert('airline name cannot empty')
      }
      const payload = {
        id: this.input.idUpdate,
        name: this.input.updateAirLineName
      }
      this.$awn.asyncBlock(
        this.updateAirLines(payload),
        resp => {
          this.input.updateAirLineName = ''
          window.$('#modalUpdateAirLines').modal('toggle')
          this.input.idUpdate = ''
          this.handleGetAirLines()
          this.$awn.success('AirLines has been updated')
        },
        () => {
          this.$awn.alert('Looks like server having trouble', { icons: { prefix: '<i class="fa fa-sad-tear"' } })
        }
      )
    },
    detectUpdatePhotoAirLines () {
      const self = this
      $('#input-upload-update-image').change(function () {
        const id = self.input.idUpdate
        console.log('id :>> ', id)
        if (this.files && this.files[0]) {
          if (this.files[0].size >= 3 * 1000000) {
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
              form.append('logo', this.files[0])
              const payload = {
                id,
                form: form
              }
              self.$awn.asyncBlock(
                self.updateLogo(payload),
                resp => {
                  self.input.updateAirLineName = ''
                  $('#modalUpdateAirLines .close').click()
                  self.handleGetAirLines()
                  self.$awn.success('Logo has been updated')
                  self.input.idUpdate = ''
                }
              )
            }
          })
        }
      })
    },
    handleDeleteAirLines (id) {
      const self = this
      Swal.fire({
        title: 'Delete Data ?',
        icon: 'question',
        text: 'you cannot reverse this action',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, I want to delete!'
      }).then((result) => {
        if (result.isConfirmed) {
          self.$awn.asyncBlock(
            self.deleteAirLines(id),
            resp => {
              self.handleGetAirLines()
              self.$awn.success('Airlines has been deleted')
            }
          )
        }
      })
    },
    handleSearchAirLines () {
      const payload = {
        name: this.input.search
      }
      console.log('payload :>> ', payload)
      this.searchAirLines(payload)
        .then((result) => {
          this.searchData = result
          this.handleGetAirLines()
        }).catch((err) => {
          console.log('err :>> ', err)
          if (err === 'Data not found') {
            this.alert('error', 'Data not found', 'Oops, not data match', true)
          }
        })
    },
    clearSearch () {
      this.input.search = ''
      this.searchData = []
    }
  },
  computed: {
    getairLinesData () {
      return this.airLinesData
    }
  },
  async created () {
  },
  async beforeMount () {
    await this.handleGetAirLines()
  },
  async mounted () {
    this.changePhoto()
    this.detectUpdatePhotoAirLines()
    console.log('this.airLinesDataPagnation :>> ', this.airLinesDataPagination)
  }
}
</script>

<style scoped>
.table {
  max-height:100px;
  display:inline;
}
.table-wrapper {
  max-height:500px;
  overflow:auto;
}
.table th {
  position:sticky;
  top:0;
  background:#F8F9FA;
}
.search-input {
  border-radius:50px;
}
.card-airlines .logo{
  width:100px;
  height:70px;
}
.card-airlines .logo img {
  width:100%;
  height:100%;
  object-fit: cover;
  border-radius:10px;
}
.card-airlines .name p {
  font-weight: 500;
  color:#595959;
}
.btn-actions {
  height: 40px;
}
@media only screen and (max-width: 576px) {
  .card-airlines .logo {
    margin:auto auto;
  }
  .information .name p{
    text-align:center;
    margin:auto auto;
  }
  .card-airlines .logo img{
    text-align:center;
  }
  .information {
    /* background-color:red; */
  }
  .actions {
    display:flex;
    justify-content: center;
  }
}
.foto-create-airline {
  width:100px;
  height:100px;
}
.foto-create-airline img{
  width:100%;
  height:100%;
  object-fit: contain;
  border-radius:50%;
}
.edit-image {
  margin:auto auto;
}
.label-create {
  margin:10px auto;
  font-weight: 500;
}
</style>
