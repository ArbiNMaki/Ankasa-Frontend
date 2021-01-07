<template>
    <div>
        <Navbar />
        <div class="content">
          <router-view/>
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '../../components/modules/Navbar'
import Footer from '../../components/modules/Footer'
export default {
  name: 'Cust',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.content {
  background-color: #F5F6FA;
  min-height: 1600px;
}
</style>
