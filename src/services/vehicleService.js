import axios from "axios";
import { ref } from "vue";

const vehicleService = (function(){

    const vehicles = ref( [ 
        {id: 1, vehicleName:"Feltvogn", veichleType: "Tanks", weight: 3000, isArmored: false },
    ] );

    ( async () => {  
        const request = await axios.get("https://localhost:7075/vehicle");
        vehicles.value = request.data;
    } )()

    const getAllVehicles = () => vehicles;


    const getVehiclesById = async (id) => {
        const request = await axios.get(`https://localhost:7075/vehicle/${id}`);
        return request;
    }

    const putVehicle = () => {

    }

    return {
        getAllVehicles,
        getVehiclesById,
        putVehicle
    }
}() );

export default vehicleService;