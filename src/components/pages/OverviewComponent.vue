<template>
    <aside-component></aside-component>
    <div class="main-parent">
        <soldier-list></soldier-list>  
   </div>
</template>

<script>
import SoldierList from './List-Item/Soldier/SoldierList.vue'
import AsideComponent from '../shared/AsideComponent.vue'

export default {
   components: {
       SoldierList,
       AsideComponent
   },
}

</script>

<style scoped>
.main-parent{
    width: 80%; /*MAIN SECTION SHOULD TAKE 80% OF PAGE WIDTH*/
    height: 90vh;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
}
.card {
    background-color: white;
    padding: 10px;
    margin: 10px;
}
</style>
