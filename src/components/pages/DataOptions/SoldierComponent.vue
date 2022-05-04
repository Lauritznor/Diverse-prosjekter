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
                    <div id="mission-img-upload" class="content-card">
                        <h2>BILDEOPPLASTING</h2>
                        <hr>
                        <h3>Beskrivelse</h3>
                        <input v-model="beskrivelse" type="text">

                        <h3>Lokasjon</h3>
                        <input v-model="lokasjon" type="text">

                        <h3>Oppdragsnummer</h3>
                        <input v-model="oppdragsnummer" type="number">
                        <div>
                            <input @changes="setImage" type="file">
                        </div>
                        <input @click="saveMission" type="button" value="Lagre bildet">
                    </div>

                    <!--PUT-->
                    <div id="mission-edit" class="content-card">
                        <h2>ENDRE</h2> <hr>
                        <h3>Hent soldat med id</h3>
                        <input v-model="id" type="text">
                        <input @click="getSoldier" type="button" value="Hent"><br><br>
                        
                        <h3>Fornavn</h3>
                        <input v-model="firstName" type="text">
                        <h3>Etternavn</h3>
                        <input v-model="lastName" type="text">
                        <h3>Alder</h3>
                        <input v-model="age" type="number">
                        <h3>Soldat type</h3>
                        <input v-model="soldierType" type="text">
                        <h3>Rank</h3>
                        <input v-model="rank" type="text">


                        <br><br>
                        <input @click="changeSoldier" type="button" value="Endre">
                    </div>

                    <!--POST-->
                    <div id="mission-add" class="content-card">
                        <h2>OPPRETT</h2>
                        <p>Id - Opprettes av databasen</p>
                        <hr>
                        <h3>Oppdrag lokalisasjon</h3>
                        <input type="number">
                        <h3>Oppdragsbeskrivelse</h3>
                        <input type="number">
                        <br><br>
                        <input type="button" value="Endre">
                    </div>

                    <!--DELETE-->
                    <div id="mission-delete" class="content-card">
                        <h2>SLETT</h2>
                        <hr>
                        <h3>Hent oppdrag med id</h3>
                        <input type="text">
                        <br><br>
                        <input type="button" value="Slett">
                    </div>
                </div>
            </div>
        </article>
    </section>
</template>
<script>
import soldierService from '../../../services/soldierService.js'
import AddData from '../AddData.vue'
import { reactive, toRefs } from 'vue'

export default {
    setup(){

        const soldierForm = reactive({  
            id: "",
            firstName: "",
            lastName: "",
            age: "",
            soldierType: "",
            rank: "",
        });

        const getSoldier = async () => {
            const soldier = await soldierService.getSoldierById( soldierForm.id );

            soldierForm.id = soldier.id;
            soldierForm.firstName = soldier.firstName;
            soldierForm.lastName = soldier.lastName;
            soldierForm.age = soldier.age;
            soldierForm.soldierType = soldier.soldierType;
            soldierForm.rank = soldier.rank;
        }

        const changeSoldier = async () => {

            const editedSoldier = {
                id: parseInt( soldierForm.id ),
                firstName: soldierForm.firstName,
                lastName: soldierForm.lastName,
                age: parseInt( soldierForm.age ),
                soldierType: soldierForm.soldierType,
                rank: soldierForm.rank
            }

            soldierService.putSoldier( editedSoldier );
        }

        return{
            getSoldier,
            changeSoldier,
            ...toRefs( soldierForm )
        } 
    },
    components: {
        AddData,
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