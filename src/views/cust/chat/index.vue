<template>
    <div class="bg">
      <div class="top-bottom">
      <div class="Rectangle-24">
        <div class="row">
          <div class="col">
            <h1>Chat</h1>
          </div>
          <div class="col">
            <h5 style="cursor: pointer;">Filter</h5>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-1">
            <img width="100" class="pic1" alt="Responsive image" src="../../../assets/image/p1.png">
          </div>
          <div class="col ml-5 mt-5" style="cursor: pointer;">
            <div class="row">
          <div class="col">
            <h4>Henry Soham</h4>
          </div>
          <div class="col">
            <p style="color: #6b6b6b; margin-top: 10px; text-align: right;">8:30 AM</p>
          </div>
        </div>
            <p style="color: #6b6b6b; margin-top: 10px;">Me: Bro, just fuck off</p>
          </div>
        </div>
        <hr />
        <div class="row">
          <div class="col-sm-1">
            <img width="100" class="pic1" alt="Responsive image" src="../../../assets/image/p2.png">
          </div>
          <div class="col ml-5 mt-5" style="cursor: pointer;">
            <div class="row">
          <div class="col">
            <h4>Theresa Webb</h4>
          </div>
          <div class="col">
            <p style="color: #6b6b6b; margin-top: 10px; text-align: right;">15:20 PM</p>
          </div>
        </div>
            <p style="color: #6b6b6b; margin-top: 10px;">Why did you do that?</p>
          </div>
        </div>
        <hr />
        </div>
      </div>
      </div>
</template>

<script>
export default {
  name: 'Chat'
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.bg{
  background: url('../../../assets/image/header.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.Rectangle-24 {
  width: 800px;
  height: 625px;
  background-color: #ffffff;
  margin: 0 283px 0;
  padding: 50px 75px 57px 75px;
  border-radius: 20px;
}
h5 {
  text-align: right;
  margin: 12.5px 0;
  color: rgba(35, 149, 255, 1);
}
.pic1 {
  // background: url('../../../assets/image/p1.png');
  // width: 100%;
  // height: 100%;
  margin: 80px 0 25px;
  border-radius: 15px;
}
.ml-5, .mx-5 {
    margin-left: 5rem !important;
}
.mt-5, .my-5 {
    margin-top: 6.5rem !important;
}
.top-bottom {
  padding: 50px 0 50px;
}
</style>
