<template>
    <div class="main-parent">

        <div class="display-btns">
            <div class="yay">
                <i class="fa fa-info-circle fa-5x" aria-hidden="true"></i>
            </div>
            <button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#allSoldiers" aria-expanded="false" aria-controls="collapseExample">
                <p>Soldater</p>
            </button>

            <button class="btn btn-success" type="button" data-bs-toggle="collapse tooltip" data-bs-target="#allMissions" aria-expanded="false" aria-controls="collapseExample" data-bs-placement="bottom" title="Click">
                <p>Oppdrag</p>
            </button>

            <button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#allWeapons" aria-expanded="false" aria-controls="collapseExample">
                <p>Våpen</p>
            </button>

            <button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#allVehicles" aria-expanded="false" aria-controls="collapseExample">
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
.display-btns{
    background-color: gray;
}
.display-btns button{
    margin: 10px;
}
.display-btns button > p{
    margin: 10px
}
svg.bi-info-circle-fill{
    height: 50px;
    width: 50px;
}
.yay{
    height: 200px;
    width: 200px;
}
.yay i{
    height: 200px;
}
</style>
