<template>
    <div id="itemList">
        <Advert v-for="(i, index) of this.itemList" :card="i" :key="`card${index}`"/>
    </div>
</template>

<script>
    import Advert from "./Advert";

    export default {
        name: "ItemList",
        props: {
            itemList: Array
        },
        components: {Advert}
    }
</script>

<style scoped>

</style>