<template>
    <article class="card">
        <h5>Soldatnummer</h5>
        <h4>{{id}}</h4>
        <h5>Navn</h5>
        <h4>{{firstName}} {{lastName}}</h4>
        <hr>
        <h5>Alder</h5>
        <h4>{{age}}</h4>
        <hr>
        <h5>Rank</h5>
        <h4>{{rank}}</h4>
        <hr>
        <h5>Stilling</h5>
        <h4>{{soldierType}}</h4>
    </article>
</template>

<script>
export default {
    props: {
        id: Number,
        firstName: String,
        lastName: String,
        age: Number,
        soldierType: String,
        rank: String
    }
}
</script>

<style scoped>
.card {
    background-color: #f1f1f1;
    padding: 10px;
    margin: 10px;
}
</style>