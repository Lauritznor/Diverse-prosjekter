<template>
    <div class="column">

<h2 style="text-align: center;">KONFIGURER</h2>

        <div class="tab-menu">
                <div class="tab-item">
                    <router-link class="tab-link" to="/add/veichles">
                        <h1>KJØRETØY</h1>
                    </router-link>
                </div>

                <div class="tab-item">
                    <router-link class="tab-link" to="/add/soldiers">
                        <h1>SOLDATER</h1>
                    </router-link>
                </div>

                <div class="tab-item">
                    <router-link class="tab-link" to="/add/missions">
                        <h1>OPPDRAG</h1>
                    </router-link>
                </div>
                <div class="tab-item">
                    <router-link class="tab-link" to="/add/weapons">
                        <h1>VÅPEN</h1>
                    </router-link>
                </div>

        </div>

    </div>
</template>
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
.tab-item:nth-child(odd){
    background-color: #6b7245;
}
.tab-item:hover{
    background-color: #a3aa83;
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
/* FOR DATA INSERTS */
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
    margin: 40px 0px;
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