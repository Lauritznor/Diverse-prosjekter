<template>

    <!-- NAVBAR -->
    <nav class="navbar navbar-expand-lg navbar-dark p-3"> 

        <!-- LOGO -->
        <div class="brand forsvaret-brand">
            <router-link class="navbar-brand" to="/">
                    <img :src="require(`@/assets/images/logos/forsvaret-logo.png`)" style="height: 50px;">
            </router-link>
            <router-link class="navbar-brand forsvaret-text" to="/">Forsvaret</router-link>
        </div>

      
        <div class="links">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link to="/" class="nav-link">Oversikt</router-link>
                </li>
                 <li class="nav-item">
                    <router-link to="/parts" class="nav-link">Legg til data</router-link>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Oversikt</a>
                    <ul class="dropdown-menu">
                        <li class="dropdown-item" href="#">Action</li>
                        <li class="dropdown-item" href="#">Another action</li>
                        <li class="dropdown-item" href="#">Something else here</li>
                    </ul>
                </li>
                <li class="nav-item">
                    <router-link to="/wheels" class="nav-link">Link3</router-link>
                </li>
                <form class="form-inline my-2 my-lg-0 m-1 search-form">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search..." aria-label="Search">
                    <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                </form>
                
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
nav{
    display: flex;
    justify-content: space-between !important; /* Using !important to overwrite bootstrap */
    background-color: #3c421a !important;
}
.forsvaret-brand{
    display: flex;
    justify-content: center;
    align-items: center;
}
.forsvaret-text{
    font-size: 1.5rem;
    letter-spacing: 1px;
    font-family: 'Lato', sans-serif;
}
</style>