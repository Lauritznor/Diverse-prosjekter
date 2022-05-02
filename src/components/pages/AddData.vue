<template>
    <div class="column">

        <div class="tab-menu">
                <div class="tab-item">
                    <router-link class="tab-link" to="/add/veichles">
                        <h1>VEICHLES</h1>
                    </router-link>
                </div>
                <div class="tab-item">
                    <router-link class="tab-link" to="/add/soldiers">
                        <h1>SOLDIERS</h1>
                    </router-link>
                </div>
                <div class="tab-item">
                    <router-link class="tab-link" to="/add/missions">
                        <h1>MISSIONS</h1>
                    </router-link>
                </div>
        </div>

    </div>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.css'

export default{
}

</script>
<style>
.tab-parent{
    display: flex;
    justify-content: flex-start;
    margin: 0px;
    padding:0xp;
    border: 2px solid red;
}
.tab-item{
    list-style-type: none;
    color: black;
    background-color: #5a6039;
    padding: 20px;
    width: 33.33%;
    text-align: center;
    
}
.tab-link{
    color: black;
    text-decoration: none;
    font-weight: bolder;
}
.tab-link:hover{
    color:rgb(227, 239, 229);
}
.tab-menu{
    display: flex;
}
.center{
    width: 100%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.add-data-section{
    display: flex;
    width: 90%;
    justify-content: center;
    min-height: 90vh;
    background: white;
    margin: 20px;
    padding: 30px;
}
.defaultMargin{
    margin: 30px;
}
.column{
    display: flex;
    flex-direction: column;
    width: 100%;
}
</style>