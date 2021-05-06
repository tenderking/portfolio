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
  name: "App"
};
</script>

<style>
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: auto;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 20px;
  margin: 0 5%;
  padding-bottom: 20px;
  border-bottom: 2px double #a9c0ef;
}

.nav-logo {
  font-weight: bold;
  font-size: 72px;
  text-transform: uppercase;
  color: #1e2d48;
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
  color: #1e2d48;
  text-decoration: none;
  font-weight: 200;
  font-size: 36px;
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

  background: burlywood;
}
.nav-about:active,
.nav-work:active {
  color: burlywood;
}
</style>
