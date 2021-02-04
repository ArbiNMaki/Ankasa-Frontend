<template>
    <div class="header">
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="brand" @click="toHome" data-toggle="collapse" data-target="#navbarSupportedContent">
            <div class="brand-logo">
                <img src="../../assets/image/vector 02.png" alt="">
            </div>
            <div>
                <p class="brand-name">Ankasa</p>
            </div>
        </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse listall" id="navbarSupportedContent">
            <div class="navbar-nav ml-auto list">
                <div class="image-search">
                    <i class="fas fa-search fa-lg"></i>
                    <input type="search" placeholder="Where do you want to go?">
                </div>
                <div class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle findticket" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Find Ticket
                    </a>
                    <div class="menu">
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <form action="">
                            <p class="hey">Hey!</p>
                            <p class="hey-detail">Where do you want to go?</p>
                            <div class="where">
                                <div class="from">
                                    <p class="from-title">From</p>
                                    <select name="" id="" v-model="selectedfrom">
                                        <option v-for="city in getCity" :value="city.city_name" :key="city.id"> {{city.city_name}}</option>
                                    </select>
                                </div>
                                <i class="fas fa-exchange-alt fa-lg"></i>
                                <div class="to">
                                    <p class="to-title">To</p>
                                    <select name="" id="" v-model="selectedto">
                                        <option v-for="city in getCity" :value="city.city_name" :key="city.id"> {{city.city_name}}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="trip">
                                <div class="trip-oneway">
                                    <input type="radio" id="oneway" name="trip" v-model="triptype" value="one way"/>
                                    <label for="oneway">
                                        <i class="fas fa-plane"></i>
                                        One Way
                                    </label>
                                </div>
                                <div class="trip-roundtrip">
                                    <input type="radio" id="roundtrip" name="trip" v-model="triptype" value="round trip"/>
                                    <label for="roundtrip">
                                        <i class="fas fa-redo"></i>
                                        Round Trip
                                    </label>
                                </div>
                            </div>
                            <p class="departure">Departure Date</p>
                            <div class="date">
                                <input type="date" v-model="departuredate"/>
                            </div>
                            <div v-if="triptype !== 'one way'">
                                <p class="return">Return Date</p>
                                <input type="date" v-model="returndate"/>
                            </div>
                            <p class="person">How Many Persons?</p>
                            <div class="total">
                                <div class="children">
                                    <p class="children-title">Children</p>
                                    <input type="number" min="0" v-model="children">
                                </div>
                                <div class="adults">
                                    <p class="adults-title">Adults</p>
                                    <input type="number" min="0" v-model="adults">
                                </div>
                            </div>
                            <p class="class-title">Which Class Do You Want?</p>
                            <div class="seatclass">
                                <div class="options">
                                    <input type="radio" id="economy" name="seatclass" value="ekonomi" v-model="seattype" />
                                    <label for="economy">Economy</label>
                                </div>
                                <div class="options">
                                    <input type="radio" id="bussiness" name="seatclass" value="business" v-model="seattype" />
                                    <label for="bussiness">Business</label>
                                </div>
                                <div class="options">
                                    <input type="radio" id="firstclass" name="seatclass" value="first-class" v-model="seattype" />
                                    <label for="firstclass">First Class</label>
                                </div>
                            </div>
                            <button class="search" @click.prevent="handleFind" data-toggle="collapse" data-target="#navbarSupportedContent">Search Flight</button>
                        </form>
                    </div>
                    </div>
                </div>
                <div class="nav-item booking">
                    <div class="nav-link" @click="toBooking" data-toggle="collapse" data-target="#navbarSupportedContent">My Booking</div>
                </div>
                <div class="nav-item chat">
                    <i class="far fa-envelope fa-lg" data-toggle="collapse" data-target="#navbarSupportedContent"></i>
                </div>
                <div class="nav-item notif">
                    <i class="far fa-bell fa-lg" data-toggle="collapse" data-target="#navbarSupportedContent"></i>
                </div>
                <div class="nav-item userprofile" @click="toProfile" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <img :src="getMyProfile.image? getMyProfile.image : '/img/default-avatar.png'"  alt="">
                </div>
            </div>
        </div>
    </nav>
