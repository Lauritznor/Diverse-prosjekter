<template>
<bootstrap-test :tabs="['Home', 'Settings', 'Profile']" :selected="selected" @selected="setSelected"> </bootstrap-test>
<tab> </tab>
    <div class="center">
        <section class="add-data-section">
                <!-- <div>
                    <ul class="nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Soldiers</a>
                        </li>
                        <li class="nav-item">
                            <router-link to="/add/soldier">HEI</router-link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div> -->
                <article>

                    <!-- CONTENT WILL APEAR HERE -->

                </article>
        </section>
    </div>
</template>
<script>
import BootstrapTest from './DataInserts/BootstrapTest.vue'
import Tab from './DataInserts/Tab.vue'


export default {
    components: {
        BootstrapTest,
        Tab
    },
    data(){
        return{
            selected: 'Home'
        }
    },
    methods: {
        setSelected(tab) {
            this.selected = tab;
        }
    }
}
</script>
<style scoped>

.center{
  
    width: 100%;
    min-height: 90vh;
    display: flex;
    justify-content: center;
}
.add-data-section{
    display: flex;
    width: 90%;
    min-height: 90vh;
    background: white;
    margin: 30px;
    padding: 10px;
}
.defaultMargin{
    margin: 30px;
}



</style>