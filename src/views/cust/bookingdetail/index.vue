<template>
  <div class="booking-detail">
    <div class="row justify-content-center">
      <div class="booking-card p-3">
        <div class="container mt-5" >
          <b-row>
            <b-col cols="10">
              <h4 class="font-weight-bold mb-4 ml-5">
                Booking Pass
              </h4></b-col>
            <b-col>
              <h3 class="text-info d-none d-md-block">
                <i class="fas fa-ellipsis-v"></i>
              </h3>
            </b-col>
          </b-row>
          <div class="row justify-content-center mb-4">
            <div class="booking-left col-sm-6">
              <b-row>
                <b-col>
                  <div class="airline-logo" v-if="getOrderDetail.flight_route">
                    <img :src="getOrderDetail.flight_route.AirLine.logo" alt="logo garuda">
                  </div>
                </b-col>
                <b-col class="d-flex" v-if="getOrderDetail.flight_route">
                  <b class="departure font-weight-bold mr-2" v-if="getOrderDetail.flight_route.routeFrom">{{getOrderDetail.flight_route.routeFrom}}</b>
                    <div class="wrapper-plane-icon">
                    <img src="../../../assets/img/greysmallplane.png" alt="gray-small-plane"/>
                    </div>
                  <b class="departure font-weight-bold ml-2">{{getOrderDetail.flight_route.routeTo}}</b>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b class="small text-muted">Code</b>
                  <p class="small">{{getOrderDetail.booking_code}}</p>
                </b-col>
                <b-col>
                  <b class="small text-muted">Class</b>
                  <p class="small">{{getOrderDetail.flight_route.flightClass}}</p>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b class="small text-muted">Terminal</b>
                  <p class="small">{{getOrderDetail.terminal}}</p>
                </b-col>
                <b-col>
                  <b class="small text-muted">Class</b>
                  <p class="small">{{getOrderDetail.gate}}</p>
                </b-col>
              </b-row>
              <p class="small text-muted">Departure</p>
              <p class="small">{{convertTime(getOrderDetail.flight_route.tripDate)}} / {{getOrderDetail.flight_route.departureTime}}</p>
              <p class="va" v-if="getOrderDetail.status_payment === 'Waiting for payment'">Transfer Ke: {{getOrderDetail.va_number}} (Virtual Account Bank BCA)</p>
            </div>
            <div class="booking-right col-sm-4">
              <img src="../../../assets/img/qr.png" alt="qr code">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'BookingDetail',
  title: 'Booking Detail',
  methods: {
    ...mapActions({ getUserOrder: 'getOrderDetail' }),
    convertTime (date) {
      return moment(date).format('dddd YYYY-MM-DD')
    }
  },
  computed: {
    ...mapGetters(['getOrderDetail'])
  },
  mounted () {
    this.getUserOrder()
  }
}
</script>

<style scoped>

.airline-logo {
  height: 57px;
  width: 100px;
  overflow: hidden;
}
.airline-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.booking-detail {
  background-color: #2395FF;
  overflow: hidden;
}
.booking-card {
  background-color: #fff;
  box-shadow: 0px 8px 27px rgba(14, 63, 108, 0.19);
  border-radius: 20px;
  height: 100%;
  width: 60%;
  margin: 20px;
}
.booking-left {
  width: 200px;
  border: 0.5px solid #E5E5E5;
  border-right: 2px dashed #E5E5E5;
  border-radius: 10px;
  padding: 20px;
}
.booking-right {
  width: 100%;
  border: 0.5px solid#E5E5E5;
  border-left: none;
  border-radius: 10px;
}
.booking-right img {
  margin: 10% 0;
}
.departure {
  font-size: 20px;
}
.va {
  background-color: #2395FF;
  border-radius: 10px;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: small;
  color:#FFFFFF !important;
}
@media(min-width: 581px) {
  .booking-right img {
    width: 100%;
  }
}
@media(max-width: 576px) {
  .booking-right img {
    margin: 10% auto;
  }
  .booking-left {
    border: 2px dashed #E5E5E5;
  }
  .booking-right {
    border: 2px dashed #E5E5E5;
  }
}
</style>
