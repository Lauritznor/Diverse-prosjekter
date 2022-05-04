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
                    <div id="mission-edit" class="mission-card">
                        <h2>ENDRE</h2> <hr>
                        <h3>Hent oppdrag med id</h3>
                        <input v-model="id" type="text">
                        <input @click="getMission" type="button" value="Hent"><br><br>
                        
                        <h3>Oppdragsnummer</h3>
                        <input v-model="mission" type="text">
                        <h3>Beskrivelse</h3>
                        <input v-model="missionDescription" type="text">
                        <h3>Lokasjon</h3>
                        <input v-model="missionLocation" type="number">
                        <h3>Hemmelig (true = ja / false = nei)</h3>
                        <input v-model="secret" type="boolean">
                        


                        <br><br>
                        <input @click="changeMission" type="button" value="Endre">
                    </div>

                    <!--POST-->
                    <div id="mission-add" class="mission-card">
                        <h2>OPPRETT</h2>
                        <hr>
                        <h3>Oppdrag lokalisasjon</h3>
                        <input type="number">
                        <h3>Oppdragsbeskrivelse</h3>
                        <input type="number">
                        <br><br>
                        <input type="button" value="Endre">
                    </div>

                    <!--DELETE-->
                    <div id="mission-delete" class="mission-card">
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
import AddData from '../AddData.vue'
import missionService from '../../../services/missionService.js'
import {reactive, toRefs} from 'vue'

export default {
    components: {
        AddData
    },

    setup(){

        const formMission = reactive({
            beskrivelse:"",
            lokasjon:"",
            oppdragsnummer: 0,
            image: ""
        });
        const image = new FormData();
        
        const setImage = ( e ) => {
            image.append("file", e.target.files[0]);
            formMission.image = e.target.files[0].name;

        }
        const saveMission = () => {
            const newMission = {
                beskrivelse: formMission.beskrivelse,
                lokasjon: formMission.lokasjon,
                oppdragsnummer: parseInt(formMission.oppdragsnummer),
                image: formMission.image
                
            };
            missionService.putMission( newMission, image);

        }
    
        const missionForm = reactive({  
            id: "",
            missionName: "",
            description: "",
            location: "",
            isSecret: "",
            
        });

        const getMission = async () => {
            const mission = await missionService.getMissionById( missionForm.id );

            missionForm.id = mission.id;
            missionForm.missionName = mission.missionName;
            missionForm.description = mission.description;
            missionForm.location = mission.location;
            missionForm.isSecret = mission.isSecret;
           
        }

        const changeMission = async () => {

            const editedMission = {
                id: parseInt( missionForm.id ),
                missionName: missionForm.missionName,
                description: missionForm.description,
                location: parseInt( missionForm.caliber ),
                isSecret: missionForm.isSecret,
                
            }

            missionService.putMission( editedMission );
        }


        return {
            ...toRefs(formMission),
            setImage,
            saveMission,
            changeMission,
            getMission
        }
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
.mission-card{
    background-color: #cfcfcf;
    margin: 5px;
    padding: 7px;
    width: 350px;
}
.content-flex{
    display: flex;
    flex-wrap: wrap;
}
</style>