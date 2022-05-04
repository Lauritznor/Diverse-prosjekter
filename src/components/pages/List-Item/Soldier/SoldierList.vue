<template>
    <section class="flex-item">
        <soldier-item v-for="(soldier, i) in soldiers"
        :key="i"
            :id="soldier.id"
            :firstName="soldier.firstName"
            :lastName="soldier.lastName"
            :age="soldier.age"
            :rank="soldier.rank"
            :soldierType="soldier.soldierType"
        ></soldier-item>
    </section>
</template>

<script>
import SoldierItem from './SoldierItem.vue'
import soldierService from '../../../../services/soldierService.js'

export default {
    setup(){
        const soldiers = soldierService.getAllSoldiers();

        return { 
            soldiers 
        }
    },
    components: {
        SoldierItem
    }
}

</script>
<style scoped>
    .flex-item{
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        margin: 10px;
    }
</style>