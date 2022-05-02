import axios from "axios";
import { ref } from "vue";

const soldierService = (function(){

    const soldiers = ref( [ 
        {serviceNumber: 0, firstName: "Joe", lastName: "Mama", soldierType: "Førstegangstjeneste", rank: "Menig" }
    ] );

    ( async () => {  
        const request = await axios.get("https://localhost:7075/api/Forsvaret")
        soldiers.value = request.data;
    } )()

    const getAll = () => soldiers;

    return {
        getAll
    }
}() );

export default soldierService;