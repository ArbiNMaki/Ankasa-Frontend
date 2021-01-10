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
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalNewAirLines">
              <i class=" fa fa-plus"></i> New Route
            </button>
            <div class="input-group-prepend">
                  <div class="input-group-text border-0 bg-white">
                    <i v-if="!input.search" class="fa fa-search"></i>
                    <i v-if="input.search" class="fa fa-times"></i>
            </div>
            </div>
               <input v-model="input.search" class="navbar-search border-0 form-control search-input shadow-none rounded" type="text" placeholder="Search for something..." aria-label="Search">
            </div>
            </div>
          </div>
          <div v-if="!input.search" class="card-body p-0 text-center">
            <div class="card card-airlines card-small d-flex flex-lg-row flex-sm-column justify-content-between p-3 mb-3">
              <div class="information d-flex flex-lg-row flex-column justify-content-center">
              <div class="logo">
                <img src="" alt="">
              </div>
              <div class="name ml-lg-4 d-flex align-items-center">
                <p>awdawd</p>
              </div>
              </div>
              <div class="actions d-flex flex-lg-row">
                <!-- <button class="btn btn-actions btn-primary">
                  <i class="fa fa-info-circle"></i>
                </button> -->
                <button class="btn btn-actions btn-danger ml-2" >
                 <i class="fa fa-trash"></i>
                </button>
                <button class="btn btn-actions btn-warning ml-2"  >
                 <i class="fa fa-pencil"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mixin from '../../../../mixins/index'
import { mapActions } from 'vuex'
export default {
  name: 'FlightRoute',
  mixins: [mixin],
  data () {
    return {
      flightRoute: {
        data: null,
        pagination: null
      },
      input: {
        search: ''
      }
    }
  },
  methods: {
    ...mapActions('flightroute', ['getAllFlightRoute']),
    async handleGetAllFlightRoute () {
      const result = await this.getAllFlightRoute()
      this.flightRoute.data = result.flightroute
      this.flightRoute.pagination = result.pagination
      console.log('this.flightRoute.data :>> ', this.flightRoute.data)
      console.log('this.flightRoute.pagination :>> ', this.flightRoute.pagination)
    }
  },
  mounted () {
    this.handleGetAllFlightRoute()
  }
}
</script>

<style scoped>

</style>
