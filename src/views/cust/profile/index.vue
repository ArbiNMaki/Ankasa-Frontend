<template>
    <div class="row">
      <div class="col-4">
        <CardProfile />
      </div>
      <!-- <div class="col-8">
        <CardProfile2 />
      </div> -->
    </div>
</template>

<script>
import CardProfile from '../../../components/CardProfile'
// import CardProfile2 from '../../../components/CardProfile2'
import { mapActions } from 'vuex'

export default {
  components: {
    CardProfile
    // CardProfile2
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
