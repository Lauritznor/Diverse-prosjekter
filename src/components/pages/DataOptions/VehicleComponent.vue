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
                    <div id="edit" class="content-card">
                        <h2>ENDRE</h2> <hr>
                        <h3>Hent kjøretøy med id</h3>
                        <input v-model="id" type="text">
                        <input @click="getVehicle" type="button" value="Hent"><br><br>
                        
                        <h3>Navn</h3>
                        <input v-model="veichleName" type="text">
                        <h3>Type</h3>
                        <input v-model="veichleType" type="text">
                        <h3>Vekt</h3>
                        <input v-model="weight" type="number">
                        <h3>Pansret</h3>
                        <input v-model="isArmoured" type="text">

                        <br><br>
                        <input @click="changeVehicle" type="button" value="Endre">
                    </div>

                    <!--DELETE-->
                    <div id="mission-delete" class="content-card">
                        <h2>SLETT</h2>
                        <hr>
                        <h3>Slett kjøretøy med id</h3>
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
<script>import vehicleService from '../../../services/vehicleService.js'
import AddData from '../AddData.vue'
import { reactive, toRefs } from 'vue'

export default {
    setup(){

        const vehicleForm = reactive({  
            id: "",
            veichleName: "",
            veichleType: "",
            weight: "",
            isArmoured: "",
            
        });

        const getVehicle = async () => {
            const vehicle = await vehicleService.getVehicleById( vehicleForm.id );

            vehicleForm.id = vehicle.id;
            vehicleForm.veichleName = vehicle.veichleName;
            vehicleForm.veichleType = vehicle.veichleType;
            vehicleForm.weight = vehicle.weight;
            vehicleForm.isArmoured = vehicle.isArmoured;
            
        }

        const changeVehicle = async () => {

            const editedVehicle = {
                id: parseInt( vehicleForm.id ),
                veichleName: vehicleForm.veichleName,
                veichleType: vehicleForm.veichleType,
                weight: parseInt( vehicleForm.weight ),
                isArmoured: vehicleForm.isArmoured,
                
            }

            vehicleService.putWeapon( editedVehicle );
        }


        return{
            getVehicle,
            changeVehicle,
            ...toRefs( vehicleForm )
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