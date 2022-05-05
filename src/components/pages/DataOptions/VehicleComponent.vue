<template>
    <section class="data-section">
        <add-data></add-data>
        <article class="data-content">
                 <div>
                <div class="menu">
                    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#mission-img-upload" aria-expanded="false" aria-controls="collapseExample">
                        <p>Last opp bilde</p>
                    </button>
                    <button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="edit" aria-expanded="false" aria-controls="collapseExample">
                        <p>Endre/opprett</p>
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
                        <input type="text">

                        <h3>Type</h3>
                        <input type="text">

                        <h3>Vekt</h3>
                        <input type="number">

                        <h3> Pansret: </h3>
                        <input type="boolean">
                        <div>
                            <input @changes="setImage" type="file">
                        </div>
                        <input @click="saveVehicle" type="button" value="Lagre bildet">
                    </div>

                    <!--PUT-->
                    <div id="edit" class="content-card">
                        <h2>ENDRE/OPPRETT</h2> <hr>
                        <h3>Hent kjøretøy med id</h3>
                        <p>Id opprettes av database dersom man ønsker å opprette nytt kjøretøy</p>
                        <input v-model="id" type="text">
                        <input @click="getVehicle" type="button" value="Hent"><br><br>
                        
                        <h3>Navn</h3>
                        <input v-model="veichleName" type="text">
                        <h3>Type</h3>
                        <input v-model="veichleType" type="text">
                        <h3>Vekt</h3>
                        <input v-model="weight" type="number">
                        <h3>Pansret</h3>
                        <p>false/true</p>
                        <input v-model="isArmoured" type="text">

                        <br><br>
                        <input @click="changeVehicle" type="button" value="Endre" style="margin: 2px;">
                        <input @click="addNewVehicle" type="button" value="Opprett" style="margin: 2px;">
                    </div>

                    <!--DELETE-->
                    <div id="mission-delete" class="content-card">
                        <h2>SLETT</h2>
                        <hr>
                        <h3>Slett kjøretøy med id</h3>
                          <input v-model="deleteId" type="text"> 
                        <br><br>
                        <input @click="deleteAVehicle" type="button" value="Slett">
                    </div>
                </div>

            </div>
            <div>
             
            </div>
        </article>
    </section>
</template>
<script>import vehicleService from '../../../services/vehicleService.js'

import { reactive, toRefs } from 'vue'

export default {
    setup(){

        //HENTE V-MODELS
        const vehicleForm = reactive({  
            id: "",
            veichleName: "",
            veichleType: "",
            weight: "",
            isArmoured: "",
            deleteId: ""
            
        });

        //GET - HENTE UT
        const getVehicle = async () => {
            const vehicle = await vehicleService.getVehicleById( vehicleForm.id );

            vehicleForm.id = vehicle.id;
            vehicleForm.veichleName = vehicle.veichleName;
            vehicleForm.veichleType = vehicle.veichleType;
            vehicleForm.weight = vehicle.weight;
            vehicleForm.isArmoured = vehicle.isArmoured;
            
        }

        //PUT - ENDRE ET KJØREØY
        const changeVehicle = async () => {

            const editedVehicle = {
                id: parseInt( vehicleForm.id ),
                veichleName: vehicleForm.veichleName,
                veichleType: vehicleForm.veichleType,
                weight: parseInt( vehicleForm.weight ),
                isArmoured: vehicleForm.isArmoured,   
            }

            vehicleService.putVehicle( editedVehicle );
        }

        //POST - LEGG TIL NY PERSON
        const addNewVehicle = async () => {
            const newVehicle = {
                veichleName: vehicleForm.veichleName,
                veichleType: vehicleForm.veichleType,
                weight: parseInt( vehicleForm.weight ),
                isArmoured: vehicleForm.isArmoured
            }
            const stringifiedVehicle = JSON.stringify( newVehicle );

            vehicleService.addVehicle( newVehicle );

            alert("Database endret! Lagt til: " + stringifiedVehicle)
        }

        //DELETE - SLETT PERSON
        const deleteAVehicle = async () => {

            alert(`Du har nå slettet et kjøretøy fra databasen med id: ${vehicleForm.deleteId} og navn ${vehicleForm.veichleName + ", " + vehicleForm.veichleType}`)
            vehicleService.deleteVehicle( vehicleForm.deleteId );

        }

        //RETURN
        return{
            getVehicle,
            deleteAVehicle,
            addNewVehicle,
            changeVehicle,
            ...toRefs( vehicleForm )
        } 
    },
}
</script>
<style scoped>
.menu {
    padding: 10px;
    margin: 0px 5px;
    margin-bottom: 15px;
}
.menu button {
    margin: 5px;
}
.menu button > p {
    margin: 3px;
}
.content-card{
    background-color: #e9e9e9;
    border-radius: 4px;
    border: 1px solid lightgray;
    margin: 5px;
    padding: 7px;
    width: 350px;
}
.content-flex{
    display: flex;
}
</style>