import axios from "axios";
import { ref } from "vue";

const weaponService = (function(){

    const weapons = ref( [ 
        {id: 1, weaponName: "HK 416", weaponCategory: "AutomatRIfle", magazineSize: 30, caliber: 5.56, manufacturer: "Heckler & Koch" },
    ] );

    ( async () => {  
        const request = await axios.get("https://localhost:7075/weapon");
        weapons.value = request.data;
    } )()

    const getAllWeapons = () => weapons;


    const getWeaponsById = async (id) => {
        const request = await axios.get(`https://localhost:7075/weapon/${id}`);
        return request;
    }

    

    
    const getWeaponById = async (id) => {
        const request = await axios.get(`https://localhost:7075/weapon/${id}`);
        return request.data;
    }

    const putWeapon =  async (editedWeapon) => {

        await axios.put("https://localhost:7075/weapon", editedWeapon) 

        const temporaryArray = JSON.parse( JSON.stringify( weapons.value ) );

        const index = temporaryArray.findIndex( weapons => parseInt( weapons.id ) === parseInt( weapons.id ) );

        weapons.value[index].weaponName = editedWeapon.weaponName;
        weapons.value[index].weaponCategory = editedWeapon.weaponCategory;
        weapons.value[index].caliber = editedWeapon.caliber;
        weapons.value[index].magazineSize = editedWeapon.magazineSize;
        weapons.value[index].manufacturer = editedWeapon.manufacturer;
        
    }




    return {
        getAllWeapons,
        getWeaponsById,
        putWeapon,
        getWeaponById
    }
}() );

export default weaponService;