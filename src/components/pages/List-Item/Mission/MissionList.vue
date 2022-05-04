<template>
    <section class="flex-item">
        <mission-item v-for="(mission, i) in missions"
        :key="i"
            :id="mission.id"
            :secret="mission.secret"
            :missionDescription="mission.missionDescription"
            :missionLocation="mission.missionLocation"
        ></mission-item>
    </section>
</template>

<script>
import MissionItem from './MissionItem.vue'
import missionService from '../../../../services/missionService.js'

export default {
    setup(){
        const missions = missionService.getAllMissions();

        return { 
            missions 
        }
    },
    components: {
        MissionItem
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