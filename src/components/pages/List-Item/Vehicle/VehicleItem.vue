<template>
    <article class="card">
        <h5>Id</h5>
        <h4>{{id}}</h4>
        <h5>Navn</h5>
        <h4>{{veichleName}}</h4>
        <hr>
        <h5>Type</h5>
        <h4>{{veichleType}}</h4>
        <hr>
        <h5>Vekt i KG</h5>
        <h4>{{weight}}</h4>
        <hr>
        <h5>Pansertype</h5>
        <h4 v-if="isArmoured === true">Pansret</h4>
        <h4 v-else>Ikke Pansret</h4>
    </article>
</template>

<script>
export default {
    props: {
        id: Number,
        veichleName: String,
        veichleType: String,
        weight: Number,
        isArmoured: Boolean,
        
    }
}
</script>
<style scoped>
.card {
    background-color: #f1f1f1;
    padding: 10px;
    margin: 10px;
    width: 300px;
}
</style>