<template>
    <section>
        <overview-item v-for="(soldier, i) in soldiers"
        :key="i"
            :firstName="soldier.firstName"
            :lastName="soldier.lastName"
            :serviceNumber="soldier.serviceNumber"
            :rank="soldier.rank"
            :soldierType="soldier.soldierType"
            :branchName="soldier.branchName"
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