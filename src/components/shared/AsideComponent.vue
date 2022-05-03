<template>
    <aside class="aside"> 
        <h1 id="overview-h1">OVERSIKT</h1>
        <div id="overview">   
            <h4>Søk:</h4>
            <p>Spesifiser hva brukeren søker etter når vi har laget søke funksjonen</p>
            <div class="flex">
                <input type="text">
                <input type="submit">
            </div>

    

            <h4>Velg forsvarsgren:</h4>
            <div class="form">
                <label></label>
                <select id="branch_of_defence">
                    <option>Hæren</option>
                    <option>Sjøforsvaret</option>
                    <option>Luftforsvaret</option>
                    <option>Alle forsvarsgrenene</option>
                </select>
            </div>
        </div>

        <div id="spesific">
            <h4>Spesifike valg</h4>
        </div> 
        
    </aside>
</template>
<style scoped>
    .flex{
    display: flex;
}
.aside{
    width: 20%; /*MAIN SECTION SHOULD TAKE 80% OF PAGE WIDTH*/
    min-height: 90vh; /* CHANGE IN PHONE VIEW */
    display: flex;
    align-items: center;
    background-color: white;
    flex-direction: column;
}
.form{
    display: flex;
    justify-content: center;
    flex-direction: column;
}
#branch_of_defence{
    padding: 7px;
}
#branch_of_defence option:nth-child(odd){
    background-color: #f1f1f1;
}
#overview-h1{
    padding: 10px;
    text-align: center;
    width: 100%;
    background: #dedede;
    font-family: Arial, Helvetica, sans-serif;
}
#overview{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 30%;
    text-align: center;
    padding: 10px;
    border-bottom: 2px solid #dedede;
}
#spesific{
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 70%;
    padding: 20px;
}

</style>