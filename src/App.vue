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
main{
  min-height: 800px;
  background-color: #f1f1f1;
}
</style>
