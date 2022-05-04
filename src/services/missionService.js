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

    const getMissionById = async (id) => {
        const request = await axios.get(`https://localhost:7075/mission/${id}`);
        return request.data;
    }

    const putMission =  async (editedMission) => {

        await axios.put("https://localhost:7075/mission", editedMission) 

        const temporaryArray = JSON.parse( JSON.stringify( missions.value ) );

        const index = temporaryArray.findIndex(missions=>parseInt(missions.id)===parseInt(editedMission.id)  );

        missions.value[index].id = editedMission.id;
        missions.value[index].missionDescription = editedMission.missionDescription;
        missions.value[index].missionLocation = editedMission.missionLocation;
        missions.value[index].secret = editedMission.secret;
        
    }

    return {
        getAllMissions,
        putMission,
        getMissionById
    }
}() );

export default missionService;