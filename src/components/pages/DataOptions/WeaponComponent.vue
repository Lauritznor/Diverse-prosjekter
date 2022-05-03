<template>
    <section class="data-section">
        <add-data></add-data>
        <article class="data-content">
            <div>

                 <div class="header-parent">
                    <div class="header">
                        <h5> konfigurer et... </h5>
                        <h1> VÅPEN </h1>
                    </div> 
                </div> 

                <div class="center-div">
                    <h3>FIKS</h3>
                    <input type="text">

                    <h3>FIKS</h3>
                    <input type="text">

                    <h3>FIKS</h3>
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