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
    FooterComponent
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
*{
  font-family: 'Lato', sans-serif;
}
main{
  min-height: 90vh;
  background-color: #f1f1f1;
}
</style>
