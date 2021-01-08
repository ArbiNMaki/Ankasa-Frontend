<template>
    <div>
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="brand">
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
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <form action="">
                            <p class="hey">Hey!</p>
                            <p class="hey-detail">Where do you want to go?</p>
                            <div class="where">
                                <div class="from">
                                    <p class="from-title">From {{selectedfrom}}</p>
                                    <select name="" id="" v-model="selectedfrom">
                                        <option v-for="item in vals" :value="item.value" :key="item.value"> {{item.value}}</option>
                                    </select>
                                </div>
                                <i class="fas fa-exchange-alt fa-lg"></i>
                                <div class="to">
                                    <p class="to-title">To {{selectedto}}</p>
                                    <select name="" id="" v-model="selectedto">
                                        <option v-for="item in vals" :value="item.value" :key="item.value"> {{item.value}}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="trip">
                                <div class="trip-oneway">
                                    <input type="radio" id="oneway" name="trip" v-model="triptype" value="oneway"/>
                                    <label for="oneway">
                                        <i class="fas fa-plane"></i>
                                        One Way
                                    </label>
                                </div>
                                <div class="trip-roundtrip">
                                    <input type="radio" id="roundtrip" name="trip" v-model="triptype" value="roundtrip"/>
                                    <label for="roundtrip">
                                        <i class="fas fa-redo"></i>
                                        Round Trip
                                    </label>
                                </div>
                            </div>
                            {{triptype}}
                            <p class="departure">Departure</p>
                            <input type="date" v-model="date"/>
                            {{date}}
                            <p class="person">How Many Persons?</p>
                            <div class="total">
                                <div class="children">
                                    <p class="children-title">Children</p>
                                    <input type="number" min="0" v-model="children">
                                    {{children}}
                                </div>
                                <div class="adults">
                                    <p class="adults-title">Adults</p>
                                    <input type="number" min="0" v-model="adults">
                                    {{adults}}
                                </div>
                            </div>
                            <p class="class-title">Which Class Do You Want?</p>
                            <div class="seatclass">
                                <div class="options">
                                    <input type="radio" id="economy" name="seatclass" value="economy" v-model="seattype" />
                                    <label for="economy">Economy</label>
                                </div>
                                <div class="options">
                                    <input type="radio" id="bussiness" name="seatclass" value="bussiness" v-model="seattype" />
                                    <label for="bussiness">Bussiness</label>
                                </div>
                                <div class="options">
                                    <input type="radio" id="firstclass" name="seatclass" value="firstclass" v-model="seattype" />
                                    <label for="firstclass">First Class</label>
                                </div>
                            </div>
                            {{seattype}}
                            <button class="search">Search Flight</button>
                        </form>
                    </div>
                </div>
                <div class="nav-item booking">
                    <div class="nav-link">My Booking</div>
                </div>
                <div class="nav-item chat">
                    <i class="far fa-envelope fa-lg"></i>
                </div>
                <div class="nav-item notif">
                    <i class="far fa-bell fa-lg"></i>
                </div>
                <div class="nav-item userprofile">

                </div>
            </div>
        </div>
    </nav>
</div>
</template>

<script>
export default {
  name: 'Navbar',
  data: function () {
    return {
      date: '',
      triptype: '',
      selectedfrom: '',
      selectedto: '',
      children: '',
      adults: '',
      seattype: '',
      vals: [{
        value: 'Indonesia'
      },
      {
        value: 'Malaysia'
      },
      {
        value: 'Singapura'
      }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-item {
    cursor: pointer;
}
select {
    width: 90%;
    border: none;
    outline: none;
    height: 50%;
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
    margin-bottom: 5%;
}
.departure, .person, .class-title {
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
    position: relative;
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
    width: 10%;
    margin-left: 5% ;
    display: flex;
    flex-direction: row;
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
.findticket, .booking {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 700;
    color: #414141;
}
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
@media screen and (max-width: 991px) {
    .list {
        flex-direction: column;
    }
    .dropdown-menu {
        margin-top: 0%;
        height: auto;
        width: 100%;
    }
}
</style>
