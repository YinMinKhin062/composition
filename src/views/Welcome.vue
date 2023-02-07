<template>
	<div></div>

	<!-- <Signin></Signin> -->
</template>

<script>
import { onUnmounted } from '@vue/runtime-core';
import Signin from '../components/Signin';
export default {
	components: { Signin },
	setup() {
		onUnmounted(() => {});
	},
};
</script>

<style></style>
