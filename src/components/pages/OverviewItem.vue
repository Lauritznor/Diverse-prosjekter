<template>
    <article class="soldier-card">
        <h5>Navn</h5>
        <h4>{{firstName}} {{lastName}}</h4>
        <hr>
        <h5>Soldatnummer</h5>
        <h4>{{serviceNumber}}</h4>
        <hr>
        <h5>Rank</h5>
        <h4>{{rank}}</h4>
        <hr>
        <h5>Stilling</h5>
        <h4>{{soldierType}}</h4>
        <hr>
        <h5>Forsvarsgren</h5>
        <h4>{{branchName}}</h4>

        <!-- legg til div med våpen -->

        <!-- legg til div med mission -->

    </article>
</template>

<script>
export default {
    props: {
        firstName: String,
        lastName: String,
        serviceNumber: Number,
        rank: String,
        soldierType: String,
        branchName: String
    }
}
</script>

<style scoped>
.soldier-card {
    background-color: white;
    padding: 10px;
    margin: 10px;
    border: 2px solid green;
}
</style>