<template>
    <div class="w-75 pl-5">
    <div class="card d-sm-block d-none">
        <div class="card-body">
        <div class="text-center">
            <img width="150" class="img-thumbnail" alt="Responsive image" src="../../src/assets/image/poto.png">
        </div>
        <div class="text-center mt-3" >
            <div class="fileUpload btn btn-outline-primary btn-lg font-weight-bold">
                <span>Select Photo</span>
                <input class="upload" type="file" />
            </div>
        </div>
        <div class="text-center mt-3" >
            <h4 class="font-weight-bold" >Mike</h4>
        </div>
        <div class="text-center mt-2" >
            <p style="color: #6B6B6B;" >Malang, Indonesia</p>
        </div>
        <div class="row">
            <div class="col-6"><p class="" >Cards</p></div>
            <div class="col-6"><p class="text-right add-cards" >+ Add</p></div>
        </div>
        <div class="text-white cards mb-4 pt-2 pl-3 pr-3">
            <p class="font-weight-bold cards-id" >4441 1235 5512 5551</p>
            <div class="row cards-detail">
            <div class="col-6"><p class="" >X Card</p></div>
            <div class="col-6"><p class="text-right" >$ 1,440.2</p></div>
            </div>
        </div>
        <div class="font-weight-bold">
            <router-link to="profile" class="router-link">
            <p class="body-text-profile ml-2 mb-4"><img class="mr-4" src="../../src/assets/image/user.svg">Profile</p>
            </router-link>
            <p class="ml-2 mb-4"><img class="mr-4" src="../../src/assets/image/star.svg">My Review</p>
            <p class="ml-2 mb-4"><img class="mr-4" src="../../src/assets/image/setting.svg">Settings</p>
            <a class="body-text-logout ml-2 mb-4" style="cursor: pointer;"><img class="mr-4" src="../../src/assets/image/logout.svg">Logout</a>
        </div>
        </div>
    </div>
    </div>

</template>

<script>
export default {
}
</script>

<style scoped>
.img-thumbnail {
  padding: 0.25rem;
  background-color: #fff;
  border: 2px solid rgba(35, 149, 255, 1) !important;
  border-radius: 100% !important;
  max-width: 100% !important;
  height: auto;
}
.edit-photo {
    display:flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background: #FFFFFF;
    box-shadow: 0px 8px 27px rgba(14, 63, 108, 0.19);
    border-radius: 20px;
    top:1000px;
}
.cont-edit-photo {
    position: absolute;
    right: 100px;
    bottom: 0px;
}
.cards {
    height: 68px;
}
.fileUpload {
    position: relative;
    overflow: hidden;
    margin: 10px;
}
.fileUpload input.upload {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    padding: 0;
    font-size: 20px;
    cursor: pointer;
    opacity: 0;
    filter: alpha(opacity=0);
}
.add-cards {
  color: rgba(35, 149, 255, 1);
}
.cards {
  background-color: rgba(35, 149, 255, 1);
  box-shadow: 0px 8px 25px rgba(35, 149, 255, 0.49);
  border-radius: 10px;
}
.cards-detail {
  margin-top: -15px;
  font-size: 12px;
}
.cards-id {
  letter-spacing: 1px;
  word-spacing: 1px;
}
.cards-title {
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height */
  letter-spacing: 0.3em;
  color: #2395FF;
}
</style>
