import axios from "axios";
import { ref } from "vue";

const soldierService = (function(){

    const soldiers = ref( [ 
        {serviceNumber: 2374, firstName: "Ola", lastName: "Nordmann", soldierType: "Førstegangstjeneste", rank: "Menig", branchName: "Luftforsvaret" }
    ] );

    ( async () => {  
        const request = await axios.get("https://localhost:7055/api/Forsvaret");
        soldiers.value = request.data;
    } )()

    const getAll = () => soldiers;


    const getById = async (id) => {
        const request = await axios.get(`https://localhost:7075/api/Forsvaret/${id}`);
        return request;
    }

    const putSoldier = () => {

    }

    return {
        getAll,
        getById,
        putSoldier
    }
}() );

export default soldierService;