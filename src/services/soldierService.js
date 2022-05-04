import axios from "axios";
import { ref } from "vue";

const soldierService = (function(){

    const soldiers = ref( [ 
        {id: 1, firstName: "Ola", lastName: "Nordmann", age: 21, soldierType: "Førstegangstjeneste", rank: "Menig" },
    ] );

    ( async () => {  
        const request = await axios.get("https://localhost:7075/soldier");
        soldiers.value = request.data;
    } )()

    const getAllSoldiers = () => soldiers;

    const getSoldierById = async (id) => {
        const request = await axios.get(`https://localhost:7075/soldier/${id}`);
        return request.data;
    }

    const putSoldier =  async (editedSoldier) => {

        await axios.put("https://localhost:7075/soldier", editedSoldier) 

        const temporaryArray = JSON.parse( JSON.stringify( soldiers.value ) );

        const index = temporaryArray.findIndex( soldiers => parseInt( soldiers.id ) === parseInt( soldiers.id ) );

        soldiers.value[index].firstName = editedSoldier.firstName;
        soldiers.value[index].lastName = editedSoldier.lastName;
        soldiers.value[index].age = editedSoldier.age;
        soldiers.value[index].soldierType = editedSoldier.soldierType;
        soldiers.value[index].rank = editedSoldier.rank;
    }

    const addSoldier = async (newSoldier) => {
        await axios.put(`https://localhost:7075/soldier/${newSoldier}`)
    }

    const deleteSoldier = async ( soldierToDeleteId ) => {
        await axios.delete(`https://localhost:7075/soldier/${soldierToDeleteId}`)
    }

    return {
        getAllSoldiers,
        getSoldierById,
        putSoldier,
        addSoldier,
        deleteSoldier
    }
}() );

export default soldierService;