<template>
  <div class="m-0">
    <div class="row">
      <div class="col-lg-12 col-sm-12">
        <div class="card card-small mb-4">
          <div class="card-header border-bottom d-flex justify-content-between align-items-center">
            <h6 class="m-0">FlighRoute</h6>
            <div class="search">
            <div class="input-group prepend-search input-group-seamless ml-3">
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalNewFlightRoute">
              <i class=" fa fa-plus"></i> New Route
            </button>
            <div class="input-group-prepend">
                  <div class="input-group-text border-0 bg-white">
                    <i v-if="!input.search" class="fa fa-search"></i>
                    <i v-if="input.search" class="fa fa-times" @click="clearSearch"></i>
            </div>
            </div>
               <input v-model="input.search" @keyup.enter="handleSearch" class="navbar-search border-0 form-control search-input shadow-none rounded" type="text" placeholder="Search for something..." aria-label="Search">
            </div>
            </div>
          </div>
          <div v-if="!input.search" class="card-body p-4 text-center">
              <div class="ticketing" v-for="(route, index) in flightRoute.data" :key="index">
                <div class="ticket">
                  <div class="top-ticket">
                    <div class="airline-logo">
                      <img :src="route.AirLine.logo" alt="">
                  </div>
                  <p>{{route.AirLine.name}} || {{route.flightClass}}</p>
                  </div>
                  <div class="center">
                      <div class="col1">
                        <div class="from">
                      <p class="country">{{ route.routeFrom }}</p>
                      <p class="timeto">{{ route.departureTime }}</p>
                    </div>
                    <i class="fas fa-plane"></i>
                    <div class="to">
                      <p class="country">{{ route.routeTo }}</p>
                      <p class="timeto">{{ route.timeArrived }}</p>
                    </div>
                      </div>
                    <div class="col2">
                      <p class="time">{{ route.flightDuration }}<br><span class="time-detail">({{route.transit > 0 ? route.transit + ' transit' : ''}} {{route.direct > 0 ? route.direct + ' direct' : ''}})</span></p>
                    </div>
                    <div class="col3" >
                      <i v-for="(facilities, index) in route.Facilities" :key="index">
                        <i class="fas fa-suitcase" v-if="facilities.facility === 'luggage'"></i>
                        <i class="fas fa-wifi" v-if="facilities.facility === 'wi-fi'"></i>
                        <i class="fas fa-utensils" v-if="facilities.facility === 'meal'"></i>
                      </i>
                    </div>
                    <div class="col4">
                      <!-- <p class="pricetot">Rp</p> -->
                      <p class="pricetot">Rp.{{route.price}}</p>
                    </div>
                  </div>
                  <div class="d-flex action-button">
                    <p>Actions :</p>
                <button class="btn btn-actions btn-danger ml-2" @click="handleDeleteFlightRoute(route.id)">
                 <i class="fa fa-trash"></i>
                </button>
                <button class="btn btn-actions btn-warning ml-2" @click="showModalUpdateFlightRoute(route.id)">
                 <i class="fa fa-pencil"></i>
                </button>
                  </div>
                </div>
              </div>
          </div>
          <div v-if="input.search" class="card-body p-4 text-center">
              <div class="ticketing" v-for="(route, index) in search.data" :key="index">
                <div class="ticket">
                  <div class="top-ticket">
                    <div class="airline-logo">
                      <!-- <img :src="route.AirLine.logo" alt=""> -->
                  </div>
                  <!-- <p>{{route.AirLine.name}} || {{route.flightClass}}</p> -->
                  </div>
                  <div class="center">
                      <div class="col1">
                        <div class="from">
                      <p class="country">{{ route.routeFrom }}</p>
                      <p class="timeto">{{ route.departureTime }}</p>
                    </div>
                    <i class="fas fa-plane"></i>
                    <div class="to">
                      <p class="country">{{ route.routeTo }}</p>
                      <p class="timeto">{{ route.timeArrived }}</p>
                    </div>
                      </div>
                    <div class="col2">
                      <p class="time">{{ route.flightDuration }}<br><span class="time-detail">({{route.transit > 0 ? route.transit + ' transit' : ''}} {{route.direct > 0 ? route.direct + ' direct' : ''}})</span></p>
                    </div>
                    <div class="col4">
                      <!-- <p class="pricetot">Rp</p> -->
                      <p class="pricetot">Rp.{{route.price}}</p>
                    </div>
                  </div>
                  <div class="d-flex action-button">
                    <p>Actions :</p>
                <button class="btn btn-actions btn-danger ml-2" @click="handleDeleteFlightRoute(route.id)">
                 <i class="fa fa-trash"></i>
                </button>
                <button class="btn btn-actions btn-warning ml-2" @click="showModalUpdateFlightRoute(route.id)">
                 <i class="fa fa-pencil"></i>
                </button>
                  </div>
                </div>
              </div>
          </div>
          <div class="card-footer" v-if="flightRoute.pagination">
              <nav class="d-flex" aria-label="Page navigation example" >
            <ul class="pagination mx-auto">
                <li class="page-item"><a class="page-link" href="#" @click.prevent="handleGetAllFlightRoute(parseInt(flightRoute.pagination.currentPage) - 1)">Previous</a></li>
                <li v-for="noPage in flightRoute.pagination.totalPage" :key="noPage" :class="[flightRoute.pagination.currentPage == noPage ? 'active' : '']" class="page-item"><a class="page-link" href="#" @click.prevent="handleGetAllFlightRoute(noPage)">{{noPage}}</a></li>
                <li class="page-item" :class="[flightRoute.pagination.currentPage == flightRoute.pagination.totalPage ? 'disabled' : '']"><a class="page-link" href="#" @click.prevent="handleGetAllFlightRoute(parseInt(flightRoute.pagination.currentPage) + 1)">Next</a></li>
            </ul>
        </nav>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal Insert -->
          <div class="modal fade" id="modalNewFlightRoute" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Create FlightRoute</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
               <div class="row">
                <div class="col">
          <div class="card card-small mb-4">
          <div class="card-header border-bottom">
            <h6 class="m-0">Flight route</h6>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item p-3">
              <div class="row">
                <div class="col">
                  <form>
                    <div class="form-row">
                      <div class="form-group col-md-12">
                        <label for="feFirstName">Class</label>
                        <select name="" v-model="input.class" class="form-control" id="">
                          <option disabled value="">Select One Class</option>
                          <option value="ekonomi">Ekonomi</option>
                          <option value="business">Business</option>
                          <option value="first-class">Frist-Class</option>
                        </select>
                        </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label for="feEmailAddress">AirLines :</label>
                        <select class="form-control" v-model="input.airLines" name="" id="">
                          <option disabled value="">Select One AirLines</option>
                          <option v-for="airline in airLines.data" :key="airline.id" :value="airline.id">{{airline.name}}</option>
                        </select>
                      </div>
                      <div class="form-group col-md-6">
                        <label for="feEmailAddress">Flight Duration :</label>
                          <input type="time" v-model="input.duration" class="form-control" name="" id="">
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label for="feEmailAddress">Route From :</label>
                        <input type="text" v-model="input.routeFrom" class="form-control" id="" placeholder="Medan"> </div>
                      <div class="form-group col-md-6">
                        <label for="fePassword">Route To :</label>
                        <input type="text" v-model="input.routeTo" class="form-control" id="" placeholder="Jakarta"> </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label for="feEmailAddress">Departure Time :</label>
                        <input type="time" v-model="input.departureTime" class="form-control" id="" placeholder="Medan"> </div>
                      <div class="form-group col-md-6">
                        <label for="fePassword">Time Arrived :</label>
                        <input type="time" v-model="input.timeArrived" class="form-control" id="" placeholder="Jakarta"> </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label for="feEmailAddress">Trip Type :</label>
                        <select name="" v-model="input.tripType" class="form-control" id="">
                          <option value="">Select One Trip Type</option>
                          <option value="one way">One Way</option>
                          <option value="round trip">Round Trip</option>
                        </select>
                      </div>
                      <div class="form-group col-md-6">
                        <label for="fePassword">Trip Date :</label>
                        <input type="date" v-model="input.tripDate" class="form-control" id="" placeholder="Jakarta"> </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label for="">Transit :</label>
                        <input type="number" v-model="input.transit" class="form-control">
                      </div>
                      <div class="form-group col-md-6">
                        <label for="">Direct :</label>
                        <input type="number" v-model="input.direct" class="form-control" name="" id="">
                      </div>
                    </div>
                    <div class="form-row">
                      <label for="">Facilities :</label>
                      <div class="form-group col-md-12 d-flex justify-content-between">
                          <div class="form-check form-check-inline">
                          <input class="form-check-input" v-model="input.facilities" type="checkbox" id="" value="wi-fi">
                          <label class="form-check-label" for="inlineCheckbox1">Wi-Fi</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" v-model="input.facilities" type="checkbox" id="" value="in-flight meal">
                          <label class="form-check-label" for="inlineCheckbox2">In-Flight Meal</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" v-model="input.facilities" type="checkbox" id="inlineCheckbox2" value="luggage">
                          <label class="form-check-label" for="inlineCheckbox2">Luggage</label>
                        </div>
                        </div>
                    </div>
                    <div class="form-group">
                      <label for="feInputAddress">Price :</label>
                      <input type="number" v-model="input.price" class="form-control" id="feInputAddress" placeholder="Rp.1.000.000"> </div>
                  </form>
                </div>
              </div>
            </li>
          </ul>
        </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" @click="handleInsertNewFlightRoute">Save changes</button>
            </div>
          </div>
        </div>
          </div>
    <!-- Modal Update -->
          <div class="modal fade" id="modalUpdateFlightRoute" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Update FlightRoute</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
               <div class="row">
                <div class="col">
          <div class="card card-small mb-4">
          <div class="card-header border-bottom">
            <h6 class="m-0">Flight route</h6>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item p-3">
              <div class="row">
                <div class="col">
                  <form>
                    <div class="form-row">
                      <div class="form-group col-md-12">
                        <label for="feFirstName">Class</label>
                        <select name="" v-model="inputUpdate.class" class="form-control" id="">
                          <option disabled value="">Select One Class</option>
                          <option value="ekonomi">Ekonomi</option>
                          <option value="business">Business</option>
                          <option value="first-class">Frist-Class</option>
                        </select>
                        </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label for="feEmailAddress">AirLines :</label>
                        <select class="form-control" v-model="inputUpdate.airLines" name="" id="">
                          <option disabled value="">Select One AirLines</option>
                          <option v-for="airline in airLines.data" :key="airline.id" :value="airline.id">{{airline.name}}</option>
                        </select>
                      </div>
                      <div class="form-group col-md-6">
                        <label for="feEmailAddress">Flight Duration :</label>
                          <input type="time" v-model="inputUpdate.duration" class="form-control" name="" id="">
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label for="feEmailAddress">Route From :</label>
                        <input type="text" v-model="inputUpdate.routeFrom" class="form-control" id="" placeholder="Medan"> </div>
                      <div class="form-group col-md-6">
                        <label for="fePassword">Route To :</label>
                        <input type="text" v-model="inputUpdate.routeTo" class="form-control" id="" placeholder="Jakarta"> </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label for="feEmailAddress">Departure Time :</label>
                        <input type="time" v-model="inputUpdate.departureTime" class="form-control" id="" placeholder="Medan"> </div>
                      <div class="form-group col-md-6">
                        <label for="fePassword">Time Arrived :</label>
                        <input type="time" v-model="inputUpdate.timeArrived" class="form-control" id="" placeholder="Jakarta"> </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label for="feEmailAddress">Trip Type :</label>
                        <select name="" v-model="inputUpdate.tripType" class="form-control" id="">
                          <option value="">Select One Trip Type</option>
                          <option value="one way">One Way</option>
                          <option value="round trip">Round Trip</option>
                        </select>
                      </div>
                      <div class="form-group col-md-6">
                        <label for="fePassword">Trip Date :</label>
                        {{inputUpdate.tripDate}}
                        <input type="date" v-model="inputUpdate.tripDate" class="form-control" id="" placeholder="Jakarta"> </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label for="">Transit :</label>
                        <input type="number" v-model="inputUpdate.transit" class="form-control">
                      </div>
                      <div class="form-group col-md-6">
                        <label for="">Direct :</label>
                        <input type="number" v-model="inputUpdate.direct" class="form-control" name="" id="">
                      </div>
                    </div>
                    <div class="form-row">
                      <label for="">Facilities :</label>
                      <div class="form-group col-md-12 d-flex justify-content-between">
                          <div class="form-check form-check-inline">
                          <input class="form-check-input" v-model="inputUpdate.facilities" type="checkbox" id="" value="wi-fi">
                          <label class="form-check-label" for="inlineCheckbox1">Wi-Fi</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" v-model="inputUpdate.facilities" type="checkbox" id="" value="in-flight meal">
                          <label class="form-check-label" for="inlineCheckbox2">In-Flight Meal</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" v-model="inputUpdate.facilities" type="checkbox" id="inlineCheckbox2" value="luggage">
                          <label class="form-check-label" for="inlineCheckbox2">Luggage</label>
                        </div>
                        </div>
                    </div>
                    <div class="form-group">
                      <label for="feInputAddress">Price :</label>
                      <input type="number" v-model="inputUpdate.price" class="form-control" id="feInputAddress" placeholder="Rp.1.000.000"> </div>
                  </form>
                </div>
              </div>
            </li>
          </ul>
        </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" @click="handleUpdateFlightRoute">Save changes</button>
            </div>
          </div>
        </div>
          </div>
  </div>
