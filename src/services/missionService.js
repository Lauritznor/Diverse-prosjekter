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
    const postMission = async (newMission, image) => {
        const request = await axios.post("https://localhost:7075/mission", newMission);
        const imagePostRequest = await axios({
            method: "POST",
            url: `${ "https://localhost:7075/mission"}/saveIMage`,
            data: image,
            config: { header: { "Content-Type": "multipart/form-data"}}
        }); console.log(request + " " + imagePostRequest);
    }

    return {
        getAllMissions,
        getMissionsById,
        putMission,
        postMission
    }
}() );

export default missionService;