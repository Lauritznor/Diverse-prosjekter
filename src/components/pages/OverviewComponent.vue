<template>
    <div class="main-parent">

        <div class="display-btns">
            <button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#allSoldiers" aria-expanded="false" aria-controls="collapseExample">
                <p>Soldater</p>
            </button>

            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#allMissions" aria-expanded="false" aria-controls="collapseExample">
                <p>Oppdrag</p>
            </button>

            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#allWeapons" aria-expanded="false" aria-controls="collapseExample">
                <p>Våpen</p>
            </button>

            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#allVehicles" aria-expanded="false" aria-controls="collapseExample">
                <p>Kjøretøy</p>
            </button>
        </div>

        <div>
            <div class="collapse" id="allSoldiers">
                <div class="card card-body">
                    <h3>Soldater</h3>
                    <soldier-list ></soldier-list> 
                </div>
            </div>

            <div class="collapse" id="allMissions">
                <div class="card card-body">
                    <h3>Oppdrag</h3>
                    <mission-list></mission-list>
                </div>
            </div>
            
            <div class="collapse" id="allWeapons">
                <div class="card card-body">
                    <h3>Våpen</h3>
                    <weapon-list></weapon-list>
                </div>
            </div>

            <div class="collapse" id="allVehicles">
                <div class="card card-body">
                    <h3>Kjøretøy</h3>
                    <vehicle-list></vehicle-list>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import 'bootstrap/js/dist/collapse' //To enable Bootstrap collapse
import SoldierList from './List-Item/Soldier/SoldierList.vue'
import WeaponList from './List-Item/Weapon/WeaponList.vue'
import MissionList from './List-Item/Mission/MissionList.vue'
import VehicleList from './List-Item/Vehicle/VehicleList.vue'

export default {
   components: {
       SoldierList,
       WeaponList,
       VehicleList,
       MissionList,
   },
   setup(){
       const test = () =>{

       }
       return {test}
   },
   
}

</script>

<style scoped>
.main-parent{
    width: 100%;
    height: 90vh;
    background-color: blue;
}
</style>
