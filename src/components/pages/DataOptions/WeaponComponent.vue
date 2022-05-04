<template>
    <section class="data-section">
        <add-data></add-data>
        <article class="data-content">
            <div>

                 <div class="header-parent">
                    
                </div> </div>
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
                    <div id="weapon-img-upload" class="content-card">
                        <h2>BILDEOPPLASTING</h2>
                        <hr>
                        <h3>Navn</h3>
                        <input v-model="weaponName" type="text">

                        <h3>Type</h3>
                        <input v-model="weaponCategory" type="text">

                        <h3>kaliber</h3>
                        <input v-model="caliber" type="number">

                        <h3> Kuler i magasin: </h3>
                        <input v-model="magazineSize" type="number">
                        <h3>Produsent</h3>
                        <input v-model="manufacturer" type="text">
                        <div>
                            <input @changes="setImage" type="file">
                        </div>
                        <input @click="saveWeapon" type="button" value="Lagre bildet">
                    </div>

                    <!--PUT-->
                 

                    <!--POST-->
                    <div id="mission-add" class="content-card">
                        <h2>ENDRE/OPPRETT</h2> <hr>
                        <h3>Hent våpen med id</h3>
                        <p>Id opprettes av database dersom man ønsker å opprette nytt våpen</p>
                        <input v-model="id" type="text">
                        <input @click="getWeapon" type="button" value="Hent"><br><br>
                        
                        <h3>Navn</h3>
                        <input v-model="weaponName" type="text">
                        <h3>Type</h3>
                        <input v-model="weaponCategory" type="text">
                        <h3>Caliber</h3>
                        <input v-model="caliber" type="number">
                        <h3>Magasinkapasitet</h3>
                        <input v-model="magazineSize" type="text">
                        <h3>Produsent</h3>
                        <input v-model="manufacturer" type="text">


                        <br><br>
                        <input @click="changeWeapon" type="button" value="Endre" style="margin: 2px;">
                        <input @click="addNewWeapon" type="button" value="Opprett" style="margin: 2px;">
                    
                    </div>

                    <!--DELETE-->
                    <div id="mission-delete" class="content-card">
                        <h2>SLETT</h2>
                        <hr>
                        <h3>Slett våpen med navn</h3>
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
import weaponService from '../../../services/weaponService.js'
import AddData from '../AddData.vue'
import { reactive, toRefs } from 'vue'

export default {
    setup(){

        const weaponForm = reactive({  
            id: "",
            weaponName: "",
            magazineSize: "",
            caliber: "",
            weaponCategory: "",
            manufacturer: "",
            deleteId: "",
        });

        const getWeapon = async () => {
            const weapon = await weaponService.getWeaponById( weaponForm.id );

            weaponForm.id = weapon.id;
            weaponForm.weaponName = weapon.weaponName;
            weaponForm.magazineSize = weapon.magazineSize;
            weaponForm.caliber = weapon.caliber;
            weaponForm.weaponCategory = weapon.weaponCategory;
            weaponForm.manufacturer = weapon.manufacturer;
        }

        const changeWeapon = async () => {

            const editedWeapon = {
                id: parseInt( weaponForm.id ),
                weaponName: weaponForm.weaponName,
                manufacturer: weaponForm.manufacturer,
                caliber: parseInt( weaponForm.caliber ),
                magazineSize: weaponForm.magazineSize,
                
            }

            weaponService.putWeapon( editedWeapon );
        }


         //POST - LEGG TIL NYTT VÅPEN
        const addNewWeapon = async () => {
            const newWeapon = {
                weaponName: weaponForm.weaponName,
                manufacturer: weaponForm.manufacturer,
                caliber: parseInt( weaponForm.caliber ),
                magazineSize: weaponForm.magazineSize,
                
            }
            const stringifiedWeapon = JSON.stringify( newWeapon);

            weaponService.addWeapon( newWeapon);

            alert("Database endret! Lagt til: " + stringifiedWeapon)
        }

        //DELETE - SLETT VÅPEN
        const deleteAWeapon = async () => {

            alert(`Du har nå slettet et våpen fra databasen med id: ${weaponForm.deleteId} og navn ${weaponForm.weaponName + " " + weaponForm.manufacturer}`)
            weaponService.deleteWeapon( weaponForm.deleteId );

        }

        //RETURN

        return{
            getWeapon,
            changeWeapon,
            deleteAWeapon,
            addNewWeapon,
            ...toRefs( weaponForm )
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