<template>
    <section class="data-section">
        <add-data></add-data>
        <article class="data-content">
                 <div>
                <div class="menu">
                    <h4>Meny</h4>
                    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#mission-img-upload" aria-expanded="false" aria-controls="collapseExample">
                        <p>Last opp bilde</p>
                    </button>
                    <button class="btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#mission-edit" aria-expanded="false" aria-controls="collapseExample">
                        <p>Endre</p>
                    </button>
                    <button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#mission-add" aria-expanded="false" aria-controls="collapseExample">
                        <p>Opprett</p>
                    </button>
                    <button class="btn btn-danger " type="button" data-bs-toggle="collapse" data-bs-target="#mission-delete" aria-expanded="false" aria-controls="collapseExample">
                        <p>Slett</p>
                    </button>
                </div>
                <div class="content-flex">
                    <!--UPLOAD-->
                    <div id="vehicle-img-upload" class="content-card">
                        <h2>BILDEOPPLASTING</h2>
                        <hr>
                        <h3>Navn</h3>
                        <input v-model="veichleName" type="text">

                        <h3>Type</h3>
                        <input v-model="veichleType" type="text">

                        <h3>Vekt</h3>
                        <input v-model="weight" type="number">

                        <h3> Pansret: </h3>
                        <input v-model="isArmoured" type="boolean">
                        <div>
                            <input @changes="setImage" type="file">
                        </div>
                        <input @click="saveVehicle" type="button" value="Lagre bildet">
                    </div>

                    <!--PUT-->
                    <div id="mission-edit" class="content-card">
                        <h2>ENDRE</h2>
                        <hr>
                        <h3>Hent kjøretøy med navn</h3>
                        <input type="number">
                        <h3>Kjøretøytype</h3>
                        <input type="string">
                        <h3>Er kjøretøyet pansret</h3>
                        <input type="string">
                        <h3>Kjøretøy vekt</h3>
                        <input type="number">
                        <br><br>
                        <input type="button" value="Endre">
                    </div>

                    <!--POST-->
                    <div id="mission-add" class="content-card">
                        <h2>OPPRETT</h2>
                        <hr>
                        <h3>Kjøretøy Navn</h3>
                        <input type="string">
                        <h3>Kjøretøy type</h3>
                        <input type="string">
                        <h3>Kjøretøy vekt</h3>
                        <input type="number">
                        <h3>Er kjøretøy pansret (true = ja / false = nei)</h3>
                        <input type="boolean">
                        <br><br>
                        <input type="button" value="Endre">
                    </div>

                    <!--DELETE-->
                    <div id="mission-delete" class="content-card">
                        <h2>SLETT</h2>
                        <hr>
                        <h3>Slett kjøretøy med navn</h3>
                        <input type="text">
                        <br><br>
                        <input type="button" value="Slett">
                    </div>
                </div>

            </div>
            <div>
             
            </div>
        </article>
    </section>
</template>
<script>
import AddData from '../AddData.vue'

export default {
    components: {
        AddData
    }
}
</script>
<style scoped>
.menu {
    padding: 10px;
    margin: 5px;
    margin-bottom: 15px;
    background-color: #cfcfcf;
    border-bottom: 6px solid #b4b3b3;
}
.menu button {
    margin: 5px;
}
.menu button > p {
    margin: 3px;
}
.content-card{
    background-color: #cfcfcf;
    margin: 5px;
    padding: 7px;
    width: 350px;
}
.content-flex{
    display: flex;
}
</style>