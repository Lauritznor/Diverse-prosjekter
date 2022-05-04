<template>
    <section>
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
.card {
    background-color: white;
    padding: 10px;
    margin: 10px;
}
</style>