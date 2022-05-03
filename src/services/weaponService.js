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

    const putWeapon = () => {

    }

    return {
        getAllWeapons,
        getWeaponsById,
        putWeapon
    }
}() );

export default weaponService;