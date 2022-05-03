<template>
    <section>
        <weapon-item v-for="(mission, i) in missions"
        :key="i"

        ></weapon-item>
    </section>
</template>

<script>
import WeaponItem from './WeaponItem.vue'
import weaponService from '../../../../services/weaponService.js'

export default {
    setup(){
        const missions = missionService.getAllMissions();

        return { 
            missions 
        }
    },
    components: {
        WeaponItem
    }
}

</script>