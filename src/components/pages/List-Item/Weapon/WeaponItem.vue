<template>
    <article class="col-md-3 card">
        <h5>Våpen Id</h5>
        <h4>{{id}}</h4>
        <hr>
        <h5>Våpen Navn</h5>
        <h4>{{weaponName}}</h4>
        <hr>
        <h5>Våpen Kategori</h5>
        <h4>{{weaponCategory}}</h4>
        <hr>
        <h5>Kuler i Magasinet</h5>
        <h4>{{magazineSize}}</h4>
        <hr>
        <h5>Kaliber</h5>
        <h4>{{caliber}}mm</h4>
        <hr>
        <h5>Produsent</h5>
        <h4>{{manufacturer}}</h4>
        <hr>
    </article>
</template>

<script>
export default {
    props: {
        id: Number,
        weaponName: String,
        weaponCategory: String,
        magazineSize: Number,
        caliber: Number,
        manufacturer: String

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