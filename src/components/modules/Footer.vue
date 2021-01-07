<template>
    <div class="footer">
        <div class="col1">
            <div class="top">
                <div class="brand">
                <img src="../../assets/image/vector 02.png" alt="">
                <h1>Ankasa</h1>
            </div>
            <p class="detail">Find your Flight and explore the <br> world with us. We will take care of the rest</p>
            </div>
            <p>© Ankasa.  All Rights Reserved.</p>
        </div>
        <div class="col2">
            <div class="title">Features</div>
            <div class="features">
                <div class="feature" type="button">Find Ticket</div>
                <div class="feature" type="button">My Booking</div>
                <div class="feature" type="button">Chat</div>
                <div class="feature" type="button">Notification</div>
            </div>
        </div>
        <div class="col3">
            <div class="title">Download Ankasa App</div>
            <div class="button">
                <img type="button" src="../../assets/image/apple-app-store-travel-awards-globestamp-7 2.png" alt="">
            </div>
            <div class="button">
                <img type="button" src="../../assets/image/apple-app-store-travel-awards-globestamp-7 3.png" alt="">
            </div>
        </div>
        <div class="socmed">
            <div class="title">Follow Us</div>
            <div class="logo">
                <div class="socmed-option" type="button"><img src="../../assets/image/Vector.png" alt=""></div>
                <div class="socmed-option" type="button"><img src="../../assets/image/Vector (1).png" alt=""></div>
                <div class="socmed-option" type="button"><img src="../../assets/image/instagram.png" alt=""></div>
                <div class="socmed-option" type="button"><img src="../../assets/image/youtube.png" alt=""></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
.socmed-option {
    cursor: pointer;
}
.title {
    font-family: Poppins;
font-size: 16px;
font-weight: 800;
}
.features .feature {
    margin-top: 20%;
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    color: #6B6B6B;
    cursor: pointer;
}
.detail {
    margin-top: 5%;
}
.col1 p {
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    color: #6B6B6B;
}
.logo {
    margin-top: 10%;
    width: 200px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.button {
    margin-top: 8%;
}
.button img {
    cursor: pointer;
}
.footer {
    min-height: 300px;
    width: 100%;
    padding-top: 3%;
    background-color:white;
    padding-bottom: 1%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-right: 5%;
}
.brand img {
    margin-right:8%;
}
.brand h1 {
    font-family: Poppins;
    font-size: 24px;
    font-weight: 600;
    text-align: left;
    color: #414141;
}
.brand {
    display: flex;
    flex-direction: row;
}
.top {
    width: 100%;
}
.col1 {
    width: 15%;
    margin-left: 5%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.features {
    list-style: none;
    padding: 0;
    margin: 0;
}
.features li {
    padding: 0;
    margin: 0;
}
@media screen and (max-width: 822px) {
    .footer {
        flex-direction: column;
    }
    .features .feature {
    margin-top: 1%;
    }
    .col1 {
        width: 100%;
        text-align: center;
        margin-bottom: 5%;
        margin-left: 0%;
    }
    .col2 {
        width: 100%;
        margin-bottom: 5%;
        text-align: center;
    }
    .col3 {
        width: 100%;
        margin-bottom: 5%;
        align-items: center;
        text-align: center;
    }
    .button {
    margin-top: 2%;
    }
    .socmed {
        width: 100%;
        text-align: center;
    }
    .logo {
    margin-top: 2%;
    width: 100%;
    justify-content: center;
}
.socmed-option {
    margin-right: 5%;
}
.brand {
    justify-content: center;
}
}
</style>
