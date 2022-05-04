<template>
    <div class="main-parent">

        <div class="display-btns">
            <button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#allSoldiers" aria-expanded="false" aria-controls="collapseExample">
                <p>Konfigurer Soldater</p>
            </button>

            <button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#allMissions" aria-expanded="false" aria-controls="collapseExample">
                <p>Konfigurer Oppdrag</p>
            </button>

            <button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#allWeapons" aria-expanded="false" aria-controls="collapseExample">
                <p>Konfigurer Våpen</p>
            </button>

            <button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#allVehicles" aria-expanded="false" aria-controls="collapseExample">
                <p>Konfigurer Kjøretøy</p>
            </button>
        </div>

        <div>
            <div class="collapse" id="allSoldiers">
                <div class="card card-body">
                    <h3>Soldater</h3>
                    <soldier-component></soldier-component>
                </div>
            </div>

            <div class="collapse" id="allMissions">
                <div class="card card-body">
                    <h3>Oppdrag</h3>
                    <mission-component> </mission-component>   
                </div>
            </div>
            
            <div class="collapse" id="allWeapons">
                <div class="card card-body">
                    <h3>Våpen</h3>
                    <weapon-component> </weapon-component>
                </div>
            </div>

            <div class="collapse" id="allVehicles">
                <div class="card card-body">
                    <h3>Kjøretøy</h3>
                    <vehicle-component> </vehicle-component>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import 'bootstrap/js/dist/collapse' //To enable Bootstrap collapse
import MissionComponent from './DataOptions/MissionComponent.vue'
import SoldierComponent from './DataOptions/SoldierComponent.vue'
import VehicleComponent from './DataOptions/VehicleComponent.vue'
import WeaponComponent from './DataOptions/WeaponComponent.vue'



export default {
   components: {
       MissionComponent,
       SoldierComponent,
       VehicleComponent,
       WeaponComponent
       
     
   },
   
}

</script>

<style scoped>
.main-parent{
    width: 100%;
    min-height: 90vh;
}
.display-btns{
    background-color: gray;
}
.display-btns button{
    margin: 10px;
}
.display-btns button > p{
    margin: 10px
}

</style>
