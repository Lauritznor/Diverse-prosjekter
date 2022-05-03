<template>
    <aside-component></aside-component>
    <div class="main-parent">
        <overview-list></overview-list>  
   </div>
</template>

<script>
import OverviewList from './OverviewList.vue'
import AsideComponent from '../shared/AsideComponent.vue'

export default {
   components: {
       OverviewList,
       AsideComponent
   }
}
</script>

<style scoped>
.main-parent{
    width: 80%; /*MAIN SECTION SHOULD TAKE 80% OF PAGE WIDTH*/
    height: 90vh;
    overflow-y: scroll;
    border: 2px solid red;
    display: flex;
    flex-direction: column;
}
</style>
