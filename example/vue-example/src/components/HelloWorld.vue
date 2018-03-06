<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<div>{{count}}</div>
		<!-- <div>{{countAlias}}</div>
		<div>{{countPlusLocalState}}</div> -->
	</div>
</template>

<script>
import { mapState } from "vuex";
var mapState_1 = mapState({
  // 箭头函数可使代码更简练
  count: state => state.module_1.count+1,
  // 传字符串参数 'count' 等同于 `state => state.count`
  countAlias: "count",
  // 为了能够使用 `this` 获取局部状态，必须使用常规函数
  countPlusLocalState(state) {
    return state.module_1.count + this.localCount;
  }
});
var mapState_2 = mapState('module_1',["count"]);//在命名空间module_1里找
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      localCount: 5
    };
  },
  //   computed: {
  //     count() {
  //       return this.$store.state.module_1.count;
  // 	}
  //   }
  computed: mapState_2
};
</script>
<style lang="less" scoped>

</style>

