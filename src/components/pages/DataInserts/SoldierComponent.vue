<template>
    <section class="data-section">
        <add-data></add-data>
        <article class="data-content">
            <div>

                <div class="header-parent">
                    <div class="header">
                        <h5> legg til en... </h5>
                        <h1> SOLDAT </h1>
                    </div> 
                </div> 
                <div class="center-div">
                    <h3> Fornavn</h3>
                    <input type="text">

                    <h3> Etternavn</h3>
                    <input type="text">

                    <h3> Grad </h3>
                    <input type="text">

                    <h3> Soldatnummer</h3>
                    <input type="text">
                </div>
            </div>
        </article>
    </section>
</template>
<script>
import AddData from '../AddData.vue'
export default {
    components: {
        AddData
    }
}
</script>
<style scoped>
.data-section{
    display: flex;
    flex-direction: column;
    width: 100%;
}
.data-content{
    background-color: white;
    min-height: 90vh;
    margin: 20px;
    padding: 20px 10%;
}
.header-parent{
    display: flex;
    align-items: center;
    flex-direction: column;
}
.header h1{
    font-family: 'Black Ops One', cursive;
    font-size: 4rem;
}
.center-div{
    display: flex;
    align-items: center;
    flex-direction: column;
}
</style>