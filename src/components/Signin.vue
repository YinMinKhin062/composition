<template>
	<div class="auth_Container">
		<h3>Sign In</h3>

		<div class="form">
			<div class="form-item">
				<hr />
				<input type="text" placeholder="Email" />
			</div>
			<div class="form-item">
				<div v-if="click">
					<input type="text" placeholder="Password" v-model="password" />
					<i class="fa-regular fa-eye" @click="showPass"></i>
					{{ password }}
				</div>
				<div v-else>
					<input type="password" placeholder="Password" v-model="password" />

					<i class="fa-regular fa-eye-slash" @click="showPass"></i>
					{{ password }}
				</div>
			</div>
			<div class="form-item">
				<button>Sign In</button>
			</div>
		</div>
	</div>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
	setup() {
		let password = ref('');
		let click = ref(false);
		let showPass = () => {
			click.value = !click.value;
		};
		return { click, password, showPass };
	},
};
</script>

<style></style>
