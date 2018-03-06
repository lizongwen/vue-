<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<div>{{count}}</div>
	</div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  computed: {
    count() {
      return this.$store.state.module_1.count;
    }
  }
};
</script>
<style lang="less" scoped>

</style>

