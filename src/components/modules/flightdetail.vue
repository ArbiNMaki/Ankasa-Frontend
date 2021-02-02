<template>
    <div class="all">
        <div class="top">
        </div>
        <div class="container">
          <div class="row justify-content-around ctnr">
            <div class="col-lg-7 left">
              <div class="topside">
                  <p class="contact">Contact Person Detail</p>
                </div>
                <div class="leftside1">
                  <div class="fullname">
                    <p>Full Name</p>
                  <input type="text" v-model="fullname">
                  </div>
                  <div class="email">
                    <p>Email</p>
                    <input type="text" v-model="email">
                  </div>
                  <div class="phone">
                    <p>Phone Number</p>
                    <input type="text" v-model="phone">
                  </div>
                  <div class="warning">
                    <i class="fas fa-exclamation-triangle"></i>
                    <p>Make sure the customer data is correct.</p>
                  </div>
                </div>
                <div class="pass-detail-title">
                  <p>Passenger Detail</p>
                </div>
                <div class="pass-detail">
                  <div class="pass-detail-top">
                    <div class="pass">
                      <p>Passenger: 1 Adult</p>
                    </div>
                    <div class="toggle">
                      <p>Same as contact person</p>
                      <label class="switch">
                        <input type="checkbox" v-model="toggle.status" @click="toggleProfile">
                        <div class="slider round"></div>
                        </label>
                        <p style="display:none">{{profile}}</p>
                    </div>
                  </div>
                  <div class="gender-title">
                    <p>Title</p>
                    <select v-model="title">
                      <option>Mr</option>
                      <option>Mrs</option>
                      <option>Ms</option>
                    </select>
                  </div>
                  <div class="fullname2">
                    <p>Full Name</p>
                    <input type="text" id="fullname2" v-model="fullname2">
                  </div>
                  <div class="nationality">
                    <p>Nationality</p>
                    <country-select v-model="country" :country="country" topCountry="US" class="selectinput" />
                  </div>
                </div>
                <div class="insurance-title">
                  <p>Passenger Detail</p>
                </div>
                <div class="insurance">
                  <div class="insurance-flex">
                    <div class="insurance-top">
                    <input type="checkbox" id="insurance-check" v-model="insuranceopt">
                  <label for="insurance-check">Insurance</label>
                  </div>
                  <div>
                    <p class="total">Rp75000/pax</p>
                  </div>
                  </div>
                  <p class="info">Get Travel Compensation Up To Rp1000000  </p>
                </div>
                <div class="proceed">
                    <button @click="handleUpdateOrderDetail">Proceed to Payment</button>
                </div>
            </div>
            <div class="col-lg-4 right" v-if="order.airLine">
              <div class="topside">
                  <p class="detail">Flight Details</p>
                  <p class="view">View Details</p>
                </div>
                <div class="rightside">
                  <div class="top-right">
                    <div class="plane-logo">
                      <img :src="order.airLine.logo" alt="">
                    </div>
                    <p>{{ order.airLine.name }}</p>
                  </div>
                  <div class="fromto">
                    <p>{{ order.data.flight_route.routeFrom }}</p>
                    <i class="fas fa-plane"></i>
                    <p>{{ order.data.flight_route.routeTo }}</p>
                  </div>
                  <p class="datetime">{{ convertTripDate(order.data.flight_route.tripDate) }} | {{order.data.flight_route.departureTime}}-{{order.data.flight_route.timeArrived}}</p>
                  <div class="opt">
                    <p><i class="far fa-check-circle"></i> Refundable</p>
                    <p><i class="far fa-check-circle"></i> Can Reschedule </p>
                  </div>
                  <hr>
                  <div class="payment">
                    <p class="payment-title">Total Payment</p>
                    <p class="payment-total">Rp{{order.data.total_payment}}</p>
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
import mixin from '../../mixins/index'
export default {
  name: 'FlightDetailComp',
  mixins: [mixin],
  data: function () {
    return {
      profile: false,
      country: '',
      title: 'Mr',
      insuranceopt: '',
      fullname: '',
      email: '',
      phone: '',
      fullname2: '',
      toggle: {
        status: false
      },
      order: {
        data: null,
        airLine: null
      }
    }
  },
  methods: {
    ...mapActions('customer', ['getOrderDetail', 'updateOrderDetail']),
    ...mapActions('airlines', ['getDataAirLinesById']),
    toggleProfile () {
      if (this.toggle.status) {
        this.fullname2 = ''
        this.toggle.status = false
        document.getElementById('fullname2').disabled = false
      } else {
        this.fullname2 = this.getUserData.username
        this.toggle.status = true
        document.getElementById('fullname2').disabled = true
      }
    },
    handleGetOrderDetail (orderId) {
      this.getOrderDetail(orderId)
        .then(async (result) => {
          this.order.data = result
          await this.handleGetAirLine(result.flight_route.airLinesId)
        }).catch(() => {
          this.$router.push({ path: '/cust/searchresult' })
        })
    },
    async handleGetAirLine (id) {
      this.getDataAirLinesById(id)
        .then((result) => {
          this.order.airLine = result
        }).catch((err) => {
          console.log('err :>> ', err)
        })
    },
    async handleUpdateOrderDetail () {
      const payload = {
        order_id: this.$route.query.orderId,
        cp_email: this.email,
        cp_fullname: this.fullname,
        cp_phone: this.phone,
        passenger_name: this.fullname2,
        passenger_nationality: this.country,
        is_insurance: this.insuranceopt ? 1 : 0
      }
      this.updateOrderDetail(payload)
        .then((result) => {
          this.$awn.success('Order has been updated, please complete your payment 😉 ')
          this.$router.push({ path: '/cust/mybooking' })
        }).catch((err) => {
          console.log('err :>> ', err)
        })
    },
    convertTripDate (date) {
      return moment(date).format('LLLL')
    }
  },
  async mounted () {
    if (!this.$route.query.orderId) {
      this.$router.push({ path: '/cust/searchresult' })
    } else {
      await this.handleGetOrderDetail(this.$route.query.orderId)
    }
  },
  computed: {
    ...mapGetters('auth', ['getUserData'])
  }
}
</script>

