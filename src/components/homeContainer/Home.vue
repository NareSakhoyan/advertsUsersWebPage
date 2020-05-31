<template>
    <div id="home">
        <div class="col-3 offset-1">
            <Categories />
        </div>
        <div class="col-8">
            <ItemList :itemList = "itemList" />
        </div>
    </div>
</template>

<script>
    import Categories from "./Categories";
    import ItemList from "./ItemList";
    import AdvertDataService from "../../services/AdvertDataService";

    export default {
        name: "Home",
        components: {
            Categories,
            ItemList
        },
        data() {
            return {
                itemList: []
            }
        },
        methods: {
            retrieveAdverts() {
                AdvertDataService.getAll()
                    .then(response => {
                        this.itemList = response.data;
                        console.log(response.data)
                    })
                    .catch(e => {
                        console.log(e)
                    })
            }
        },
        beforeMount() {
            this.retrieveAdverts()
        }
    }


</script>

<style scoped>

    #home{
        display: flex;
        flex-direction: row;
    }

</style>