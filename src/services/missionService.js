import axios from "axios";
import { ref } from "vue";

const missionService = (function(){

    //DUMMYDAYA
    const missions = ref( [ 
        {id: 1, secret: true, missionDescription: "infiltrer Hansaparken", missionLocation: "Bergen"},
    ] );

    ( async () => {  
        const request = await axios.get("https://localhost:7075/mission");
        missions.value = request.data;
    } )()

    //GET ID
    const getMissionsById = async (id) => {
        const request = await axios.get(`https://localhost:7075/mission/${id}`);
        return request;
    }
    
    //POST
    const postMission = async (newMission, image) => {
        const request = await axios.post("https://localhost:7075/mission", newMission);
        const imagePostRequest = await axios({
            method: "POST",
            url: `${ "https://localhost:7075/mission"}/saveIMage`,
            data: image,
            config: { header: { "Content-Type": "multipart/form-data"}}
        }); console.log(request + " " + imagePostRequest);
    }

    //GETALL
    const getAllMissions = () => missions;

    //GET ONE MISSION BY ID
    const getMissionById = async (id) => {
        const request = await axios.get(`https://localhost:7075/mission/${id}`);
        return request.data;
    }
      //PUT (EDIT)


    //EDIT
    const editMission =  async (editedMission) => {

        await axios.put("https://localhost:7075/mission", editedMission) 

        const temporaryArray = JSON.parse( JSON.stringify( missions.value ) );

        const index = temporaryArray.findIndex(missions=>parseInt(missions.id)===parseInt(editedMission.id)  );

        missions.value[index].id = editedMission.id;
        missions.value[index].missionDescription = editedMission.missionDescription;
        missions.value[index].missionLocation = editedMission.missionLocation;
        missions.value[index].secret = editedMission.secret;
        
    }

    //ADD
    const addMission = async (newMission) => {
        await axios.post("https://localhost:7075/mission/", newMission)
    }

    //DELETE
    const deleteMission = async ( missionToDeleteId ) => {
        await axios.delete(`https://localhost:7075/mission/${missionToDeleteId}`)
    }

    //RETURN
    return {
        getAllMissions,
        getMissionsById,
        editMission,
        postMission,
        getMissionById,
        addMission,
        deleteMission,
        
    }
}() );

export default missionService;