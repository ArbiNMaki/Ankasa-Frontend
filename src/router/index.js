import Vue from 'vue'
import VueRouter from 'vue-router'
<<<<<<< HEAD
import Home from '../views/Home.vue'
=======
import Cust from '../views/cust/index.vue'
import SearchResult from '../views/cust/searchresult/index.vue'
import FlighDetail from '../views/cust/flightdetail/index.vue'
import MyBooking from '../views/cust/mybooking/index.vue'
import BookingDetail from '../views/cust/bookingdetail/index.vue'
import Profile from '../views/cust/profile/index.vue'
import Chat from '../views/cust/chat/index.vue'
>>>>>>> 9dbbd859ea7c62b97680d91be15041b7e3a7bb30

Vue.use(VueRouter)

const routes = [
  {
<<<<<<< HEAD
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
=======
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
>>>>>>> 9dbbd859ea7c62b97680d91be15041b7e3a7bb30
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
