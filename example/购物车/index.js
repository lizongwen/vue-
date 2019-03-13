new Vue({
	el: '#app',
	data: {
		goods: [{
			goodsName: 'iphone',
			price: 6188,
			count: 0,
			checked: false
		}, {
			goodsName: 'iPad',
			price: 5888,
			count: 0,
			checked: false
		}, {
			goodsName: 'pro',
			price: 21488,
			count: 0,
			checked: false
		}]
	},
	computed: {
		selectAll: {
			get: function () {
				var selectAll = false;
				return this.checkedCount == this.goods.length;
			},
			set: function (value) {
				this.goods.forEach(function (item) {
					item.checked = value
				})
				return value;
			}
		},
		checkedCount: function () {
			var i = 0;
			this.goods.forEach(function (item) {
				if (item.checked == true) i++;
			})
			return i;
		},
		total: function () {
			var total = 0;
			for (var i = 0; i < this.goods.length; i++) {
				var item = this.goods[i];
				if (item.checked) {
					total += item.price * item.count;
				}
			}
			return total.toString().replace(/\B(?=(\d{3})+$)/g, ',')
		}
	},
	methods: {
		reduce: function (index) {
			if (this.goods[index].count === 0) return;
			this.goods[index].count--;
		},
		add: function (index) {
			this.goods[index].count++;
		},
		remove: function (index) {
			this.goods.splice(index, 1);
		}
	}
});