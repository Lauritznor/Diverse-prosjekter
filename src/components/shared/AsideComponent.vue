<template>
    <aside class="aside"> 
        <h1 id="overview-h1">OVERSIKT</h1>
        <input @onclick="displaySoldiers" type="button" value="Soldater" class="aside-btn" >
        <input type="button" value="Oppdrag" class="aside-btn">
        <input type="button" value="Kjøretøy" class="aside-btn">
        <input type="button" value="Våpen" class="aside-btn">
        <h3>SØK ETTER ID</h3>
        <input type="text" class="aside-btn">

    </aside>
</template>
<script>
export default {
    setup(){
        const displaySoldiers = async () => {
            alert("TEST");
        }
        return{
            displaySoldiers
        } 
    }
}
</script>
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
#overview-h1{
    padding: 10px;
    text-align: center;
    width: 100%;
    background-color: #6b7245;
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
.aside-btn{
    padding: 10px;
    margin: 10px;
    width: 80%;
    text-align: center;
}
</style>