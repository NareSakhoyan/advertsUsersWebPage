<template>
    <div id="profile">
        <div class="col-3 offset-1">
            <div class="profileMenu">
                <h6><span class="badge badge-info">Name:</span> Name</h6>
                <h6><span class="badge badge-info">Surname:</span> Surname</h6>
                <h6><span class="badge badge-info">Email:</span> example@gmail.com</h6></div>
            </div>
        <div class="col-8" >
            <ItemList :itemList = "itemList" />
            <router-link :to="`/addAdvert/${userID}`"><button type="button" class="btn btn-primary">Add</button></router-link>
        </div>
    </div>
</template>

<script>
    import ItemList from "./homeContainer/ItemList";
    import AdvertDataService from "../services/AdvertDataService";

    export default {
        name: "Profile",
        data(){
            return {
                itemList: [],
                userID: this.getUserID()
            }
        },
        components: {
            ItemList
        },
        methods: {
            getUserID() {
                let tmp = localStorage.token
                return tmp.slice(6, tmp.length);
            },
            retrieveAdverts() {
                console.log(',,,', this.userID)
                AdvertDataService.findAdvertsByUserID(this.userID)
                .then(response => {
                    this.itemList = response.data;
                    console.log('response.data in Profile: ', response.data)
                })
                .catch(e => {
                    console.log(e)
                })
            }
        },
        beforeMount() {
            this.retrieveAdverts();
        }
    }
</script>

<style scoped>
    #profile{
        display: flex;
        flex-direction: row;
    }
    div{
        overflow: hidden;
    }
    .profileMenu{
        box-shadow: 2px 0 #2c3e50;
        overflow: hidden;
    }
</style>