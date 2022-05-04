<template>
    <section class="data-section">
        <add-data></add-data>
        <article class="data-content">
            <div>

                <div class="menu">
                    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#img-upload" aria-expanded="false" aria-controls="collapseExample">
                        <p>Last opp bilde</p>
                    </button>
                    <button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#edit" aria-expanded="false" aria-controls="collapseExample">
                        <p>Endre/opprett</p>
                    </button>
                    <button class="btn btn-danger " type="button" data-bs-toggle="collapse" data-bs-target="#delete" aria-expanded="false" aria-controls="collapseExample">
                        <p>Slett</p>
                    </button>
                </div>


                <div class="content-flex">
                    <!--UPLOAD-->
                    <div id="img-upload" class="content-card">
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
                    <div id="edit" class="content-card">
                        <h2>ENDRE/OPPRETT</h2> <hr>
                        <h3>Hent soldat med id</h3>
                        <p>Id opprettes av database dersom man ønsker å opprette ny soldat</p>
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
                        <input @click="changeSoldier" type="button" value="Endre" style="margin: 2px;">
                        <input @click="addNewSoldier" type="button" value="Opprett" style="margin: 2px;">
                    </div>

                    <!--DELETE-->
                    <div id="delete" class="content-card">
                        <h2>SLETT</h2>
                        <hr>
                        <h3>Hent person med id</h3>
                        <input v-model="deleteId" type="text"> 
                        <br><br>
                        <input @click="deleteASoldier" type="button" value="Slett">
                    </div>

                </div>
            </div>
        </article>
    </section>
</template>
<script>
import soldierService from '../../../services/soldierService.js'
import { reactive, toRefs } from 'vue'

export default {
    setup(){

        // SOLDIERFORM - SKAFFER ALLE V-MODELS
        const soldierForm = reactive({  
            id: "",
            firstName: "",
            lastName: "",
            age: "",
            soldierType: "",
            rank: "",
            deleteId: "",
        });

        //GET
        const getSoldier = async () => {
            const soldier = await soldierService.getSoldierById( soldierForm.id );

            soldierForm.id = soldier.id;
            soldierForm.firstName = soldier.firstName;
            soldierForm.lastName = soldier.lastName;
            soldierForm.age = soldier.age;
            soldierForm.soldierType = soldier.soldierType;
            soldierForm.rank = soldier.rank;
        }

        //PUT - ENDRE SOLDIER INFO
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
            alert("Database endret!")
        }

        //POST - LEGG TIL NY PERSON
        const addNewSoldier = async () => {
            const newSoldier = {
                firstName: soldierForm.firstName,
                lastName: soldierForm.lastName,
                age: parseInt( soldierForm.age ),
                soldierType: soldierForm.soldierType,
                rank: soldierForm.rank
            }
            const stringifiedSoldier = JSON.stringify( newSoldier);

            soldierService.addSoldier( newSoldier );

            alert("Database endret! Lagt til: " + stringifiedSoldier)
        }

        //DELETE - SLETT PERSON
        const deleteASoldier = async () => {

            alert(`Du har nå slettet en soldat fra databasen med id: ${soldierForm.deleteId} og navn ${soldierForm.firstName + " " + soldierForm.lastName}`)
            soldierService.deleteSoldier( soldierForm.deleteId );

        }

        //RETURN
        return{

            getSoldier,
            changeSoldier,
            deleteASoldier,
            addNewSoldier,
            ...toRefs( soldierForm )
        } 
    },
}
</script>
<style scoped>
.menu {
    padding: 10px;
    margin: 5px;
    margin-bottom: 15px;
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