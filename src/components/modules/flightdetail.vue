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
                        <input type="checkbox" @click="toggleProfile">
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
                    <input type="text" v-model="fullname2">
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
                  <label for="insurance-check">Insurance  {{insuranceopt}}</label>
                  </div>
                  <div>
                    <p class="total">Rp20000000/pax</p>
                  </div>
                  </div>
                  <p class="info">Get Travel Compensation Up To Rp1000000  </p>
                </div>
                <div class="proceed">
                    <button>Proceed to Payment</button>
                </div>
            </div>
            <div class="col-lg-4 right">
              <div class="topside">
                  <p class="detail">Flight Details</p>
                  <p class="view">View Details</p>
                </div>
                <div class="rightside">
                  <div class="top-right">
                    <div class="plane-logo">
                      <img src="https://seeklogo.com/images/G/garuda-indonesia-logo-8A90F09D68-seeklogo.com.png" alt="">
                    </div>
                    <p>Garuda Indonesia</p>
                  </div>
                  <div class="fromto">
                    <p>Medan</p>
                    <i class="fas fa-plane"></i>
                    <p>Japan</p>
                  </div>
                  <p class="datetime">Sunday, 12 August 2020 | 12.33-15.21</p>
                  <div class="opt">
                    <p><i class="far fa-check-circle"></i> Refundable</p>
                    <p><i class="far fa-check-circle"></i> Can Reschedule </p>
                  </div>
                  <hr>
                  <div class="payment">
                    <p class="payment-title">Total Payment</p>
                    <p class="payment-total">Rp15000000</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'FlightDetailComp',
  data: function () {
    return {
      profile: false,
      country: '',
      title: 'Mr',
      insuranceopt: '',
      fullname: '',
      email: '',
      phone: '',
      fullname2: ''
    }
  },
  methods: {
    toggleProfile () {
      this.profile = !this.profile
      this.$emit('setCheckboxVal', this.profile)
    }
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
