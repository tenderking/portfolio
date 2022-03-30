<template>
	<main>
		<section class="main-header">
			<div>
				<img
					id="profile-pic"
					src="../assets/outdoor-pic.jpg"
					alt="profile picture"
				/>
			</div>

			<div>
				<h1 class="display">Hi, I'm George!</h1>
				<h3>I have a passion for technology and digitalization.</h3>
				<p>
					My goal is to make technology easy to understand. I have a background
					in applied data science and physics, and have a strong interest web
					development and ux-design.<br />
					I'm open to have a
					<a
						href="mailto:gmu003@gmail.com"
						style="color:var(--color-text), text-decoration-line:none"
						>chat 👋</a
					>, or a coffee.
				</p>
				<div id="socials">
					<a href="https://www.behance.net/georgemushore">
						<img
							src="../assets/ant-design_behance-circle-filled.png"
							alt="behance icon"
						/>
					</a>
					<a href="https://www.linkedin.com/in/george-mushore-b17927a2/">
						<img
							src="../assets/akar-icons_linkedin-fill.png"
							alt="linkedin icon"
						/>
					</a>

					<a href="https://gmu003.medium.com/">
						<img
							src="../assets/ant-design_medium-circle-filled.png"
							alt="medium icon"
						/>
					</a>
					<a href="mailto:gmu003@gmail.com">
						<img src="../assets/clarity_email-solid.png" alt="email" />
					</a>
				</div>
			</div>
		</section>

		<section class="skills-overview">
			<div class="skills">
				<ul class="skill-list">
					<li><h2>Education</h2></li>

					<li><h3>UX-Design</h3></li>

					<li>Coursera</li>

					<li>Google UX-design</li>

					<li>April 2021</li>

					<li>
						<h3>Data Science</h3>
					</li>

					<li>Norwegian Arctic University</li>

					<li>MSc of Tech.</li>

					<li>October 2019</li>
				</ul>
			</div>

			<div class="skills">
				<ul>
					<li><h2>Skills</h2></li>

					<li>Design thinking</li>
					<li>UX+UI</li>
					<li></li>
					<p></p>

					<li>Machine Learning</li>
					<li>Bayesian Statistics</li>
					<li>Regression</li>
				</ul>
			</div>

			<div class="skills">
				<ul>
					<li><h2>Tools</h2></li>
					<li>Figma, AdobeXD</li>
					<li>HTML , CSS, JS</li>
					<li></li>

					<p></p>
					<li>Python, R, Excel</li>
					<li>Tableau, PowerBI</li>
				</ul>
			</div>
		</section>

		<section class="links">
			<div id="my-projects">
				<router-link to="/work">
					<img class="icons-dark" src="../assets/ic_outline-work.png" alt="" />
					My Projects
				</router-link>
			</div>

			<div id="resume">
				<a href="CV_George.pdf" download="CV George English">
					<img
						class="icons-dark"
						src="../assets/ant-design_download-outlined.png"
						alt=""
					/>
					Download Resume
				</a>
			</div>

			<div id="email">
				<a href="mailto:gmu003@gmail.com">
					<img
						class="icons-dark"
						src="../assets/clarity_email-solid-dark.png"
						alt=""
					/>
					Get in touch
				</a>
			</div>
		</section>
	</main>
</template>

<script>
	export default {
		name: "AboutPage",
	};
</script>

<style>
	/* header */

	.main-header {
		display: flex;

		padding-top: 100px;
		margin: 0 5% 1em;
	}
	.main-header > * {
		flex-basis: 50%;
	}
	img {
		max-width: 80%;
		max-height: 500px;
	}
	p {
		max-width: 50ch;
		margin-inline: auto;
	}

	.display {
		font-size: 4em;
		line-height: 0.8;
	}

	#socials {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 10px;
	}

	#socials > * > * {
		width: 40px;
		transition: transform 0.5ms ease-in;
	}

	#socials > *:hover {
		transform: rotate(45deg) scale(1.1);
		transition-duration: 0.3s;
	}

	/* cv sections*/

	.skills-overview {
		background: var(--color-bg);
		display: flex;
		justify-content: center;

		margin: 0;
		padding: 50px;
	}

	.skills {
		flex: 1 1 33%;

		padding: 5%;
		text-align: left;
	}
	.skills > * {
		list-style: none;
	}

	/* footer */

	.links {
		font-size: 32px;
		font-weight: Bold;
		display: flex;
		flex-direction: column;
		width: max-content;
		justify-content: center;
		align-content: baseline;
		gap: 1rem;
		text-align: left;
		margin: 5em auto;
	}
	.links > * > * {
		color: var(--color-text-3);
		text-decoration: none;
		display: inline-block;
		transition: transform 0.2s ease;
	}
	.links > * > *:hover {
		transform: translateY(-3px);
		transform: scale(1.2);
	}
	.icons-dark {
		position: relative;
		top: 5px;
		width: 30px;
		transition: transform 0.2s ease;
	}
	@media (prefers-color-scheme: dark) {
		.icons-dark {
			background: var(--color-primary-85);
			outline: solid;
		}
	}

	.icons-dark:hover {
		transform: translateY(-5px);
	}

	/***************/
	/* Tablet size */
	/***************/

	@media only screen and (max-width: 900px) {
		/* header */

		.main-header {
			flex-direction: column;
			text-align: left;
			gap: 2em;
			padding: 0;
			margin: 0;
		}

		img {
			max-height: 100%;
			max-width: 100%;
		}
		p {
			margin-inline: 0;
		}
		#socials {
			margin-block: 2em;
		}

		/* cv section */

		.skills-overview {
			flex-direction: column;
			padding: 1em 0;
			margin: 0;
		}
		.skills {
			width: fit-content;
			padding: 1em;
			margin: 0;
		}
		/* footer */

		.links {
			margin: 1em auto;
		}
	}
</style>
