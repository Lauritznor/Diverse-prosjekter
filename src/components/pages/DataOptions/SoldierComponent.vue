<template>
    <section class="data-section">
        <add-data></add-data>
        <article class="data-content">
            <div>

                <div class="header-parent">
                    <div class="header">
                        <h5> konfigurer en... </h5>
                        <h1> SOLDAT </h1>
                    </div> 
                </div> 
                <hr>
                <div>
                    <h3>Endre soldat</h3>
                    <input type="text" placeholder="hent soldat etter id">
                    <h4>Navn</h4>
                    <input type="text">
                    <h4>Etternavn</h4>
                </div>
<hr>
                <div>
                    <h3>Slett soldat</h3>
                    <input type="text" placeholder="hent soldat etter id">
                    <h4>Navn</h4>
                    <input type="text">
                    <h4>Etternavn</h4>
                </div>
<hr>
                <div class="center-div">
                    <h3> Soldatnummer</h3>
                    <input v-model="serviceNumber" type="text">
                    <input @click="getSoldier" type="button" value="hent">

                    <h3> Fornavn</h3>
                    <input v-model="firstName" type="text">

                    <h3> Etternavn</h3>
                    <input v-model="lastName" type="text">

                    <h3> Grad </h3>
                    <input v-model="rank" type="text">
                    <input type="button" value="Lagre endringer">

                </div>
            </div>
        </article>
    </section>
</template>
<script>
import soldierService from '../../../services/soldierService'
import AddData from '../AddData.vue'
import { reactive, toRefs } from 'vue'
export default {
    setup(){

        const soldierForm = reactive({  
            serviceNumber: "2",
            firstName: "TEST",
            lastName: "TEST",
            rank: "TEST",
        });

        const getSoldier = async () => {
            const soldier = await soldierService.getById(soldierForm.serviceNumber);

            soldierForm.firstName = soldier.firstName;
            soldierForm.lastName = soldier.lastName;
            soldierForm.rank = soldier.rank;
        }

        return{
            getSoldier,
            ...toRefs( soldierForm )
        } 
    },
    components: {
        AddData
    }
}
</script>
<style scoped>
/* STYLE IS IN AddData COMPONENT*/
</style>