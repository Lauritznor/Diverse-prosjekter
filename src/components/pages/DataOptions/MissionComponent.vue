<template>
    <section class="data-section">
        <add-data></add-data>
        <article class="data-content">
            <div>

                 <div class="header-parent">
                    <div class="header">
                        <h5> legg til et... </h5>
                        <h1> OPPDRAG </h1>
                    </div> 
                </div> 
                <div class="center-div">
                    <h3>Beskrivelse</h3>
                    <input type="text">

                    <h3>Lokasjon</h3>
                    <input type="text">

                    <h3>Oppdragsnummer</h3>
                    <input type="number">
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
</style>