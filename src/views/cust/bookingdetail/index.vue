<template>
  <div class="booking-detail">
    <div class="row justify-content-center">
      <div class="booking-card p-3">
        <div class="container mt-5">
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
                  <img src="../../../assets/img/garuda-indonesia-logo-BD82882F07-seeklogo 3.png" alt="logo garuda">
                </b-col>
                <b-col>
                  <b class="departure font-weight-bold mr-2"> IDN </b>
                  <img src="../../../assets/img/greysmallplane.png" alt="gray-small-plane"/>
                  <b class="departure font-weight-bold ml-2"> JPN </b>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b class="small text-muted">Code</b>
                  <p class="small">AB-221</p>
                </b-col>
                <b-col>
                  <b class="small text-muted">Class</b>
                  <p class="small">Economy</p>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b class="small text-muted">Terminal</b>
                  <p class="small">A</p>
                </b-col>
                <b-col>
                  <b class="small text-muted">Class</b>
                  <p class="small">221</p>
                </b-col>
              </b-row>
              <p class="small text-muted">Departure</p>
              <p class="small">Monday, 20 July 2020 -12:33</p>
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
export default {
  name: 'BookingDetail'
}
</script>

<style scoped>
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
  height: 100%;
  border: 0.5px solid #E5E5E5;
  border-right: 2px dashed #E5E5E5;
  border-radius: 10px;
  padding: 20px;
}
.booking-right {
  width: 100%;
  height: 100%;
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
