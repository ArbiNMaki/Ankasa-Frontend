<template>
    <div class="all">
        <div class="top">
          <div class="container top1">
            <div class="image">
              <img src="../../assets/image/vector 02 (1).png" alt="">
            </div>
            <div class="topfromto">
              <div class="fromtoloc">
                <div>
                <p class="fromto">From</p>
                <p class="location">{{$route.query.from}}</p>
              </div>
              <i class="fas fa-exchange-alt fa-lg"></i>
              <div class="toloc">
                <p class="fromto">To</p>
                <p class="location">{{$route.query.to}}</p>
              </div>
              </div>
              <p class="flight-detail" v-if="$route.query.adults && $route.query.children">{{$route.query.departuredate}}  |  {{parseInt($route.query.adults) + parseInt($route.query.children)}} Passenger  |  {{$route.query.seattype}}</p>
              <div v-if="$route.query.triptype === 'roundtrip'">
                <p class="flight-detail">{{$route.query.returndate}}  |  {{$route.query.adults || 0 + $route.query.children || 0}} Passenger  |  {{$route.query.seattype}}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row justify-content-around ctnr">
            <div class="col-lg-4 left">
              <div class="topside">
                  <p class="filter" type="button">Filter</p>
                  <p class="reset cursor-pointer" @click="resetFilter">Reset</p>
                </div>
              <div class="sidebar">
                <div class="list-unstyled components">
                <div class="menu">
                    <div data-target="#transit" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Transit</div>
                    <div class="collapse list-unstyled" id="transit">
                      <div class="opt">
                        <label for="direct">Direct</label>
                        <input type="checkbox" id="direct" name="transit" v-model="transit" value="direct" @change="filter"/>
                      </div>
                      <div class="opt">
                        <label for="transitopt">Transit</label>
                        <input type="checkbox" id="transitopt" name="transitopt" v-model="transit" value="transit" @change="filter"/>
                      </div>
                      <div class="opt">
                        <label for="direct2+">Direct 2+</label>
                        <input type="checkbox" id="direct2+" name="transit" v-model="transit" value="direct 2" @change="filter"/>
                      </div>
                      <div class="opt">
                        <label for="transit2+">Transit 2+</label>
                        <input type="checkbox" id="transit2+" name="transit" v-model="transit" value="transit 2" @change="filter"/>
                      </div>
                    </div>
                </div>
                <div class="menu">
                    <div data-target="#facilities" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Facilities</div>
                    <div class="collapse list-unstyled" id="facilities">
                      <div class="opt">
                        <label for="luggage">Luggage</label>
                        <input type="checkbox" id="luggage" name="facilities" v-model="facilities" value="luggage" @change="filter"/>
                      </div>
                      <div class="opt">
                        <label for="meal">In-flight Meal</label>
                        <input type="checkbox" id="meal" name="facilities" v-model="facilities" value="meal" @change="filter"/>
                      </div>
                      <div class="opt">
                        <label for="wifi">Wi-fi</label>
                        <input type="checkbox" id="wifi" name="facilities" v-model="facilities" value="wi-fi" @change="filter"/>
                      </div>
                    </div>
                </div>
                <div class="menu">
                    <div data-target="#departure" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Departure Time</div>
                    <div class="collapse list-unstyled" id="departure">
                      <div class="opt">
                        <label for="6">00:00-06:00</label>
                        <input type="checkbox" id="6" name="departure" v-model="departure" value="00:00-06:00" @change="filter"/>
                      </div>
                      <div class="opt">
                        <label for="12">06:00-12:00</label>
                        <input type="checkbox" id="12" name="departure" v-model="departure" value="06:00-12:00" @change="filter"/>
                      </div>
                      <div class="opt">
                        <label for="18">12:00-18:00</label>
                        <input type="checkbox" id="18" name="departure" v-model="departure" value="12:00-18:00" @change="filter"/>
                      </div>
                      <div class="opt">
                        <label for="24">18:00-24:00</label>
                        <input type="checkbox" id="24" name="departure" v-model="departure" value="18:00-24:00" @change="filter"/>
                      </div>
                    </div>
                </div>
                <div class="menu">
                    <div data-target="#arrival" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Time Arrived</div>
                    <div class="collapse list-unstyled" id="arrival">
                        <div class="opt">
                        <label for="6go">00:00-06:00</label>
                        <input type="checkbox" id="6go" name="arrival" v-model="arrival" value="00:00-06:00" @change="filter"/>
                      </div>
                      <div class="opt">
                        <label for="12go">06:00-12.00</label>
                        <input type="checkbox" id="12go" name="arrival" v-model="arrival" value="06:00-12:00" @change="filter"/>
                      </div>
                      <div class="opt">
                        <label for="18go">12:00-18:00</label>
                        <input type="checkbox" id="18go" name="arrival" v-model="arrival" value="12:00-18:00" @change="filter"/>
                      </div>
                      <div class="opt">
                        <label for="24go">18:00-24:00</label>
                        <input type="checkbox" id="24go" name="arrival" v-model="arrival" value="18:00-24:00" @change="filter"/>
                      </div>
                    </div>
                </div>
                <div class="menu">
                    <div data-target="#airlines" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Airlines</div>
                    <div class="collapse list-unstyled" id="airlines">
                      <div class="opt">
                        <label for="garuda">Garuda Indonesia</label>
                        <input type="checkbox" id="garuda" name="airlines" v-model="airlines" value="Garuda Indonesia" @change="filter"/>
                      </div>
                      <div class="opt">
                        <label for="airasia">Air Asia</label>
                        <input type="checkbox" id="airasia" name="airlines" v-model="airlines" value="Air Asia" @change="filter"/>
                      </div>
                      <div class="opt">
                        <label for="aviastar">Aviastar</label>
                        <input type="checkbox" id="aviastar" name="airlines" v-model="airlines" value="Aviastar" @change="filter"/>
                      </div>
                      <div class="opt">
                        <label for="lionair">Lion Air</label>
                        <input type="checkbox" id="lionair" name="airlines" v-model="airlines" value="Lion Air" @change="filter"/>
                      </div>
                      <div class="opt">
                        <label for="kalstar">Kalstar Aviation</label>
                        <input type="checkbox" id="kalstar" name="airlines" v-model="airlines" value="Kalstar Aviation" @change="filter"/>
                      </div>
                      <div class="opt">
                        <label for="citilink">Citilink</label>
                        <input type="checkbox" id="citilink" name="airlines" v-model="airlines" value="Citilink" @change="filter"/>
                      </div>
                    </div>
                </div>
                <div class="menu">
                    <div data-target="#price" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Ticket Price</div>
                    <div class="collapse list-unstyled" id="price">
                      <div class="range-title">
                  <p>Lowest</p>
                  <p>Highest</p>
                </div>
                <div class="range">
                  <vue-slider v-model="value" :min="min" :max="max" :enable-cross="enableCross" :step="step" />
                </div>
                <div class="value">
                  <p>Rp{{value[0]}}</p>
                  <p>Rp{{value[1]}}</p>
                </div>
                <div class="pricefilter">
                  <button class="filterprice" @click.prevent="filterprice">price filter</button>
                </div>
                    </div>
                </div>
            </div>
              </div>
            </div>
            <div v-if="getTickets.length > 0" class="col-lg-7 right">
              <div class="topside">
                  <p class="select">Select Ticket</p>
                  <p class="sort" type="button"  @click="handleSorting">Sort By <i class="fas fa-sort"></i></p>
                </div>
              <div class="ticketing">
                <div class="ticket" v-for="ticketing in getTickets" :key="ticketing.id">
                  <div class="top-ticket">
                    <div class="airline-logo">
                      <img :src="ticketing.AirLine.logo" alt="">
                  </div>
                  <p>{{ticketing.AirLine.name}}</p>
                  </div>
                  <div class="center">
                      <div class="col1">
                        <div class="from">
                      <p class="country">{{ticketing.routeFrom}}</p>
                      <p class="timeto">{{ticketing.departureTime}}</p>
                    </div>
                    <i class="fas fa-plane"></i>
                    <div class="to">
                      <p class="country">{{ticketing.routeTo}}</p>
                      <p class="timeto">{{ticketing.timeArrived}}</p>
                    </div>
                      </div>
                    <div class="col2">
                      <p class="time">{{ticketing.flightDuration}} <br><span class="time-detail">({{ticketing.transit}} transit) ({{ticketing.direct}} direct)</span></p>
                    </div>
                    <div class="col3"  v-for="index in ticketing.Facilities" :key="index.id">
                      <div class="facilitypic" v-if="index.facility === 'luggage'">
                        <i class="fas fa-suitcase"></i>
                      </div>
                      <div class="facilitypic" v-if="index.facility === 'meal'">
                        <i class="fas fa-utensils"></i>
                      </div>
                      <div class="facilitypic" v-if="index.facility === 'wi-fi'">
                        <i class="fas fa-wifi"></i>
                      </div>
                    </div>
                    <div class="col4">
                      <p class="pricetot">Rp{{ticketing.price}}</p>
                    </div>
                  </div>
                  <div class="selectbtn">
                    <p class="detail" type="button">View Detail <i class="fas fa-sort-down"></i></p>
                    <button @click="toFlightDetail(ticketing.id)">Select</button>
                  </div>
                </div>
                </div>
            </div>
            <div v-if="getTickets.length === 0" class="col-lg-7 right d-flex flex-column align-items-center justify-content-center">
              <p class="default-text">looking for a flight route? 🧐</p>
              <p>You'll have to search first at <span class="bold-600">"Find ticket"</span></p>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'