</template>

<script>
import mixin from '../../../../mixins/index'
import { mapActions } from 'vuex'
import $ from 'jquery'
import moment from 'moment'
import Swal from 'sweetalert2'
export default {
  name: 'FlightRoute',
  mixins: [mixin],
  data () {
    return {
      flightRoute: {
        data: null,
        pagination: null
      },
      search: {
        data: []
      },
      input: {
        search: '',
        class: '',
        airLines: '',
        routeFrom: '',
        routeTo: '',
        departureTime: '',
        timeArrived: '',
        tripType: '',
        tripDate: '',
        transit: 0,
        direct: 0,
        duration: 0,
        facilities: [],
        price: ''
      },
      inputUpdate: {
        class: '',
        airLines: '',
        routeFrom: '',
        routeTo: '',
        departureTime: '',
        timeArrived: '',
        tripType: '',
        tripDate: '',
        transit: 0,
        direct: 0,
        duration: 0,
        facilities: [],
        price: '',
        id: null
      },
      airLines: {
        data: [],
        pagination: null
      }
    }
  },
  methods: {
    check () {
      console.log('halo')
    },
    ...mapActions('flightroute', ['searchFlightRoute', 'updateFlightRoute', 'getAllFlightRoute', 'insertNewFlightRoute', 'deleteFlightRoute', 'getFlightRouteById']),
    ...mapActions('airlines', ['getDataAirLines']),
    async handleGetAllFlightRoute (page) {
      const payload = {
        page: page || 1
      }
      const result = await this.getAllFlightRoute(payload)
      this.flightRoute.data = result.flightroute
      this.flightRoute.pagination = result.pagination
      console.log('this.flightRoute.data :>> ', this.flightRoute.data)
      console.log('this.flightRoute.pagination :>> ', this.flightRoute.pagination)
    },
    async showModalUpdateFlightRoute (id) {
      const result = await this.getFlightRouteById(id)
      // set data input
      this.inputUpdate.class = result.flightClass
      this.inputUpdate.airLines = result.airLinesId
      this.inputUpdate.departureTime = result.departureTime
      this.inputUpdate.direct = result.direct
      this.inputUpdate.duration = result.flightDuration
      this.inputUpdate.price = result.price
      this.inputUpdate.routeFrom = result.routeFrom
      this.inputUpdate.routeTo = result.routeTo
      this.inputUpdate.timeArrived = result.timeArrived
      this.inputUpdate.transit = result.transit
      this.inputUpdate.tripDate = moment(result.tripDate).format('YYYY-MM-DD')
      this.inputUpdate.tripType = result.tripType
      const arrFacilities = result.Facilities.map(el => {
        return el.facility
      })
      this.inputUpdate.facilities = arrFacilities
      console.log('arrFacilities :>> ', arrFacilities)
      $('#upload-update-image').attr('src', result.logo)
      this.inputUpdate.id = result.id
      window.$('#modalUpdateFlightRoute').modal('toggle')
    },
    handleUpdateFlightRoute () {
      const input = this.inputUpdate
      console.log('input :>> ', input)
      const payload = {
        id: input.id,
        data: {
          flightClass: input.class,
          routeFrom: input.routeFrom,
          routeTo: input.routeTo,
          flightDuration: input.flightDuration,
          departureTime: input.departureTime,
          timeArrived: input.timeArrived,
          transit: input.transit,
          direct: input.direct,
          airLinesId: input.airLines,
          price: input.price,
          tripType: input.tripType,
          tripDate: input.tripDate,
          facility: input.facilities
        }
      }
      console.log('payload :>> ', payload)
      this.$awn.asyncBlock(
        this.updateFlightRoute(payload),
        resp => {
          window.$('#modalUpdateFlightRoute').modal('toggle')
          this.handleGetAllFlightRoute()
          this.clearInputUpdate()
          $('#modalUpdateFlightRoute .close').click()
          this.$awn.success('Airlines has been deleted')
        },
        (err) => {
          console.log('err :>> ', err)
        }
      )
    },
    async handleGetAirLines () {
      console.log('masuk')
      const payload = {
        page: 1,
        limit: 50
      }
      const result = await this.getDataAirLines(payload)
      this.airLines.data = result.airlines
      this.airLines.pagination = result.pagination
      console.log('this.airLines :>> ', this.airLines.data)
    },
    async handleDeleteFlightRoute (id) {
      const self = this
      console.log('id :>> ', id)
      Swal.fire({
        title: 'Delete Data ?',
        icon: 'question',
        text: 'you cannot reverse this action',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, I wants to delete!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$awn.asyncBlock(
            self.deleteFlightRoute(id),
            resp => {
              self.handleGetAllFlightRoute()
              self.$awn.success('Airlines has been deleted')
            },
            (err) => {
              console.log('err :>> ', err)
            }
          )
        }
      })
    },
    async handleInsertNewFlightRoute () {
      const input = this.input
      const self = this
      const payload = {
        flightClass: input.class,
        routeFrom: input.routeFrom,
        routeTo: input.routeTo,
        flightDuration: input.duration,
        departureTime: input.departureTime,
        timeArrived: input.timeArrived,
        transit: input.transit,
        direct: input.direct,
        airLinesId: input.airLines,
        price: input.price,
        tripType: input.tripType,
        tripDate: input.tripDate,
        facility: input.facilities
      }
      console.log('payload :>> ', payload)
      this.$awn.asyncBlock(
        this.insertNewFlightRoute(payload),
        () => {
          self.handleGetAllFlightRoute()
          $('#modalNewFlightRoute .close').click()
          self.$awn.success('FlightRoute has been updated')
          // clear input
          self.clearInputNewInsert()
        },
        () => {
          self.$awn.error('Looks like server having trouble')
        }
      )
    },
    clearInputNewInsert () {
      this.input.class = ''
      this.input.airLines = ''
      this.input.departureTime = ''
      this.input.direct = ''
      this.input.duration = ''
      this.input.price = ''
      this.input.routeFrom = ''
      this.input.routeTo = ''
      this.input.timeArrived = ''
      this.input.transit = ''
      this.input.tripDate = ''
      this.input.tripType = ''
      this.input.facilities = ''
    },
    clearInputUpdate () {
      this.inputUpdate.class = ''
      this.inputUpdate.airLines = ''
      this.inputUpdate.departureTime = ''
      this.inputUpdate.direct = ''
      this.inputUpdate.duration = ''
      this.inputUpdate.price = ''
      this.inputUpdate.routeFrom = ''
      this.inputUpdate.routeTo = ''
      this.inputUpdate.timeArrived = ''
      this.inputUpdate.transit = ''
      this.inputUpdate.tripDate = ''
      this.inputUpdate.tripType = ''
      this.inputUpdate.facilities = ''
    },
    async handleSearch () {
      const self = this
      const payload = {
        searchBy: 'flightClass',
        searchValue: this.input.search
      }
      this.$awn.asyncBlock(
        self.searchFlightRoute(payload),
        resp => {
          console.log('resp :>> ', resp)
          self.search.data = resp
          console.log('self.search.data :>> ', self.search.data)
          self.handleGetAllFlightRoute()
          self.$awn.success('FlightRoute has been updated')
        },
        () => {
          self.$awn.error('Looks like server having trouble')
        }
      )
    },
    clearSearch () {
      this.input.search = ''
      this.search.data = []
    }
  },
  async mounted () {
    this.handleGetAllFlightRoute()
    await this.handleGetAirLines()
  }
}
</script>

