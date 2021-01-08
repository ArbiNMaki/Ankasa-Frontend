<template>
    <div>
        <Navbar />
        <router-view/>
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
</style>
