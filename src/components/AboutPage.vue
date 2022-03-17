<template>
	<main>
		<section class="about-me">
			<div class="image-and-socials">
				<div>
					<img id="profile-pic" src="../assets/outdoor-pic.jpg" alt="" />
				</div>
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

			<div class="intro">
				<p>
					I am a tech engineer with a passion for digital-development. My goal
					is to make technology easy to understand. I have a background in
					applied in data science and physics, and right now I'm current
					learning and improving my web development and ux-design skills
					together . I'm open to have a chat, or a coffee.
				</p>
			</div>
		</section>

		<section class="skills-overview">
			<div class="skills">
				<ul class="skill-list">
					<li class="h2">Education</li>

					<li class="skill-type">UX-Design</li>

					<li class="h3">Coursera</li>

					<li class="skill-normal-text">Google UX-design</li>

					<li class="italic-date">April 2021</li>

					<li class="skill-type">Data Science</li>

					<li class="h3">Norwegian Arctic University</li>

					<li class="skill-normal-text">MSc of Tech.</li>

					<li class="italic-date">October 2019</li>
				</ul>
			</div>

			<div class="skills">
				<ul>
					<li class="h2">Skills</li>

					<li class="skill-normal-text">Design thinking</li>
					<li class="skill-normal-text">UX+UI</li>
					<li class="skill-normal-text"></li>
					<p class="italic-date"></p>

					<li class="skill-normal-text">Machine Learning</li>
					<li class="skill-normal-text">Bayesian Statistics</li>
					<li class="skill-normal-text">Regression</li>
				</ul>
			</div>

			<div class="skills">
				<ul>
					<li class="h2">Tools</li>
					<li class="skill-normal-text">Figma, AdobeXD</li>
					<li class="skill-normal-text">HTML , CSS, JS</li>
					<li class="skill-normal-text"></li>

					<p class="italic-date"></p>
					<li class="skill-normal-text">Python, R, Excel</li>
					<li class="skill-normal-text">Tableau, PowerBI</li>
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
	.about-me {
		display: flex;

		padding-top: 100px;
		margin: 0 5%;
	}

	#socials {
		display: flex;

		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 10px;
		margin-top: 100px;
		margin-bottom: 100px;
	}

	#socials > * > * {
		margin: 0;
		width: 40px;
		display: inline-block;
		transition: transform 0.5ms ease-in;
	}

	#socials > *:hover {
		transform: rotate(45deg) scale(1.1);
		transition-duration: 0.3s;
	}

	.image-and-socials {
		margin: 0;

		width: 50%;
	}

	#profile-pic {
		max-width: 90%;
		padding: 1rem;
	}

	.intro {
		width: 50%;
		text-align: left;
		margin-bottom: 4em;
		display: grid;
		place-content: center;
	}

	p {
		font-size: 24px;
		padding: 1rem;
		line-height: 1.5;
		margin: 0;
		padding-top: 0;
	}

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

	.h2 {
		width: max-content;
		font-weight: bold;
		font-size: 24px;
		line-height: 56px;
		color: var(--color-text2);
		margin: 0;
		margin-bottom: 80px;
	}

	.skill-type {
		font-weight: bold;
		font-size: 24px;
		color: var(--color-text-2);
		width: max-content;
		margin: 0;
	}

	.h3 {
		color: var(--color-text-3);
		margin: 0;
		font-weight: bold;
		font-size: 18px;
		width: max-content;
	}

	.skill-normal-text {
		color: var(--color-text-3);
		width: max-content;
		margin: 0;
		font-size: 18px;
	}

	.italic-date {
		color: var(--color-text-3);
		width: max-content;
		margin: 0;
		font-style: italic;
		font-weight: 300;
		font-size: 14px;
		margin-bottom: 50px;
	}
	.links {
		font-size: 36px;
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
	.icons-dark {
		position: relative;
		top: 5px;
		width: 40px;
	}
	.links > * > * {
		color: var(--color-text-3);
		text-decoration: none;
		display: inline-block;
		transition: transform 0.2s ease;
	}

	.icons-dark {
		width: 30px;
		transition: transform 0.2s ease;
	}
	.links > * > *:hover {
		transform: translateY(-3px);
		transform: scale(1.2);
	}
	.icons-dark:hover {
		transform: translateY(-5px);
	}
	@media only screen and (max-width: 600px) {
		span {
			font-size: 64px;
		}
		.nav-list,
		li {
			font-size: 24px;
		}
		p {
			font-size: 24px;
		}
		.about-me {
			flex-direction: column;
		}
		#socials {
			margin-block: 1em;
		}
		.intro {
			width: 100%;
		}

		.image-and-socials {
			width: 100%;
		}
		.skills-overview {
			flex-direction: column;
			margin-top: 0;
		}
		.skills,
		.skill-normal-text,
		.italic-date,
		li,
		.h3,
		.h2 {
			margin: 5% 0;
		}

		.italic-date {
			margin-bottom: 20px;
		}
		.h3 {
			width: fit-content;
		}
		.links > * {
			font-size: 24px;
		}

		.icons-dark {
			width: 30px;
		}
	}
</style>
