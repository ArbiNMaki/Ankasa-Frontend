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
              <div class="allhistory">
                <div class="history">
                <p>Monday, 20 July ‘20 - 12:33</p>
                <div class="fromto">
                  <p class="loc">IDN</p>
                  <i class="fas fa-plane"></i>
                  <p class="loc">JPN</p>
                </div>
                <p class="plane">Garuda Indonesia B-221</p>
                <hr>
                <div class="statusflex">
                  <div class="statustop">
                    <p class="status-title">Status</p>
                    <div class="status">
                      <p class="eticket">Eticket issued</p>
                    </div>
                  </div>
                  <p class="view-det">View Details</p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
import CardProfile from '../../../components/CardProfile'
export default {
  name: 'MyBooking',
  components: {
    CardProfile
  }
}
</script>

<style lang="scss" scoped>
.allhistory {
  height: 600px;
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
  font-size: 20px;
  font-weight: 600;
  color: black;
}
</style>
