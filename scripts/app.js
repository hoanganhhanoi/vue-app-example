require("bootstrap-webpack")
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import VueAsyncData from 'vue-async-data'

// Import component
import Header from './components/layout/header.vue'
import Footer from './components/layout/footer.vue'
import App from './components/layout/app.vue'
import SignIn from './components/signin/signin.vue'
import Home from './components/home/home.vue'
import SignUp from './components/signup/signup.vue'
import Weather from './components/weather/weather.vue'
import Users from './components/users/user.vue'

// Telling Vue to use the vue-router
Vue.use(VueRouter)
// Telling Vue to use the vue-resource
Vue.use(VueResource)
// Telling Vue to use the vue-async-data
Vue.use(VueAsyncData)

// Add component
Vue.component('app-header', Header)
Vue.component('app-footer', Footer)

// Add component to list
var list_component = {
	Header: Header,
	Footer: Footer,
	SignIn: SignIn,
	Home: Home,
	SignUp: SignUp,
	Weather: Weather,
	Users: Users
}

// Create instance RouterConfig
var config = require('../config/route.js')

var router = new VueRouter({
	history: false
})

// Set router
config.RouterConfig(router, list_component)

router.start(App, "#app")



