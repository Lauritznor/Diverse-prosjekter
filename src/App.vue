<template>
  <nav-component></nav-component>
  <main>
    <router-view></router-view>
  </main>
  <footer-component></footer-component>

</template>

<script>
import NavComponent from './components/shared/NavComponent.vue'
import FooterComponent from './components/shared/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    NavComponent,
    FooterComponent,
    
  }
}
</script>

<style>

/* ROBOTO - HOVED FONT FOR HELE NETTSIDEN */
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap');
*{
 font-family: 'Roboto', sans-serif;
}
/* MIN HEIGHT FOR AT DEN SKAL DEKKE HELE SIDEN */
main{
  min-height: 90vh;
  background-color: #f1f1f1;
  display: flex;
}
</style>
