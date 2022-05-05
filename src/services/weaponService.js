import axios from "axios";
import { ref } from "vue";

const weaponService = (function(){

    //DUMMYDATA
    const weapons = ref( [ 
        {id: 1, weaponName: "HK 416", weaponCategory: "AutomatRIfle", magazineSize: 30, caliber: 5.56, manufacturer: "Heckler & Koch" },
    ] );

    ( async () => {  
        const request = await axios.get("https://localhost:7075/weapon");
        weapons.value = request.data;
    } )()

    //GETALL
    const getAllWeapons = () => weapons;

    //GETID
    const getWeaponById = async (id) => {
        const request = await axios.get(`https://localhost:7075/weapon/${id}`);
        return request.data;
    }

    //PUT
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

    //POST
    const addWeapon = async (newWeapon) => {
        await axios.post("https://localhost:7075/weapon/", newWeapon)
    }
      //POST IMAGE
      const postWeapon = async (newWeapon, image) => {
        const request = await axios.post("https://localhost:7075/weapon", newWeapon);
        const imagePostRequest = await axios({
            method: "POST",
            url: `${ "https://localhost:7075/weapon"}/saveIMage`,
            data: image,
            config: { header: { "Content-Type": "multipart/form-data"}}
        }); console.log(request + " " + imagePostRequest);
    }

    //DELETE
    const deleteWeapon = async ( weaponToDeleteId ) => {
        await axios.delete(`https://localhost:7075/weapon/${weaponToDeleteId}`)
    }

    //RETURN
    return {
        getAllWeapons,
        getWeaponById,
        putWeapon,
        addWeapon,
        deleteWeapon,
        postWeapon

        
    }
}() );

export default weaponService;