import mixin from '../../mixins/index'
export default {
  name: 'SearchResultComp',
  mixins: [mixin],
  data () {
    return {
      value: [1000000, 3000000],
      transit: [],
      facilities: [],
      departure: [],
      arrival: [],
      airlines: [],
      toggleSort: false
    }
  },
  created () {
    this.min = 100000
    this.max = 20000000
    this.step = 100000
    this.enableCross = false
  },
  components: {
    VueSlider
  },
  methods: {
    ...mapActions({ getAllTickets: 'getTickets' }),
    ...mapActions('customer', ['selectTicket']),
    ...mapActions(['sorting']),
    ...mapMutations(['SET_FINDTICKETS']),
    updatePage (param) {
      const payload = {
        routeFrom: this.$route.query.from,
        routeTo: this.$route.query.to,
        flightClass: this.$route.query.seattype,
        triptype: this.$route.query.triptype,
        tripdate: this.$route.query.departuredate,
        facilities: (this.facilities).toString() || '',
        airlines: (this.airlines).toString() || '',
        departureTime: (this.departure).toString() || '',
        timeArrived: (this.arrival).toString() || '',
        transit: (this.transit).toString() || '',
        price: ''
      }
      this.getAllTickets(payload)
        .then((result) => {
          if (result.length === 0) {
            this.alert('info', 'Oops, flight not found', 'Sorry, your search data not found..', false)
          }
        }).catch(() => {
          this.alert('error', 'Oops', 'Looks like server having trouble', false)
        })
    },
    filter () {
      const payload = {
        routeFrom: this.$route.query.from,
        routeTo: this.$route.query.to,
        flightClass: this.$route.query.seattype,
        triptype: this.$route.query.triptype,
        tripdate: this.$route.query.departuredate,
        facilities: (this.facilities).toString() || '',
        airlines: (this.airlines).toString() || '',
        departureTime: (this.departure).toString() || '',
        timeArrived: (this.arrival).toString() || '',
        transit: (this.transit).toString() || '',
        price: ''
      }
      this.getAllTickets(payload)
    },
    resetFilter () {
      this.value = [1000000, 3000000]
      this.transit = []
      this.facilities = []
      this.departure = []
      this.arrival = []
      this.airlines = []
      this.toggleSort = false
      this.filter()
    },
    filterprice () {
      const payload = {
        routeFrom: this.$route.query.from,
        routeTo: this.$route.query.to,
        flightClass: this.$route.query.seattype,
        triptype: this.$route.query.triptype,
        tripdate: this.$route.query.departuredate,
        facilities: (this.facilities).toString() || '',
        airlines: (this.airlines).toString() || '',
        departureTime: (this.departure).toString() || '',
        timeArrived: (this.arrival).toString() || '',
        transit: (this.transit).toString() || '',
        price: (this.value).toString()
      }
      this.getAllTickets(payload)
    },
    async toFlightDetail (flightRouteId) {
      const payload = {
        flight_route_id: flightRouteId,
        passenger_desc: this.getPassenger.desc
      }
      const result = await this.selectTicket(payload)
      this.$router.push({ path: '/cust/flightdetail', query: { orderId: result.order_id } })
    },
    handleSorting () {
      let sort = ''
      if (this.toggleSort) {
        sort = 'desc'
        this.toggleSort = false
      } else {
        sort = 'asc'
        this.toggleSort = true
      }
      const payload = {
        routeFrom: this.$route.query.from,
        routeTo: this.$route.query.to,
        flightClass: this.$route.query.seattype,
        tripType: this.$route.query.triptype,
        tripDate: this.$route.query.departuredate,
        sort: sort
      }
      console.log('payload :>> ', payload)
      this.sorting(payload)
        .then((result) => {
          console.log('result :>> ', result)
        }).catch((err) => {
          console.log('err :>> ', err)
        })
    }
  },
  computed: {
    ...mapGetters(['getTickets']),
    ...mapGetters('customer', ['getPassenger'])
  },
  watch: {
    $route () {
      this.updatePage([this.$route.query.from, this.$route.query.to, this.$route.query.triptype, this.$route.query.seattype, this.$route.query.departuredate])
    }
  },
  mounted () {
    this.filter()
  }
}
</script>