<style scoped>

.pricetot {
    font-family: Poppins;
    font-size: 16px;
    color: #2395FF;
    font-weight: 800;
}
.timeto, .time-detail {
    font-family: Poppins;
    font-size: 12px;
    font-weight: 400;
    color: #6B6B6B;
}
.country {
    font-family: Poppins;
    font-size: 24px;
    font-weight: 500;
    color: black;
}

.col3 i {
    margin-left: 5%;
}
.col4 {
    text-align: center;
}
.col3 {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 20%;
}
.time {
    text-align: center;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    color: #595959;
}
.center {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
.col1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 150px;
    justify-content: space-between;
}
.top-ticket {
    display: flex;
    flex-direction: row;
    align-items: center;
}
.top-ticket p {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 500;
    color: #595959;
    margin-left: 5%;
    margin-top: 2%;
}
.airline-logo {
    height: 57px;
    width: 100px;
    overflow: hidden;
}
.airline-logo img {
    width: 100%;
}
.ticket {
    height: max-content;
    width: 100%;
    border-radius: 15px;
    background-color: #FFFFFF;
    padding: 2%;
    margin-bottom: 10px;
}

.opt {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    margin-top: 5%;
}
.topside {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.left, .right {
    height: 1600px;
    margin-bottom: 5%;
}
.ticketing {
  height: max-content;
  overflow: auto;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
margin-bottom:40px;
border-radius:20px;
}
.option {
    display: flex;
}
.sidebar {
    width: 100%;
    min-height: 1250px;
    border-radius: 15px;
    background-color: white;
    padding-right: 5%;
    padding-left: 5%;
    padding-top: 5%;
}
@media screen and (max-width:546px) {
  .action-button {
    justify-content: center;
  }
}
@media screen and (max-width: 767px) {
    .center {
        flex-direction: column;
    }
    .ticket {
      height: auto;
    }
    .col4 {
        margin-top: 5%;
    }
}
</style>
