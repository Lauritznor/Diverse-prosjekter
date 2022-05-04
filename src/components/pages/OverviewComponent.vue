<template>
    <aside-component></aside-component>
    <div class="main-parent">
        <input @click="test" type="button" value="click">

        <div>

<p>
  <a class="btn btn-primary" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a>
  <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button>
  <button class="btn btn-primary" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</button>
</p>
<div class="row">
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample1">
      <div class="card card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      </div>
    </div>
  </div>
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample2">
      <div class="card card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      </div>
    </div>
  </div>
</div>

        </div>

        <soldier-list class="soldier-list"></soldier-list>  
        <mission-list></mission-list>
        <vehicle-list></vehicle-list>
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
   setup(){
       const test = () =>{

       }
       return {test}
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
.soldier-list{
    display: none;
}
</style>
