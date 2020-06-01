<template>
    <div id="profile">
        <div class="col-3 offset-1">
            <div class="profileMenu">
                <h6><span class="badge badge-info">Name:</span> {{user.name}}</h6>
                <h6><span class="badge badge-info">Surname:</span> {{user.surname}}</h6>
                <h6><span class="badge badge-info">Email:</span> {{user.email}}</h6></div>
            </div>
        <div class="col-8" >
            <ItemList :itemList = "itemList" />
            <router-link :to="`/addAdvert/${userID}`"><button type="button" class="btn btn-primary">Add</button></router-link>
        </div>
    </div>
</template>

<script>
    import ItemList from "../homeContainer/AdvertsList";
    import AdvertDataService from "../../services/AdvertDataService";
    import UserDataService from "../../services/UserDataService";

    export default {
        name: "Profile",
        data(){
            return {
                itemList: [],
                userID: this.$route.params.id,
                user: {}
            }
        },
        components: {
            ItemList
        },
        methods: {
            getAdvertsByUserID() {
                console.log(`this.userID: ${this.userID}`)
                AdvertDataService.findAdvertsByUserID(this.userID)
                .then(response => {
                    this.itemList = response.data;
                    console.log('itemlist by userid', response.data)
                })
                .catch(e => {
                    console.log(e)
                })
            },
            getUserByUserID(){
                UserDataService.get(this.userID)
                .then(response => {
                    console.log('user by userid', response.data)
                    this.user = response.data;
                })
                .catch(e => {
                    console.log(e);
                })
            }
        },
        beforeMount() {
            this.getAdvertsByUserID();
            this.getUserByUserID();
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