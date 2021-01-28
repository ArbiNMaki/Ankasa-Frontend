<template>
  <div class="all">
    <div class="container">
          <div class="row justify-content-around">
            <div class="col-lg-5 left">
              <CardProfile />
            </div>
            <div class="col-lg-6 right">
              <div class="title">
                <p>MY BOOKING</p>
                <div class="detail">
                  <p class="book">My Booking</p>
                  <p class="o-hist">Order History</p>
                </div>
              </div>
              <div class="history-box">
                  <div class="allhistory" v-for="booking in getMyBooking" :key="booking.id">
                <div class="history">
                <p>{{convertTime(booking.flight_route.tripDate || '')}} / {{booking.flight_route.departureTime || ''}}</p>
                <div class="fromto">
                  <p class="loc">{{booking.flight_route.routeFrom || ''}}</p>
                  <i class="fas fa-plane"></i>
                  <p class="loc">{{booking.flight_route.routeTo || ''}}</p>
                </div>
                <p class="plane">{{booking.flight_route.AirLine.name || ''}} {{booking.booking_code || ''}}</p>
                <hr>
                <div class="statusflex">
                  <div class="statustop">
                    <p class="status-title">Status</p>
                    <div class="status">
                      <p class="eticket">{{booking.status_payment}}</p>
                    </div>
                  </div>
                  <p class="view-det" @click.prevent="orderdetail(booking.id)">View Details</p>
                </div>
              </div>
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
import CardProfile from '../CardProfile'
export default {
  name: 'MyBookingComp',
  components: {
    CardProfile
  },
  methods: {
    ...mapActions({ getUserBooking: 'getMyBooking' }),
    ...mapActions('user', ['getUser']),
    convertTime (date) {
      return moment(date).format('dddd YYYY-MM-DD')
    },
    orderdetail (id) {
      localStorage.setItem('orderid', id)
      this.$router.push({ path: 'bookingdetail' })
    }
  },
  computed: {
    ...mapGetters(['getMyBooking'])
  },
  mounted () {
    this.getUser()
    this.getUserBooking()
  }
}
</script>

<style lang="scss" scoped>
.history-box {
    height: max-content;
    overflow: auto;
}
.allhistory {
  overflow: auto;
}
.statusflex {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.statustop {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.statustop .status-title {
  margin-right: 5%;
  margin-top: 7%;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 600;
  color: #7A7A7A;
}
.statusflex .view-det{
  font-family: Poppins;
  font-size: 16px;
  font-weight: 600;
  color: #2395FF;
  margin-top: 2%;
  cursor: pointer;
}
.status {
  height: 36px;
  width: 141px;
  border-radius: 6px;
  background-color: #4FCF4D;
  padding-top: 4%;
}
.status .eticket {
  font-family: Poppins;
  font-size: 14px;
  font-weight: 600;
  color: #FFFFFF;
  text-align: center;
}
.history .plane {
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  color: #979797;
}
.fa-plane {
  color: #979797;
}
.fromto {
  display: flex;
  flex-direction: row;
  width: 30%;
  justify-content: space-between;
  margin-bottom: 2%;
}
.detail {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.detail .book {
  font-family: Poppins;
  font-size: 24px;
  font-weight: 600;
  color: black;
}
.detail .o-hist {
  font-family: Poppins;
  font-size: 16px;
  font-weight: 600;
  color: #2395FF;
}
.title p {
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  color: #2395FF;
}
.left, .right {
  margin-top: 5%;
  margin-bottom: 5%;
}
.all {
  background-color: #F5F6FA;
}
.title {
  height: 115px;
  width: 100%;
  border-radius: 15px;
  background-color: #FFFFFF;
  margin-bottom: 5%;
  padding: 5%;
}
.history {
  min-height: 223px;
  width: 100%;
  border-radius: 15px;
  background-color: #FFFFFF;
  padding: 5%;
  margin-bottom: 5%;
}
.history p {
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  color: black;
}
.fromto .loc {
  font-family: Poppins;
  font-size: 16px;
  font-weight: 600;
  color: black;
}
</style>
