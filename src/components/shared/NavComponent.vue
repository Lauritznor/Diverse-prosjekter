<template>
    <!-- NAVBAR -->
    <nav class="navbar navbar-expand-lg navbar-dark p-3 main-nav"> 

        <!-- LOGO -->
        <div class="brand forsvaret-brand">
            <router-link class="navbar-brand" to="/">
                    <img :src="require(`@/assets/images/logos/forsvaret-logo.png`)" style="height: 50px;">
            </router-link>
            <router-link class="navbar-brand forsvaret-text" to="/">FORSVARET</router-link>
        </div>

      
        <div class="links">
            <ul class="navbar-nav">
                <li class="nav-item overview-link">
                    <router-link to="/overview" class="nav-link">OVERSIKT</router-link>
                </li>
                 <li class="nav-item">
                    <router-link to="/add" class="nav-link config-link">KONFIGURER DATA (ADMIN)</router-link>
                </li>

            </ul>
        </div>

    </nav>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.min.css'

export default{
}

</script>
<style>
.search-form {
    display: flex;
}
.search-form button{
    margin: 0px 5px;
}
.main-nav{
    display: flex;
    justify-content: space-between !important; /* Using !important to overwrite bootstrap */
    background-color: #136326 !important;
}
.forsvaret-brand{
    display: flex;
    justify-content: center;
    align-items: center;
}
.forsvaret-text{
    margin-top: 7px !important;
    font-size: 30px !important;
    color: rgba(152,185,156,255) !important;
}
.nav-link{
    font-size: 1.4rem;
}
.config-link{
    border-left: 2px solid;
}
</style>