</div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'
import mixin from '../../mixins/index'

export default {
  name: 'Navbar',
  mixins: [mixin],
  data: function () {
    return {
      departuredate: '2021-01-18',
      returndate: '',
      triptype: 'one way',
      selectedfrom: 'Medan',
      selectedto: 'Bandung',
      children: '0',
      adults: '0',
      seattype: ''
    }
  },
  methods: {
    ...mapMutations('customer', ['SET_PASSENGER']),
    ...mapActions({ getAllCity: 'getCity', getUserProfile: 'getMyProfile' }),
    handleFind () {
      this.SET_PASSENGER({ child: this.children, adult: this.adults })
      this.$router.push({ path: 'searchresult', query: { from: this.selectedfrom, to: this.selectedto, triptype: this.triptype, departuredate: this.departuredate, returndate: this.returndate, seattype: this.seattype, adults: this.adults, children: this.children } })
        .catch((err) => {
          if (err.name !== 'NavigationDuplicated') {
            throw err
          }
        })
    //   this.departuredate = '2021-01-18'
    //   this.returndate = ''
    //   this.triptype = 'one way'
    //   this.selectedfrom = 'Medan'
    //   this.selectedto = 'Bandung'
    //   this.children = '0'
    //   this.adults = '0'
    //   this.seattype = ''
    },
    toHome () {
      this.$router.push({ path: '/cust/searchresult' })
    },
    toBooking () {
      this.$router.push({ path: '/cust/mybooking' })
    },
    toProfile () {
      this.$router.push({ path: '/cust/profile' })
    }
  },
  computed: {
    ...mapGetters(['getCity', 'getMyProfile'])
  },
  mounted () {
    this.getAllCity()
    this.getUserProfile()
  }
}
</script>

<style lang="scss" scoped>
#dimScreen {
    position: fixed;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(41, 34, 34, 0.5);
    z-index: 999;
}

.modal-full {
    max-height: 800px;
    width: 50%;
    min-width: 280px;
    max-width: 500px;
    border-radius: 25px;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 25px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    padding-top: 20px;
    padding-left: 5%;
    padding-right: 5%;
}
.navbar-nav {
    position: relative;
    z-index: 999;
    background-color: white;
}
.nav-item {
    cursor: pointer;
}
select {
    width: 90%;
    border: none;
    outline: none;
    // height: 50%;
}
.from-title, .to-title {
    font-family: Poppins;
    font-size: 12px;
    font-weight: 600;
    color: #979797;
}
.from-location, .to-destination {
    font-family: Poppins;
    font-size: 20px;
    font-weight: 400;
    color: black;
}
.search {
    height: 57px;
    width: 100%;
    border-radius: 10px;
    background-color: #2395FF;
    box-shadow: 0px 8px 10px 0px #2395FF 30%;
    font-family: Poppins;
    font-size: 18px;
    font-weight: 700;
    border: none;
    outline: none;
    color: #FFFFFF;
    cursor: pointer;
    margin-top: 5%;
}
.departure, .return, .person, .class-title {
    margin-top: 8%;
    font-family: Poppins;
    font-size: 14px;
    font-weight: 500;
    color: #6B6B6B;
}
.children-title, .adults-title {
    font-family: Poppins;
    font-size: 14px;
    font-weight: 500;
    color: #6B6B6B;
}
.hey {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 500;
}
.hey-detail {
    font-family: Poppins;
    font-size: 20px;
    font-weight: 500;
    margin-top: 2%;
}
.fa-plane-departure {
    color: black;
}
.navbar {
    height: 148px;
    // position: relative;
}
.image-search input {
    border: none;
    outline: none;
    background-color: #F5F5F5;
    width: 250px;
}
.image-search {
    display: flex;
    flex-direction: row;
    height: 50px;
    background: #F5F5F5;
    border-radius: 10px;
    align-items: center;
    margin-right: 5%;
}
.fa-search {
    margin-left: 5%;
    margin-right: 2%;
}
.list {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    float: right;
}
.booking, .chat, .notif {
    margin-right: 5%;
}
.dropdown {
    margin-right: 5%;
}
.brand-name {
    font-family: Poppins;
    font-size: 24px;
    font-weight: 600;
    text-align: left;
    color: #414141;
}
.brand {
    width: 200px;
    margin-left: 5% ;
    display: flex;
    flex-direction: row;
    cursor: pointer;
}
.brand-name {
    margin-top: 5%;
}
.brand-logo {
    margin-right: 10%;
}
.userprofile {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: gray;
    overflow: hidden;
    margin-right: 5%;
}
.userprofile img {
    height: 100%;
}
.findticket, .booking {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 700;
    color: #414141;
}
// .dropdown {
//     border: 2px solid black;
// }
.fa-search, .fa-bell, .fa-envelope {
    color: #414141;
}
.dropdown-menu {
    margin-top: 50%;
    height: auto;
    width: 400px;
    max-width: 400px;
    border-radius: 12px;
    background-color: #FFFFFF;
    box-shadow: 0px 8px 27px rgba(14, 63, 108, 0.19);
    padding-left: 20%;
    padding-top: 20%;
    padding-right: 20%;
    padding-bottom: 20%;
}
.where {
    height: 97px;
    width: 100%;
    border-radius: 12px;
    background-color: #FFFFFF;
    box-shadow: 0px 8px 27px rgba(14, 63, 108, 0.19);
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 10%;
}
.trip {
    display: flex;
    flex-direction: row;
    margin-top: 10%;
    padding: 0;
}
.trip input[type="radio"] {
    opacity: 0.01;
}

