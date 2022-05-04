<template>
    <article class="card">
        <h5>Mission Id</h5>
        <h4>{{id}}</h4>
        <h5>Er oppdraget hemmelig?</h5>
        <h4>{{secret}}</h4>
        <hr>
        <h5>Oppdragsbeskrivelse</h5>
        <h4>{{missionDescription}}</h4>
        <hr>
        <h5>Oppdragets lokalisjon</h5>
        <h4>{{missionLocation}}</h4>
    </article>
</template>

<script>
export default {
    props: {
        id: Number,
        secret: Boolean,
        missionDescription: String,
        missionLocation: String
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