import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Cart from '../components/Cart'
import User from '../components/User'
import Details from '../components/Details'
import Login from '../components/Login'
import Register from '../components/Registor'
import Pay from '../components/Pay'
import Address from '../components/Address'
import editAddress from '../components/editAddress'
import addAddress from '../components/addAddress'

Vue.use(Router);

export default new Router({
  routes: [
    {path: '*', redirect: '/home'},
    {path: '/home', component: Home, meta: {keepAlive: true}},
    {path: '/cart', component: Cart},
    {path: '/user', component: User},
    {path: '/details', component: Details},
    {path: '/login', component: Login},
    {path: '/register', component: Register},
    {path: '/pay', component: Pay},
    {path: '/user/address', component: Address},
    {path: '/user/editAddress', component: editAddress},
    {path: '/user/addAddress', component: addAddress}
  ],
  mode: 'history'
});
