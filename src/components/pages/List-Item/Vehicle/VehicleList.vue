<template>
    <section class="flex-item">
        <vehicle-item v-for="(vehicle, i) in vehicles"
        :key="i"
            :id="vehicle.id"
            :veichleName="vehicle.veichleName"
            :veichleType="vehicle.veichleType"
            :weight="vehicle.weight"
            :isArmoured="vehicle.isArmoured"
        ></vehicle-item>
    </section>
</template>

<script>
import VehicleItem from './VehicleItem.vue'
import vehicleService from '../../../../services/vehicleService.js'

export default {
    setup(){
        const vehicles = vehicleService.getAllVehicles();

        return { 
            vehicles 
        }
    },
    components: {
        VehicleItem
    }
}

</script>
<style scoped>
    .flex-item{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
</style>