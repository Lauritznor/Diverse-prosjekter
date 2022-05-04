<template>
<div class="flex-column">
    <div class="display">
        
        <div class="info">
            <p>Trykk på knappene for å åpne og lukke oversikten for de ulike dataene i databasen.</p>
        </div>

        <div class="display-btns">
            <button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#allSoldiers" aria-expanded="false" aria-controls="collapseExample">
                <p>Soldater</p>
            </button>

            <button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#allMissions" aria-expanded="false" aria-controls="collapseExample">
                <p>Oppdrag</p>
            </button>

            <button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#allWeapons" aria-expanded="false" aria-controls="collapseExample">
                <p>Våpen</p>
            </button>

            <button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#allVehicles" aria-expanded="false" aria-controls="collapseExample">
                <p>Kjøretøy</p>
            </button>
        </div>

    </div>
    <div class="main-parent">

        <div>
            <div class="collapse" id="allSoldiers">
                <div>
                    <h3>Soldater</h3>
                    <soldier-list></soldier-list> 
                </div>
            </div>

            <div class="collapse" id="allMissions">
                <div>
                    <h3>Oppdrag</h3>
                    <mission-list></mission-list>
                </div>
            </div>
            
            <div class="collapse" id="allWeapons">
                <div>
                    <h3>Våpen</h3>
                    <weapon-list></weapon-list>
                </div>
            </div>

            <div class="collapse" id="allVehicles">
                <div>
                    <h3>Kjøretøy</h3>
                    <vehicle-list></vehicle-list>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import 'bootstrap/js/dist/collapse' //To enable Bootstrap collapse
import 'bootstrap-icons/font/bootstrap-icons.css'
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
}

</script>

<style scoped>
.main-parent{
    width: 100%;
    height: 90vh;
}
.display{
    background-color: #aeaeae;
}
.display-btns{
    margin: 0px;
}
.display-btns button{
    margin: 5px;
}
.info p{
    padding: 5px;
    margin: 0px;
}
.display-btns button > p{
    margin: 5px;        
}
svg.bi-info-circle-fill{
    height: 50px;
    width: 50px;
}
.flex-column{
    display: flex;
    flex-direction: column;
    width: 100%;
}
</style>
