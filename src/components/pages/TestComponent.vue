<template>
    <div class="flextest">
        <card-component> </card-component>
        <card-component> </card-component>
        <card-component> </card-component>
        <card-component> </card-component>
    </div>
</template>


<script>
import CardComponent from '../component-items/CardComponent.vue'
export default {
   components: {CardComponent}
}

</script>
<style scoped>
.flextest{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>