input[type="date"], input[type="number"] {
    font-family: Poppins;
    font-size: 14px;
    font-weight: 500;
    color: black;
    text-align: center;
}

.from input, .to input {
    border: 3px solid green;
    width: 100%;
}

.trip input[type="radio"]:checked+label,
.Checked+label {
    background: #2395FF;
    color: white;
}

.trip label {
    padding: 10px;
    padding-top: 20px;
    border: 1px solid #CCC;
    cursor: pointer;
    font-family: Poppins;
    font-size: 14px;
    font-weight: 600;
    color: #595959;
}

.trip label:hover {
    background: #DDD;
}
.total {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.children input, .adults input {
    width: 100%;
}
.seatclass {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.children, .adults {
    width: 30%;
    text-align: center;
}
.from {
    width: 100%;
    height: 100%;
    padding-left: 5%;
    padding-top: 2%;
}
.to {
    width: 100%;
    height: 100%;
    text-align: right;
    padding-right: 5%;
    padding-top: 2%;
}
.trip-oneway, .trip-roundtrip {
    width: 100%;
    padding: 0;
    margin: 0;
    text-align: center;
}
.trip-oneway label, .trip-roundtrip label {
    width: 80%;
    height: 100%;
    border-radius: 6px;
    background-color: #F0F0F0;

}
.options {
    width: 100%;
    text-align: center;
}
.options input {
    margin-right: 5%;
}
.children-title, .adults-title {
    font-family: Poppins;
    font-size: 14px;
    font-weight: 500;
}
.navbar-toggler {
    outline: none !important;
}
@media screen and (max-width: 991px) {
    .list {
        flex-direction: column;
        height: 100%;
        padding-bottom: 5%;
        border-bottom-right-radius: 10px ;
        border-bottom-left-radius: 10px ;
        box-shadow:10px 10px 10px grey;
    }
    .dropdown-menu {
        margin-top: 0%;
        height: auto;
        width: 100%;
    }
    .nav-item {
        margin-top: 5%;
    }
    .seatclass {
        flex-direction: column;
        justify-content: flex-start;
    }
    .options {
        text-align: left;
    }
    .trip {
        flex-direction: column;
    }
    .where {
        flex-direction: column;
        min-height: 200px;
    }
    .to {
        text-align: left;
        padding-left: 5%;
        padding-top: 2%;
    }
    .departure, .return, .person, .class-title {
        text-align: center;
    }
    .date {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .trip label {
        padding: 10px;
        padding-top: 10px;
        width: 100%;
    }
    .navbar {
        height: 73px;
    }
    .booking, .chat, .notif, .dropdown {
        margin-right: 0%;
    }
    .userprofile {
        margin-left: 5%;
    }
}
</style>
