<template>
    <div>
        <div class="top">
        </div>
        <div class="container">
          <div class="row justify-content-around ctnr">
            <div class="col-lg-7 left">
              <div class="topside">
                  <p class="contact">Contact Person Detail</p>
                </div>
                <div class="leftside1">

                </div>
                <div class="pass-detail-title">
                  <p>Passenger Detail</p>
                </div>
                <div class="pass-detail">

                </div>
                <div class="insurance-title">
                  <p>Passenger Detail</p>
                </div>
                <div class="insurance">

                </div>
            </div>
            <div class="col-lg-4 right">
              <div class="topside">
                  <p class="detail">Flight Details</p>
                  <p class="view">View Details</p>
                </div>
                <div class="rightside">

                </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'FlightDetail'
}
</script>

<style lang="scss" scoped>
.top {
    height: 176px;
    width: 100%;
    background-color: #2395FF;
    border-radius: 0px 0px 30px 30px;
    background-image: url('../../../assets/image/vector 3.png');
    background-repeat: no-repeat;
}
.left, .right {
    min-height: 1400px;
    margin-bottom: 5%;
    border: 2px solid black;
    margin-top: -10%;
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
  border: 2px solid black;
}
.rightside {
  min-height: 375px;
  width: 100%;
  border-radius: 15px;
  background-color: white;
  border: 2px solid black;
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
border: 2px solid black;
}
.insurance {
  height: 150px;
width: 100%;
border-radius: 15px;
background-color: white;
border: 2px solid black;
}
</style>
