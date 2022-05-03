<template>
    <section>
        <vehicle-item v-for="(vehicle, i) in vehicles"
        :key="i"
            :id="vehicle.id"
            :vehicleName="vehicle.vehicleName"
            :vehicleType="vehicle.vehicleType"
            :weight="vehicle.weight"
            :isArmored="vehicle.isArmored"
            
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