<template>
    <div id="itemList">
        <Item v-for="(i, index) of this.itemList" :card="i" :key="`card${index}`"/>
    </div>
</template>

<script>
    import Item from "./Item";

    export default {
        name: "ItemList",
        props: {
            itemList: Array
        },
        // data (){
        //     return {
        //         cards: [
        //             {
        //                 card: {
        //                     imgSrc: './logo.png',
        //                     title: 'Title is Something',
        //                     shortDescription: 'And there comes a little description',
        //                     longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        //                     price: '5000$'
        //                 }
        //             },
        //         ]
        //     }
        // },
        methods: {
          getItemList(){

          }
        },
        components: {Item}
    }
</script>

<style scoped>

</style>