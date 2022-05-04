import axios from "axios";
import { ref } from "vue";

const vehicleService = (function(){

    const vehicles = ref( [ 
        {id: 1, veichleName:"Feltvogn", veichleType: "Tanks", weight: 3000, isArmored: false },
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

    const getVehicleById = async (id) => {
        const request = await axios.get(`https://localhost:7075/vehicle/${id}`);
        return request.data;
    }

    const putVehicle =  async (editedVehicle) => {

        await axios.put("https://localhost:7075/vehicle", editedVehicle) 

        const temporaryArray = JSON.parse( JSON.stringify( vehicles.value ) );

        const index = temporaryArray.findIndex( vehicles => parseInt( vehicles.id ) === parseInt( vehicles.id ) );

        vehicles.value[index].veichleName = editedVehicle.veichleName;
        vehicles.value[index].veichleType = editedVehicle.veichleType;
        vehicles.value[index].weight = editedVehicle.weight;
        vehicles.value[index].isArmored = editedVehicle.isArmoured;
        
    }

    const addVehicle = async (newVehicle) => {
        await axios.post("https://localhost:7075/vehicle/", newVehicle)
    }

    const deleteVehicle = async ( vehicleToDeleteId ) => {
        await axios.delete(`https://localhost:7075/vehicle/${vehicleToDeleteId}`)
    }

    return {
        getVehiclesById,
        getVehicleById,
        putVehicle,
        addVehicle,
        deleteVehicle,
        getAllVehicles
    }
}() );

export default vehicleService;