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


    const getSoldiersById = async (id) => {
        const request = await axios.get(`https://localhost:7075/soldier/${id}`);
        return request;
    }

    const putSoldier = () => {

    }

    return {
        getAllSoldiers,
        getSoldiersById,
        putSoldier
    }
}() );

export default soldierService;