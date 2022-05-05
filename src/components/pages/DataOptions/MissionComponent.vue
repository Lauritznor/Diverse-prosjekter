<template>
    <section class="data-section">
        <add-data></add-data>
        <article class="data-content">
            <div>
                <div class="menu">
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
                     <div id="mission-img-upload" class="mission-card">
                        <h2>BILDEOPPLASTING</h2>
                        <hr>
                        <h3>Beskrivelse</h3>
                        <input v-model="missionDescription" type="text">

                        <h3>Lokasjon</h3>
                        <input v-model="missionLocation" type="text">

                        <h3>Oppdragsnummer</h3>
                        <input v-model="mission" type="number">
                        <div>
                            <input @changes="setImage" type="file">
                        </div>
                        <input @click="saveMission" type="button" value="Lagre bildet">
                    </div> 

                    <!--PUT-->
                      <div id="edit" class="mission-card">
                        <h2>ENDRE/OPPRETT</h2> <hr>
                        <h3>Hent oppdrag med id</h3>
                        <p>Id opprettes av database dersom man ønsker å opprette nytt oppdrag</p>
                        <input v-model="id" type="text">
                        <input @click="getMission" type="button" value="Hent"><br><br>
                        
                        <h3>Oppdragsbeskrivelse</h3>
                        <input v-model="missionDescription" type="text">
                        <h3>Lokasjon</h3>
                        <input v-model="missionLocation" type="text">
                        <h3>Hemmelig</h3>
                        <input v-model="secret" type="number">
                       
                     

                        <br><br>
                        <input @click="changeMission" type="button" value="Endre" style="margin: 2px;">
                        <input @click="addNewMission" type="button" value="Opprett" style="margin: 2px;">
                    </div>

                    <!--DELETE-->
                    <div id="mission-delete" class="mission-card">
                        <h2>SLETT</h2>
                        <hr>
                        <h3>Hent oppdrag med id</h3>
                        <input v-model="deleteId" type="text"> 
                        <br><br>
                        <input @click="deleteAMission" type="button" value="Slett">
                    </div>
                </div>

            </div>
        </article>
    </section>
</template>
<script>
import missionService from '../../../services/missionService.js'
import {reactive, toRefs} from 'vue'

export default {
    setup(){


        //IMAGE
        // const postMission = async (newMission, image) => {
        // const request = await axios.post("https://localhost:7075/mission", newMission);
        // const imagePostRequest = await axios({
        //     method: "POST",
        //     url: `${ "https://localhost:7075/mission"}/saveIMage`,
        //     data: image,
        //     config: { header: { "Content-Type": "multipart/form-data"}}
        // }); console.log(request + " " + imagePostRequest);
        // }


        //GET V MODELS
        const missionForm = reactive({  
            id: "",
            missionDescription: "",
            missionLocation: "",
            secret: "",
            deleteId: "",
            
        });

        //GET
        const getMission = async () => {
            console.log (missionForm.id)

            const mission = await missionService.getMissionById( missionForm.id );

            console.log(mission)

            missionForm.id = mission.id;
            missionForm.missionDescription = mission.missionDescription;
            missionForm.missionLocation = mission.missionLocation;
            missionForm.secret = mission.secret;
           
        }

        //EDIT
        const changeMission = async () => {

            const editedMission = {
                id: parseInt( missionForm.id ),
                missionDescription: missionForm.missionDescription,
                missionLocation: missionForm.missionLocation,
               
                secret: JSON.parse( missionForm.secret )
            }
              
            alert("Endret databasen!")

             missionService.editMission( editedMission );
            alert("Database endret!")
        }


        //POST - LEGG TIL 
        const addNewMission = async () => {
            const newMission = {
                missionDescription: missionForm.missionDescription,
                missionLocation: missionForm.missionLocation,
                secret: missionForm.secret
                
            }
            const stringifiedMission = JSON.stringify(newMission);

            missionService.addMission( newMission );

            alert("Database endret! Lagt til: " + stringifiedMission)
        }

        //DELETE - SLETT PERSON
        const deleteAMission = async () => {

            alert(`Du har nå slettet en soldat fra databasen med id: ${missionForm.deleteId} og navn ${missionForm.missionDescription + " " + missionForm.missionLocation}`)
            missionService.deleteMission( missionForm.deleteId );

        }


        return {
            ...toRefs(missionForm),
            changeMission,
            getMission,
            deleteAMission,
            addNewMission,
            
        }
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
.mission-card{
    background-color: #e9e9e9;
    border-radius: 4px;
    border: 1px solid lightgray;
    margin: 5px;
    padding: 7px;
    width: 350px;
}
.content-flex{
    display: flex;
    flex-wrap: wrap;
}
</style>