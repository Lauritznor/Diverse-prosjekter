import axios from "axios";
import { ref } from "vue";

const soldierService = (function(){

    const soldiers = ref( [ 
        {serviceNumber: 2374, firstName: "Ola", lastName: "Nordmann", soldierType: "Førstegangstjeneste", rank: "Menig", branchName: "Luftforsvaret" },
        {serviceNumber: 2314, firstName: "Geir", lastName: "Olsen", soldierType: "Marinejæger", rank: "Korporal", branchName: "Hæren" },
        {serviceNumber: 5321, firstName: "Johan", lastName: "Halvorsen", soldierType: "Førstegangstjeneste", rank: "Menig", branchName: "Luftforsvaret" },
        {serviceNumber: 8123, firstName: "Trude", lastName: "Voldset", soldierType: "Førstegangstjeneste", rank: "Menig", branchName: "Sjøforsvaret" },
        {serviceNumber: 1274, firstName: "Oddgeir", lastName: "Johannesen", soldierType: "Pilot", rank: "Sersjant", branchName: "Luftforsvaret" },
        {serviceNumber: 6614, firstName: "Halvor", lastName: "Odden", soldierType: "Førstegangstjeneste", rank: "Menig", branchName: "Hæren" },
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