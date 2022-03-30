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
		--color-primary-10: hsl(220, 41%, 20%);
		--color-primary-20: hsl(220, 41%, 30%);
		--color-primary-80: hsl(220, 69%, 80%);
		--color-primary-85: hsl(220, 69%, 85%);
		--color-white: white;
		--color-secondary-60: hsl(34, 57%, 70%);
		--color-secondary-90: hsl(34, 57%, 90%);

		--color-text: var(--color-primary-10);
		--color-text-2: var(--color-secondary-90);
		--color-text-3: var(--color-primary-10);
		--color-bg: var(--color-primary-80);
		--bg: var(--color-white);

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
			--color-text: var(--color-primary-85);
			--color-text-2: var(--color-secondary-90);
			--color-text-3: var(--color-primary-85);
			--color-bg: var(--color-primary-20);
			--bg: var(--color-primary-10);
			font-size: 14px;
		}
	}

	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;

		margin: 0 5%;
		padding-block: 1em 0.5em;
		border-bottom: 2px double var(--color-primary-80);
	}

	.nav-logo {
		font-weight: bold;
		font-size: 40px;
		text-transform: uppercase;
		/* color: var(--color-text); */
		background: linear-gradient(
			40deg,
			var(--color-text) 65%,
			var(--color-secondary-60) 15%
		);
		margin: 0;
		text-decoration: none;
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
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
		font-weight: 400;

		text-transform: lowercase;
		margin: 0;

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

		background: var(--color-secondary-60);
	}
	.nav-about:active,
	.nav-work:active {
		color: var(--color-secondary-60);
	}
</style>
