<template>
   <nav>
      <span><router-link class="nav-logo" to="/work">GM </router-link></span>

      <ul class="nav-list">

        <li> <router-link class="nav-about" to="/about"> About</router-link></li>
        <li> <router-link class="nav-work" to="/work"> Work</router-link></li>
      
      </ul>
    </nav>

  <router-view v-slot="{ Component }">
    
    <component :is="Component" />
  </router-view>
</template>

<script>


export default {
  name: 'App',
  
}
</script>

<style>
#app {
 font-family: 'Roboto', sans-serif;
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
  margin:  0 5%;
  padding-bottom: 20px;
  border-bottom: 2px double #a9c0ef;
}

.nav-logo{
  font-weight: bold;
  font-size: 72px;
  text-transform: uppercase;
  color: #1e2d48;
  margin: 0;
  text-decoration: none;
}

.nav-list, .nav-about, .nav-work {
  color: #1e2d48;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 20px;
  align-items: base;
  list-style-type: none;
  font-weight: 200;
  font-size: 36px;
  padding-bottom: 1rem;
  text-decoration: none;
  text-transform: lowercase;
  margin: 0;
  padding-top: 5px;
}
.nav-about:hover, .nav-work:hover{
 
  text-decoration-line: underline;
  transition-duration: 500ms;
  
  color:burlywood;
}


</style>
