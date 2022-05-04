<template>
    <section class="data-section">
        <add-data></add-data>
        <article class="data-content">
            <div>

  
                 <div class="header-parent">
                    <div class="header">
                        <h5> konfigurer et... </h5>
                        <h1> OPPDRAG </h1>

                    </div> 
                </div> 
                <div class="center-div">
                    <h3>Beskrivelse</h3>
                    <input v-model="beskrivelse" type="text">

                    <h3>Lokasjon</h3>
                    <input v-model="lokasjon" type="text">

                    <h3>Oppdragsnummer</h3>
                    <input v-model="oppdragsnummer" type="number">
                </div>
                <div>
                    <input @changes="setImage" type="file">
                </div>
                <input @click="saveMission" type="button" value="Lagre oppdrag">
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
            missionService.postMission( newMission, image);

        }
        return {
            ...toRefs(formMission),
            setImage,
            saveMission
        }
    }
}
</script>
<style scoped>
</style>