<style lang="scss" scoped>
.datetime {
  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
  color: #6B6B6B;
}
.payment-title {
  font-family: Poppins;
  font-size: 18px;
  font-weight: 500;
}
.payment-total {
  font-family: Poppins;
  font-size: 24px;
  font-weight: 600;
  color: #2395FF;
}
.opt {
  margin-top: 5%;
}
.opt p {
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  color: #2395FF;
}
.fromto p {
  font-family: Poppins;
  font-size: 18px;
  font-weight: 500;
}
.fromto {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 5%;
}
.payment {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.top-right {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5%;
}
.plane-logo img {
  width: 100%;
}
.plane-logo {
  height: 57px;
  width: 100px;
  margin-right: 5%;
}
.top-right p {
  margin-top: 4%;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 500;
  color: #595959;
}
.fa-exclamation-triangle{
  color: red;
  margin-top: 1%;
}
.fullname, .fullname2, .gender-title, .nationality, .email, .phone {
  border-bottom: 1px solid rgba(210, 194, 255, 0.68);
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  color: #9B96AB;
}
.fullname2, .gender-title, .nationality {
  margin-bottom: 5%;
}
.gender-title select {
  border: none;
  outline: none;
}
.fullname input, .fullname2 input, .email input, .phone input {
  border: none;
  outline: none;
  width: 100%;
}
.gender-title {
  margin-top: 5%;
}
.selectinput {
  outline: none;
  border: none;
  width: 100%;
  padding: 0;
  margin: 0;
}
.all {
    background-color: #F5F6FA;
}
.top {
    height: 176px;
    width: 100%;
    background-color: #2395FF;
    border-radius: 0px 0px 30px 30px;
    background-image: url('../../assets/image/vector 3.png');
    background-repeat: no-repeat;
}
.left, .right {
    margin-bottom: 5%;
    margin-top: -10%;
}
.right {
  height: 450px;
}
.topside {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.contact, .detail {
    font-family: Poppins;
    font-size: 24px;
    font-weight: 600;
    color: white;
}
.view {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 600;
    color: white;
}
.leftside1 {
  min-height: 415px;
  width: 100%;
  border-radius: 15px;
  background-color: white;
  padding: 10%;
}
.rightside {
  min-height: 375px;
  width: 100%;
  border-radius: 15px;
  background-color: white;
  margin-bottom: 10%;
  padding: 5%;
}
.pass-detail-title, .insurance-title {
  font-family: Poppins;
  font-size: 24px;
  font-weight: 600;
  color: black;
  margin-top: 5%;
}
.pass-detail {
  min-height: 415px;
  width: 100%;
  left: 70px;
  top: 795px;
  border-radius: 15px;
  background-color: white;
  padding: 10%;
}
.insurance {
  height: 150px;
  width: 100%;
  border-radius: 15px;
  background-color: white;
  padding: 5%;
  margin-bottom: 5%;
}
.fullname input, .email input, .phone input {
  width: 100%;
}
.fullname, .email, .phone {
  margin-bottom: 3%;
}
.phone {
  margin-bottom: 8%;
}
.warning {
  min-height: 50px;
  width: 100%;
  border-radius: 10px;
  background-color: rgba(242, 69, 69, 0.1);;
  display: flex;
  flex-direction: row;
  padding-top: 2%;
  padding-left: 5%;
}
.warning p {
  margin-left: 5%;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  color: #595959;

}
.pass-detail-top {
  min-height: 50px;
  width: 100%;
  left: 98px;
  top: 831px;
  border-radius: 10px;
  background-color: rgba(35, 149, 255, 0.1);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 3%;
}
.pass-detail-top p {
  font-family: Poppins;
  font-size: 14px;
  font-weight: 600;
  color: #595959;
}
.insurance-flex {
  border-bottom: 1px solid #E5E5E5;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3%;
}
#insurance-check {
  margin-right: 5%;
}
.insurance-top {
  width: 100%;
}
.insurance-top label {
  font-family: Poppins;
  font-size: 18px;
  font-weight: 600;
}
.info {
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
}
.total {
  font-family: Poppins;
  font-size: 18px;
  font-weight: 700;
  color: #2395FF;
}
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin-left: 5%;
}

.switch input {
  display: none;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2395FF;
}

input:focus + .slider {
  box-shadow: 0 0 1px  #2395FF;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
.toggle {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  align-items: center;
}
.pass {
  width: 50%;
}
.proceed button {
    height: 57px;
    width: 319px;
    border-radius: 10px;
    background-color: #2395FF;
    font-family: Poppins;
    font-size: 18px;
    font-weight: 700;
    color: #FFFFFF;
    border: none;
    outline: none;
    cursor: pointer;
}
.proceed {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 5%;
}
@media screen and (max-width: 991px) {
  .row {
    display: flex;
    flex-direction: column-reverse;
  }
  .left, .right {
    margin-top: 2%;
    margin-bottom: 0%;
  }
  .contact {
    color: black;
  }
  .view, .detail {
    color: white;
  }
  .right {
    margin-top: -20%;
    margin-bottom: 3%;
  }
}
@media screen and (max-width: 768px) {
  .pass-detail-top p {
    font-size: 12px;
  }
}

</style>
