<template>
    <aside class="aside">
        <h3>Soldater</h3>
        <input type="button" value="Vis Soldater" class="aside-input" >
         <div>
            <input type="number" class="aside-input" placeholder="søk">
            <input type="button" value="SØK" class="aside-btn" >
        </div>
        <h3>Oppdrag</h3>
        <input type="button" value="Oppdrag" class="aside-input">
        <div>
            <input type="number" class="aside-input" placeholder="søk">
            <input type="button" value="SØK" class="aside-btn" >
        </div>
        <h3>Kjøretøy</h3>
        <input type="button" value="Kjøretøy" class="aside-input">
        <div>
            <input type="number" class="aside-input" placeholder="søk">
            <input type="button" value="SØK" class="aside-btn" >
        </div>
        <h3>Våpen</h3>
        <input type="button" value="Våpen" class="aside-input">
        <div>
            <input type="number" class="aside-input" placeholder="søk">
            <input type="button" value="SØK" class="aside-btn" >
        </div>
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
    background-color: white;
    flex-direction: column;
}
.aside h3{
    margin: 10px;
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
.aside-input{
    padding: 10px;
    margin: 7px;
    width: 70%;
    text-align: center;
}
.aside-btn{
    padding: 10px;
}
</style>