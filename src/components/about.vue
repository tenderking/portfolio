<template>
  <main>
   

    <section class="about-me">
      <div class="image-and-socials">
<div>

        <img id="profile-pic" src="../assets/profile-pic.png" alt="" />

</div>
        <div id="socials">
          <img
            src="../assets/ant-design_behance-circle-filled.png"
            alt="behance icon"
          />

          <img
            src="../assets/akar-icons_linkedin-fill.png"
            alt="linkedin icon"
          />

          <img
            src="../assets/ant-design_medium-circle-filled.png"
            alt="medium icon"
          />

          <img src="../assets/clarity_email-solid.png" alt="email" />
        </div>
      </div>

      <div class="intro">
        <p>
          I am a data scientist and a UX-designer with a passion for making
          things easy to understand
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

          <li class="skill-normal-text"></li>

          <li class="skill-normal-text">Design thinking</li>
          <li class="skill-normal-text">UX+UI</li>
          <li class="skill-normal-text"></li>
          <li class="skill-normal-text">Machine Learning</li>
          <li class="skill-normal-text">Bayesian Statistics</li>
          <li class="skill-normal-text">Regression</li>
        </ul>
      </div>

      <div class="skills">
        <ul>
          <li class="h2">tools</li>
          <li class="skill-normal-text">Figma, AdobeXD</li>
          <li class="skill-normal-text">HTML , CSS, JS</li>
          <li class="skill-normal-text"></li>
          <li class="skill-normal-text"></li>
          <li class="skill-normal-text">Python, R, Excel</li>
          <li class="skill-normal-text">Tableau, PowerBI</li>
        </ul>
      </div>
    </section>

    <section class="links">
      <div id="my-projects"><img src="" alt="" /> My Projects</div>

      <div id="resume"><img src="" alt="" /> Download Resume</div>

      <div id="email"><img src="" alt="" /> Get in touch</div>
    </section>
  </main>
</template>

<script>
export default {
  name: "About",
};
</script>

<style>


.about-me {
  display: flex;  
 
  padding-top: 100px;
  margin:  0 5%;
 
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

#socials > img {
  margin: 0;

  
width: 40px;
}

.image-and-socials {
  margin: 0;
 
  width: 50%;
}

#profile-pic {
  width: 250px;
  padding: 1rem;
}

.intro {
   width: 50%;
 
  text-align: left;
 }

p {
  font-size: 36px;    
  padding: 2rem;
  line-height: 1.5;
  bottom: 10px;
}


.skills-overview {
  background: #2c81df;
  display: flex;
  justify-content: center;

  margin: 0;
  padding: 50px;
}

.skills {
  flex: 1 1 33%;
  margin: auto;
  margin-top: 0px;
  padding: 5%;
  text-align: left;
}

.h2 {
  width: max-content;
  font-weight: bold;
  font-size: 24px;
  line-height: 56px;
  color: #a9c0ef;
  margin: 0;
  margin-bottom: 80px;
}

.skill-type {
  font-weight: bold;
  font-size: 24px;
  color: #1e2d48;
  width: max-content;
  margin: 0;
}

.h3 {
  color: #1e2d48;
  margin: 0;
  font-weight: bold;
  font-size: 18px;
  width: max-content;
 
  
}

.skill-normal-text {
  color: #1e2d48;
  width: max-content;
  margin: 0;
  font-size: 18px;
}

.italic-date {
  color: #1e2d48;
  width: max-content;
  margin: 0;
  font-style: italic;
  font-weight: 300;
  font-size: 14px;
  margin-bottom: 100px;
}
.links {
  font-size: 36px;
  font-weight: Bold;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  width: max-content;
  justify-content: center;
  gap: 1rem;
  text-align: left;

}
@media only screen and (max-width: 600px) {
  span{
    font-size: 64px;
  }
  .nav-list,
li{
  font-size: 24px;
}
p{
  font-size: 24px;
}
.about-me{
  flex-direction: column;
}
.intro{
  width:100%;
}

.image-and-socials {
  width: 100%;
}
.skills-overview {
  flex-direction: column;
  margin-top: 0;
}
.skills, .skill-normal-text, .italic-date, li, .h3, .h2{
  margin: 0;
}
.skill-normal-text, .italic-date{
  list-style: circle;
}
.h3{
 width:fit-content
}

}
</style>
