<template>
    <section>
        <overview-item v-for="(soldier, i) in soldiers"
        :key="i"
            :id="soldier.id"
            :firstName="soldier.firstName"
            :lastName="soldier.lastName"
            :age="soldier.age"
            :rank="soldier.rank"
            :soldierType="soldier.soldierType"
        ></overview-item>
    </section>
</template>

<script>
import OverviewItem from './OverviewItem.vue'
import soldierService from '../../services/soldierService.js'

export default {
    setup(){
        const soldiers = soldierService.getAll();

        return { 
            soldiers 
        }
    },
    components: {
        OverviewItem
    }
}

</script>