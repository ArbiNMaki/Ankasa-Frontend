import Swal from 'sweetalert2'

const index = {
  methods: {
    alert (icon, title, text, confirmButton) {
      Swal.fire({
        icon: icon,
        title: title,
        text: text,
        showConfirmButton: false,
        timer: 1500
      })
    },
    toPage (path) {
      this.$router.push({ path: path })
    }
  }
}
export default index
