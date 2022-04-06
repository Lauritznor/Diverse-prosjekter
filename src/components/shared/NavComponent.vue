<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-3">
        <div class="brand">
            <router-link class="navbar-brand" to="/">Header</router-link>
        </div>

        <div class="links">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link to="/" class="nav-link">Link1</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/parts" class="nav-link">Link2</router-link>
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
export default {
    
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
    justify-content: space-between !important;
}
</style>