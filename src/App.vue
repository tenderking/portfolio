<template>
	<nav>
		<span><router-link class="nav-logo" to="/work">GM </router-link></span>

		<ul class="nav-list">
			<li><router-link class="nav-about" to="/about"> About</router-link></li>
			<li><router-link class="nav-work" to="/work"> Work</router-link></li>
		</ul>
	</nav>

	<router-view v-slot="{ Component }">
		<component :is="Component" />
	</router-view>
</template>

<script>
	export default {
		name: "App",
	};
</script>

<style>
	body {
		--color-60: #2c81df;
		--color-10: #1e2d48;
		--color-20: #2c3e50;
		--color-80: #a9c0ef;
		--color-85: hsl(220, 90%, 85%);
		--color-90: hsl(220, 69%, 70%);
		--color-100: white;
		--color-sec-60: burlywood;
		--color-text: var(--color-20);
		--color-text-2: var(--color-80);
		--color-text-3: var(--color-10);
		--color-bg: var(--color-60);
		--bg: var(--color-100);

		font-family: "Roboto", sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: var(--color-text);
		background: var(--bg);
		margin-top: auto;
	}
	@media (prefers-color-scheme: dark) {
		body {
			--color-text: var(--color-85);
			--color-text-2: var(--color-90);
			--color-text-3: var(--color-80);
			--color-bg: var(--color-20);
			--bg: var(--color-10);
		}
	}

	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;

		margin-bottom: 20px;
		margin: 0 5%;
		padding-bottom: 20px;
		border-bottom: 2px double var(--color-80);
	}

	.nav-logo {
		font-weight: bold;
		font-size: 40px;
		text-transform: uppercase;
		color: var(--color-text);
		margin: 0;
		text-decoration: none;
	}

	.nav-list {
		display: flex;

		flex-direction: row;
		justify-content: flex-end;
		gap: 20px;
		align-items: base;
		list-style-type: none;
	}
	.nav-about,
	.nav-work {
		color: var(--color-text-3);
		text-decoration: none;
		font-weight: 200;
		font-size: 30px;
		padding-bottom: 1rem;
		text-transform: lowercase;
		margin: 0;
		padding-top: 5px;
		display: inline-block;
		position: relative;
	}

	.nav-about::after,
	.nav-work::after {
		content: "";
		display: block;
		height: 3px;
		width: 0;
		background: transparent;
		transition: width 0.5s ease, background-color 0.5s ease;
		position: absolute;
		right: 0;
		bottom: 0;
	}

	.nav-about:hover::after,
	.nav-work:hover::after {
		width: 100%;

		background: var(--color-sec-60);
	}
	.nav-about:active,
	.nav-work:active {
		color: var(--color-sec-60);
	}
</style>