<style lang="scss" scoped>
.pricefilter {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 5%;
}
.filterprice {
  height: 50px;
  width: 150px;
  border-radius: 10px;
  background-color: #2395FF;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 500;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
}
.topfromto {
    margin-left: 3%;
}
.flight-detail {
    font-family: Poppins;
    font-size: 12px;
    font-weight: 300;
    color: white;
}
.top1 {
    display: flex;
    flex-direction: row;
    align-items: center;
}
.fromto {
    font-family: Poppins;
    font-size: 12px;
    font-weight: 400;
}
.location {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 600;
}
.toloc {
    text-align: right;
}
.fromtoloc {
    display: flex;
    flex-direction: row;
    width: 250px;
    justify-content: space-between;
    align-items: center;
    color: white;
}
.detail {
    margin-top: 3%;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 600;
    color: #2395FF;
    cursor: pointer
}
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
    font-size: 18px;
    font-weight: 500;
    color: black;
}
.selectbtn button{
    height: 50px;
    width: 150px;
    border-radius: 10px;
    background-color: #2395FF;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 700;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
}
.col4 {
    text-align: center;
}
.col3 {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.selectbtn {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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
    height: 60px;
    width: 60px ;
    overflow: hidden;
}
.airline-logo img {
    width: 100%;
    object-fit: cover !important;
}
.ticket {
    height: 240px;
    width: 100%;
    border-radius: 15px;
    background-color: #FFFFFF;
    padding: 5%;
    margin-bottom: 3%;
}
.range-title, .value {
    margin-top: 2%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-family: Poppins;
    font-size: 12px;
    font-weight: 400;
    color: #6B6B6B;
}
.value {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 600;
    color: #2395FF;
}
.range {
    margin-top: 5%;
}
.filter, .select {
    font-family: Poppins;
    font-size: 24px;
    font-weight: 600;
    cursor: pointer;
}
.reset, .sort {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 600;
    color: #2395FF;
}
.sort {
    cursor: pointer;
}
.dropdown-toggle {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 600;
    margin-top: 5%;
    cursor: pointer;
}
.menu {
    border-bottom: 1px solid #E5E5E5
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
    // height: 1600px;
    margin-bottom: 5%;
}
.ticketing {
  height: max-content;
  overflow: auto;
}
.option {
    display: flex;
}
.top {
    height: 176px;
    width: 100%;
    background-color: #2395FF;
    border-radius: 0px 0px 30px 30px;
    background-image: url('../../assets/image/vector 3.png');
    background-repeat: no-repeat;
}
.container {
    height: 100%;
    width: 100%;
}
.sidebar {
    width: 100%;
    height: 90%;
    border-radius: 15px;
    background-color: white;
    padding:25px;
}
.all {
    // height: 100%;
    background-color: #F5F6FA;
    height:max-content;
}
.ctnr {
    height: 100%;
    margin-top: 3%;
}
.default-text {
  font-size:25px;
  text-transform: capitalize;
  font-weight:700;
  color:#575454;
}
.bold-600 {
  font-weight: 600;
}
.cursor-pointer {
  cursor: pointer;
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
