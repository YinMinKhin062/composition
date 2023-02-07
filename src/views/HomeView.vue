<template>
	<div class="home">
		<div class="txtBox">
			<input
				type="text"
				v-model="search"
				class="form-control"
				placeholder="Please enter match word"
			/>
		</div>

		<div class="result">
			Search Item : {{ search }}<br /><br />

			<ul v-for="name in filteredName" :key="name">
				<li>{{ name }}</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { ref } from '@vue/reactivity';
import { computed } from '@vue/runtime-core';
export default {
	name: 'home',
	setup() {
		let search = ref('');

		let names = ref(['YMK', 'TNY', 'Ma Ma', 'Hla Hla', 'Khin Khin']);

		let filteredName = computed(() => {
			return names.value.filter(name => {
				return name.includes(search.value);
			});
		});

		// console.log(filteredName.value);
		return { names, search, filteredName };
	},
};
</script>
<style>
/* .home {
	margin: auto 50px;
	display: grid;
	grid-template-columns: 300px 300px;
}
input[type='text'] {
	width: 300px;
} */

.home {
	display: grid;
	grid-template-columns: 350px 300px;
	max-width: 650px;
	margin: 3rem auto;
	border-radius: 0.5rem;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	box-sizing: border-box;
	box-shadow: 5px 5px 8px 10px #eee;
}

.txtBox {
	padding: 3rem;
	box-sizing: border-box;
}

.result {
	padding: 3rem;
	border-left: 2px solid #eee;
	box-sizing: border-box;
}
</style>
