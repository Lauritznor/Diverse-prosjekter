<template>
    <section class="homepage-section">
        <article class="homepage-content">
            <h1>Heisann!</h1>
            <p>
                Dette er en applikasjon som er laget for å få oversikt over de ulike resurssene til det norske forsvaret.<br>
                På siden får du oversikt over de ulike forsvarsgrenene, soldatene, kjøretøyene og oppdragene.<br> <br>
                Den er laget for å kun brukes av forsvarets ansatte og ingen andre. Å ikke overholde dette vil bryte Rolandoloven § 2 og kan straffes med intill 2 ukers lorem skriving uten pause. Så dersom du ikke er en del av det norske forsvaret ber vi deg forlate nettsiden nå.
            </p>
            <h3>Oversikt</h3>
            <p>
                På "oversikt" siden vil du kunne se alle de ulike ressursene og oppdragene som er lagret i databasen vår. Du kan velge mellom ulike forsvarsgrener og typer informasjon. 
            </p>
            <h3>Legg til data</h3>
            <p>
                På "Legg til data" siden vil du kunne redigere og aksessere data fra databasen vår.
            </p>
            <img class="forsvaretImage" v-bind:src="require('../../assets/images/forsvaret.jpg')" />
        </article>
    </section>
</template>
<style>
.homepage-section{
    width: 100%;
    display: flex;
    justify-content: center;
}
.homepage-content{
    width: 80%;
    margin: 20px;
    padding: 20px; 
    background-color: white;
}
.forsvaretImage{
    width: 100%;
}

</style>