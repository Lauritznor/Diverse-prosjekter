<template>
    <article class="card">
        <h5>Id</h5>
        <h4>{{id}}</h4>
        <h5>Navn</h5>
        <h4>{{vehicleName}}</h4>
        <hr>
        <h5>Type</h5>
        <h4>{{vehicleType}}</h4>
        <hr>
        <h5>Vekt i KG</h5>
        <h4>{{weight}}</h4>
        <hr>
        <h5>Pansret kjøretøy</h5>
        <h4>{{isArmored}}</h4>
    </article>
</template>

<script>
export default {
    props: {
        id: Number,
        vehicleName: String,
        vehicleType: String,
        weight: Number,
        isArmored: Boolean,
        
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