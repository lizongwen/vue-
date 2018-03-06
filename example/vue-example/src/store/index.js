import Vue from 'vue'
import Vuex from 'vuex'
import module_1 from './modules/module_1'
import module_2 from './modules/module_2'
// import products from './modules/products'
// import createLogger from '../../../src/plugins/logger'

console.log(Vuex)
Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
	modules: {
		module_1,
		module_2
		// cart,
		// products
	},
	//strict: debug,
	//plugins: debug ? [createLogger()] : []
})