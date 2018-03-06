let state = {
	count: 10
}
let getters = {

}
let actions = {

}
let mutations = {
	increment(state) {
		state.count++
	}
}
export default {
	namespaced: true,//命名空间
	state,
	getters,
	actions,
	mutations
}