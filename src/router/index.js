import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import ForgotPass from '../views/ForgotPass.vue'
import Cust from '../views/cust/index.vue'
import SearchResult from '../views/cust/searchresult/index.vue'
import FlighDetail from '../views/cust/flightdetail/index.vue'
import MyBooking from '../views/cust/mybooking/index.vue'
import BookingDetail from '../views/cust/bookingdetail/index.vue'
import Profile from '../views/cust/profile/index.vue'
import Chat from '../views/cust/chat/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/forgot',
    name: 'ForgotPass',
    component: ForgotPass
  },
  {
    path: '/cust',
    name: 'Cust',
    component: Cust,
    children: [
      {
        path: 'searchresult',
        name: 'Search',
        component: SearchResult
      },
      {
        path: 'flightdetail',
        name: 'FlightDetail',
        component: FlighDetail
      },
      {
        path: 'mybooking',
        name: 'MyBooking',
        component: MyBooking
      },
      {
        path: 'bookingdetail',
        name: 'BookingDetail',
        component: BookingDetail
      },
      {
        path: 'profile',
        name: 'Profile',
        component: Profile
      },
      {
        path: 'chat',
        name: 'Chat',
        component: Chat
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
