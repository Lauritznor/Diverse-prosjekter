<template>
    <section class="flex-item">
        <weapon-item v-for="(weapon, i) in weapons"
        :key="i"
        :id="weapon.id"
        :weaponName="weapon.weaponName"
        :weaponCategory="weapon.weaponCategory"
        :magazineSize="weapon.magazineSize"
        :caliber="weapon.caliber"
        :manufacturer="weapon.manufacturer"
        ></weapon-item>
    </section>
</template>

<script>
import WeaponItem from './WeaponItem.vue'
import weaponService from '../../../../services/weaponService.js'

export default {
    setup(){
        const weapons = weaponService.getAllWeapons();

        return { 
            weapons 
        }
    },
    components: {
        WeaponItem
    }
}
</script>
<style scoped>
    .flex-item{
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
    }
</style>