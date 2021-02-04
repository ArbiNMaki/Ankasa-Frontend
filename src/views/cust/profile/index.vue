<template>
    <div class="container p-0">
    <div class="row p-0 justify-content-center">
      <div class="col-lg-4 p-0">
        <CardProfile class="shadow"/>
      </div>
      <div class="col-lg-8 p-0">
        <CardProfile2 />
      </div>
    </div>
    </div>
</template>

<script>
import CardProfile from '../../../components/CardProfile'
import CardProfile2 from '../../../components/CardProfile2'
import { mapActions } from 'vuex'

export default {
  components: {
    CardProfile,
    CardProfile2
  },
  methods: {
    ...mapActions('user', ['getUser'])
  },
  mounted () {
    this.getUser()
  }
}
</script>

<style scoped src="../../../assets/css/style.css">
</style>
