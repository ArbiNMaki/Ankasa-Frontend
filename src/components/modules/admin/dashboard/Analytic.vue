<template>
  <div class="m-0">
    <!-- Page Header -->
    <div class="page-header row no-gutters p-0 m-0">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle">Dashboard</span>
        <h3 class="page-title">Blog Overview</h3>
      </div>
    </div>
    <!-- Small Stats Blocks -->
    <div class="row p-0 m-0 justify-content-between align-items-stretch">
      <div class="col-lg-2 col-md-6 col-sm-6 p-0">
        <div class="card card-small">
          <div class="card-body p-0 d-flex ">
            <div class="d-flex flex-column m-auto">
              <div class="stats-small__data text-center">
                <span class="stats-small__label text-capitalize text-center">AirLines</span>
                <h6 class="stats-small__value count my-3">{{ airLines.amount }}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-2 col-md-6 col-sm-6 p-0 mr-3 mb-4">
        <div class="card card-small">
          <div class="card-body p-0 d-flex ">
            <div class="d-flex flex-column m-auto">
              <div class="stats-small__data text-center">
                <span class="stats-small__label text-capitalize text-center">Flight Route</span>
                <h6 class="stats-small__value count my-3">{{ flightRoutes.amount }}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-2 col-md-6 col-sm-6 p-0 mr-3 mb-4">
        <div class="card card-small">
          <div class="card-body p-0 d-flex ">
            <div class="d-flex flex-column m-auto">
              <div class="stats-small__data text-center">
                <span class="stats-small__label text-capitalize text-center">Completed Order</span>
                <h6 class="stats-small__value count my-3">{{ completedOrder.amount }}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Small Stats Blocks -->
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Analytic',
  data () {
    return {
      airLines: {
        amount: null
      },
      flightRoutes: {
        amount: null
      },
      completedOrder: {
        amount: null
      }
    }
  },
  methods: {
    ...mapActions('flightroute', ['getAmountFlightRoute', 'getAmountCompletedPayment']),
    ...mapActions('airlines', ['getAmountAirLines']),
    async handleGetAmountFlightRoute () {
      const amount = await this.getAmountFlightRoute()
      this.airLines.amount = amount
    },
    async handleGetAmountAirLines () {
      const amount = await this.getAmountAirLines()
      this.flightRoutes.amount = amount
    },
    async handleGetAmountCompletedPayment () {
      const amount = await this.getAmountCompletedPayment()
      this.completedOrder.amount = amount
    }
  },
  mounted () {
    this.handleGetAmountCompletedPayment()
    this.handleGetAmountFlightRoute()
    this.handleGetAmountAirLines()
  }
}
</script>

<style scoped>
.page-subtitle {
  font-size:11px;
  letter-spacing: 0.2em;
}
.card-small {
  height:150px;
}
</style>
