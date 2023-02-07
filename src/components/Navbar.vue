<template>
	<nav>
		<div class="nav-group">
			<div class="nav-head">
				<router-link :to="{ name: 'home' }">M-magazine</router-link>
			</div>
			<div class="nav-text">
				<!-- <router-link :to="{ name: 'home' }">Computed with Ref</router-link> -->
				<router-link :to="{ name: 'PropsWithRef' }">Posts</router-link>
				<router-link :to="{ name: 'CreatePost' }">Create Post</router-link>
			</div>
			<div class="nav-icon">
				<router-link :to="{ name: 'Welcome' }"><i class="fa-solid fa-user"></i></router-link>
			</div>
		</div>
	</nav>
</template>

<script>
export default {};
</script>

<style>
nav {
	padding: 30px;
	font-family: 'Crimson Text', serif;

	/* text-align: right; */
}
.nav-head {
	font-size: 22px;
	font-style: italic;
	text-transform: capitalize;

	/* vertical-align: bottom; */
}
.nav-icon {
	text-align: right;
}
.nav-text {
	text-align: center;
	text-transform: uppercase;
}
.nav-group {
	display: grid;
	grid-template-columns: 200px auto 100px;
	background: lightblue;
	padding: 1rem;
	border-radius: 1rem;
}

nav a {
	flex: inline-block;
	text-decoration: none;
	font-weight: bold;
	color: grey;
	margin-left: 10px;
	/* text-transform: uppercase; */
	/* text-align: center; */
}

nav a:hover {
	color: #2c3e50;
}

nav a.router-link-exact-active {
	color: darkcyan;
}
</style>
