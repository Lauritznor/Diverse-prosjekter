import axios from "axios";
import { ref } from "vue";

const missionService = (function(){

    const missions = ref( [ 
        {id: 1, secret: true, missionDescription: "infiltrer Hansaparken", missionLocation: "Bergen"},
    ] );

    ( async () => {  
        const request = await axios.get("https://localhost:7075/mission");
        missions.value = request.data;
    } )()

    const getAllMissions = () => missions;


    const getMissionsById = async (id) => {
        const request = await axios.get(`https://localhost:7075/mission/${id}`);
        return request;
    }

    const putMission = () => {

    }

    return {
        getAllMissions,
        getMissionsById,
        putMission
    }
}() );

export default missionService;