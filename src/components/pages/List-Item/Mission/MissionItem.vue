<template>
    <article class="card">
        <h5>Mission Id</h5>
        <h4>{{id}}</h4>
        <h5>Is the mission secret?</h5>
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