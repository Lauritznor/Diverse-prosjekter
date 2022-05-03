<template>
    <section>
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
import MissionItem from './MissionItem.vue'
import soldierService from '../../../../services/soldierService.js'

export default {
    setup(){
        const soldiers = soldierService.getAll();

        return { 
            soldiers 
        }
    },
    components: {
        MissionItem
    }
}

</script>