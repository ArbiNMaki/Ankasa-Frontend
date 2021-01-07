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
                <p class="location">Medan</p>
              </div>
              <i class="fas fa-exchange-alt fa-lg"></i>
              <div class="toloc">
                <p class="fromto">To</p>
                <p class="location">Tokyo</p>
              </div>
              </div>
              <p class="flight-detail">Monday, 20 July 20  |  6 Passenger  |  Economy</p>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row justify-content-around ctnr">
            <div class="col-lg-4 left">
              <div class="topside">
                  <p class="filter">Filter</p>
                  <p class="reset">Reset</p>
                </div>
              <div class="sidebar">
                <div class="list-unstyled components">
                <div class="menu">
                    <div data-target="#transit" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Transit</div>
                    <div class="collapse list-unstyled" id="transit">
                      <div class="opt">
                        <label for="direct">Direct</label>
                        <input type="checkbox" id="direct" name="transit" v-model="transit" value="direct"/>
                      </div>
                      <div class="opt">
                        <label for="transit">Transit</label>
                        <input type="checkbox" id="transit" name="transit" v-model="transit" value="transit"/>
                      </div>
                      <div class="opt">
                        <label for="transit2+">Transit 2+</label>
                        <input type="checkbox" id="transit2+" name="transit" v-model="transit" value="transit2+"/>
                      </div>
                      {{transit}}
                    </div>
                </div>
                <div class="menu">
                    <div data-target="#facilities" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Facilities</div>
                    <div class="collapse list-unstyled" id="facilities">
                      <div class="opt">
                        <label for="luggage">Luggage</label>
                        <input type="checkbox" id="luggage" name="facilities" v-model="facilities" value="luggage"/>
                      </div>
                      <div class="opt">
                        <label for="meal">In-flight Meal</label>
                        <input type="checkbox" id="meal" name="facilities" v-model="facilities" value="meal"/>
                      </div>
                      <div class="opt">
                        <label for="wifi">Wi-fi</label>
                        <input type="checkbox" id="wifi" name="facilities" v-model="facilities" value="wifi"/>
                      </div>
                      {{facilities}}
                    </div>
                </div>
                <div class="menu">
                    <div data-target="#departure" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Departure Time</div>
                    <div class="collapse list-unstyled" id="departure">
                      <div class="opt">
                        <label for="6">00:00-06:00</label>
                        <input type="checkbox" id="6" name="departure" v-model="departure" value="00:00-06:00"/>
                      </div>
                      <div class="opt">
                        <label for="12">06:00-12.00</label>
                        <input type="checkbox" id="12" name="departure" v-model="departure" value="06:00-12.00"/>
                      </div>
                      <div class="opt">
                        <label for="18">12:00-18:00</label>
                        <input type="checkbox" id="18" name="departure" v-model="departure" value="12:00-18:00"/>
                      </div>
                      <div class="opt">
                        <label for="24">18:00-24:00</label>
                        <input type="checkbox" id="24" name="departure" v-model="departure" value="18:00-24:00"/>
                      </div>
                      {{departure}}
                    </div>
                </div>
                <div class="menu">
                    <div data-target="#arrival" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Time Arrived</div>
                    <div class="collapse list-unstyled" id="arrival">
                        <div class="opt">
                        <label for="6">00:00-06:00</label>
                        <input type="checkbox" id="6" name="arrival" v-model="arrival" value="00:00-06:00"/>
                      </div>
                      <div class="opt">
                        <label for="12">06:00-12.00</label>
                        <input type="checkbox" id="12" name="arrival" v-model="arrival" value="06:00-12.00"/>
                      </div>
                      <div class="opt">
                        <label for="18">12:00-18:00</label>
                        <input type="checkbox" id="18" name="arrival" v-model="arrival" value="12:00-18:00"/>
                      </div>
                      <div class="opt">
                        <label for="24">18:00-24:00</label>
                        <input type="checkbox" id="24" name="arrival" v-model="arrival" value="18:00-24:00"/>
                      </div>
                      {{arrival}}
                    </div>
                </div>
                <div class="menu">
                    <div data-target="#airlines" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Airlines</div>
                    <div class="collapse list-unstyled" id="airlines">
                      <div class="opt">
                        <label for="garuda">Garuda Indonesia</label>
                        <input type="checkbox" id="garuda" name="airlines" v-model="airlines" value="garuda"/>
                      </div>
                      <div class="opt">
                        <label for="airasia">Air Asia</label>
                        <input type="checkbox" id="airasia" name="airlines" v-model="airlines" value="airasia"/>
                      </div>
                      <div class="opt">
                        <label for="lionair">Lion Air</label>
                        <input type="checkbox" id="lionair" name="airlines" v-model="airlines" value="lionair"/>
                      </div>
                      {{airlines}}
                    </div>
                </div>
                <div class="menu">
                    <div data-target="#price" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Ticket Price</div>
                    <div class="collapse list-unstyled" id="price">
                    </div>
                </div>
                <div class="range-title">
                  <p>Lowest</p>
                  <p>Highest</p>
                </div>
                <div class="range">
                  <vue-range-slider v-model="value" :min="min" :max="max" :enable-cross="enableCross" step="10000"></vue-range-slider>
                </div>
                <div class="value">
                  <p>Rp{{value[0]}}</p>
                  <p>Rp{{value[1]}}</p>
                </div>
            </div>
              </div>
            </div>
            <div class="col-lg-7 right">
              <div class="topside">
                  <p class="select">Select Ticket</p>
                  <p class="sort" type="button">Sort By <i class="fas fa-sort"></i></p>
                </div>
                <div class="ticket">
                  <div class="top-ticket">
                    <div class="airline-logo">
                      <img src="https://seeklogo.com/images/G/garuda-indonesia-logo-8A90F09D68-seeklogo.com.png" alt="">
                  </div>
                  <p>Garuda Indonesia</p>
                  </div>
                  <div class="center">
                      <div class="col1">
                        <div class="from">
                      <p class="country">IDN</p>
                      <p class="timeto">12.33</p>
                    </div>
                    <i class="fas fa-plane"></i>
                    <div class="to">
                      <p class="country">JPN</p>
                      <p class="timeto">15.21</p>
                    </div>
                      </div>
                    <div class="col2">
                      <p class="time">3 hours 11 minutes <br><span class="time-detail">(1 transit)</span></p>
                    </div>
                    <div class="col3">
                      <i class="fas fa-suitcase"></i>
                      <i class="fas fa-utensils"></i>
                      <i class="fas fa-wifi"></i>
                    </div>
                    <div class="col4">
                      <!-- <p class="pricetot">Rp</p> -->
                      <p class="pricetot">Rp15000000000</p>
                    </div>
                  </div>
                  <div class="selectbtn">
                    <p class="detail" type="button">View Detail <i class="fas fa-sort-down"></i></p>
                    <button>Select</button>
                  </div>
                </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import 'vue-range-component/dist/vue-range-slider.css'
import VueRangeSlider from 'vue-range-component'
export default {
  name: 'SearchResultComp',
  data () {
    return {
      value: [0, 100],
      transit: [],
      facilities: [],
      departure: [],
      arrival: [],
      airlines: []
    }
  },
  created () {
    this.min = 0
    this.max = 2000000
    this.enableCross = false
  },
  components: {
    VueRangeSlider
  }
}
</script>

<style lang="scss" scoped>
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
font-size: 24px;
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
  height: 57px;
width: 100px;
overflow: hidden;
}
.airline-logo img {
  width: 100%;
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
}
.menu {
  border-bottom: 1px solid #E5E5E5
}
.opt {
  // border: 2px solid green;
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
  height: 1400px;
}
.right {
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
  min-height: 1250px;
border-radius: 15px;
background-color: white;
padding-right: 5%;
padding-left: 5%;
padding-top: 5%;
}
.all {
  // border: 5px solid red;
  height: 100%;
}
.ctnr {
  height: 100%;
  margin-top: 3%;
}
</style>
