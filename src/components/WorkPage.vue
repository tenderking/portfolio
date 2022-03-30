<template>
	<h1>My projects</h1>
	<div class="wrapper">
		<div class="project-card">
			<div class="card-front">
				<a href="https://tenderking.github.io/interactive-comments-app/"
					>Interactive comments</a
				>
			</div>
			<div class="card-back">
				<a href="https://tenderking.github.io/interactive-comments-app/"
					>Visit Demo</a
				>
				<a href="https://github.com/tenderking/interactive-comments-app"
					>Visit Repo</a
				>
			</div>
		</div>
		<div class="project-card">
			<div class="card-front">
				<a href="https://tenderking.github.io/sunnyside-app/">Landing Page</a>
			</div>
			<div class="card-back">
				<a href="https://tenderking.github.io/sunnyside-app/">Visit Demo</a>
				<a href="https://github.com/tenderking/sunnyside-app">Visit Repo</a>
			</div>
		</div>
		<div class="project-card">
			<div class="card-front">
				<a href="https://tenderking.github.io/job-listing-app/#/"
					>Job Listing</a
				>
			</div>
			<div class="card-back">
				<a href="https://tenderking.github.io/job-listing-app/#/">Visit Demo</a>
				<a href="https://github.com/tenderking/job-listing-app/">Visit Repo</a>
			</div>
		</div>
	</div>
</template>

<script>
	//https://tenderking.github.io/interactive-comments-app/

	// import test from '../content/README.md'

	export default {
		name: "WorkPage",
	};
</script>

<style scoped>
	.wrapper {
		display: flex;
		flex-wrap: wrap;
		gap: 1em;
	}
	.wrapper a {
		text-decoration: none;
		color: var(--color-primary-10);
		font-size: 1.5rem;
	}
	.wrapper a:hover {
		color: var(--color-text);
		background-color: var(--color-bg);
		padding: 1em;
		border-radius: 4px;
		transition: all 200ms;
	}
	.project-card {
		position: relative;

		color: var(--color-primary-10);
		width: 300px;
		height: 300px;
		margin: auto;
		display: flex;
		justify-content: center;
		align-items: center;
		transform-style: preserve-3d;
		transition: 0.6s 0.1s;
	}

	.project-card:hover,
	.project-card:focus-within {
		transform: rotateY(180deg);
	}
	.card-front,
	.card-back {
		width: 100%;
		height: 100%;
		border-radius: 4px;

		background: var(--color-secondary-60);
		position: absolute;
		top: 0;
		left: 0;
		overflow: hidden;

		backface-visibility: hidden;

		display: flex;
		justify-content: center;
		align-items: center;
	}
	/* .card-front */
	.card-front {
		transform: rotateY(0deg);
		z-index: 2;
	}

	/* .card-back */
	.card-back {
		flex-direction: column;
		gap: 1em;

		transform: rotateY(180deg);
		z-index: 1;
	}
</style>
