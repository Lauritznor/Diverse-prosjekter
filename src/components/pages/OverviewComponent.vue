<template>
    <aside-component></aside-component>
    <div class="main-parent">
        <h3 style="margin: 10px;"> Soldater </h3>
        <soldier-list></soldier-list>  
        <h3 style="margin: 10px;"> Oppdrag </h3>
        <mission-list></mission-list>
        <h3 style="margin: 10px;"> Kjøretøy </h3>
        <vehicle-list></vehicle-list>
        <h3 style="margin: 10px;"> Våpen </h3>
        <weapon-list></weapon-list>
   </div>
</template>

<script>
import SoldierList from './List-Item/Soldier/SoldierList.vue'
import WeaponList from './List-Item/Weapon/WeaponList.vue'
import MissionList from './List-Item/Mission/MissionList.vue'
import VehicleList from './List-Item/Vehicle/VehicleList.vue'
import AsideComponent from '../shared/AsideComponent.vue'

export default {
   components: {
       SoldierList,
       WeaponList,
       VehicleList,
       MissionList,
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
</style>
