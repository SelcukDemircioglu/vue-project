import { createStore, createLogger, } from 'vuex'
import { Modules } from './class/Modules'
import login from './modules/login'
// import cart from './modules/cart'
// import products from './modules/products'

const debug = process.env.NODE_ENV !== 'production'



export default createStore({
  modules: {
      login
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})