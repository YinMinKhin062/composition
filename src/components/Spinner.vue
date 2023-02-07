<template>
	<div class="spin"></div>
</template>

<script>
export default {};
</script>

<style>
.spin {
	width: 30px;
	height: 30px;
	border: 4px solid transparent;
	border-radius: 50%;
	border-top: 4px solid grey;
	animation: spin 1s infinite;
	margin: 50px auto;
}
@keyframes spin {
	to {
		transform: rotate(360deg);
	}
}
</style>
