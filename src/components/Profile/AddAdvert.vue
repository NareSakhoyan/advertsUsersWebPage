<template>
    <div>
        <div class="col-6 offset-sm-3">
            <h2>Register</h2>
            <form>
                <div class="form-group row">
                    <label for="imgUrl" class="col-sm-2 col-form-label">Image name: </label>
                    <div class="col-sm-10">
                        <input v-model="advert.imgUrl" type="text" class="form-control" id="imgUrl" placeholder="img.png">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="title" class="col-sm-2 col-form-label">Title: </label>
                    <div class="col-sm-10">
                        <input v-model="advert.title" type="text" class="form-control" id="title" placeholder="Apartment">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="shortDescription" class="col-sm-2 col-form-label">Short description: </label>
                    <div class="col-sm-10">
                        <input v-model="advert.shortDescription" type="text" class="form-control" id="shortDescription" placeholder="Apartment with two rooms in Yerevan">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="longDescription" class="col-sm-2 col-form-label">Long description: </label>
                    <div class="col-sm-10">
                        <textarea v-model="advert.longDescription" class="form-control" id="longDescription" placeholder=""></textarea>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="price" class="col-sm-2 col-form-label">Price: </label>
                    <div class="col-sm-10">
                        <input v-model="advert.price" type="text" class="form-control" id="price" placeholder="200$">
                    </div>
                </div>
                <router-link :to="`/profile/${userID}`"><button type="button" class="btn btn-primary" @click="saveAdvert">Add</button></router-link>
            </form>
        </div>
    </div>
</template>

<script>
    import AdvertDataService from "../../services/AdvertDataService";

    export default {
        name: "AddAdvert",
        data(){
            return{
                userID: this.$route.params.userID,
                advert: {
                    id:null,
                    userID: '',
                    imgUrl: '',
                    title: '',
                    shortDescription: '',
                    longDescription: '',
                    price: '',
                },
            };
        },
        methods: {
            saveAdvert() {
                console.log('from saveAdvert userID', this.userID)
                let data = {
                    userID: this.userID,
                    imgUrl: './'+this.advert.imgUrl+'/',
                    title: this.advert.title,
                    shortDescription: this.advert.shortDescription,
                    longDescription: this.advert.longDescription,
                    price: this.advert.price,
                };
                AdvertDataService.create(data)
                    .then(response => {
                        this.advert.id = response.data.id;
                        console.log(response.data)
                    })
                    .catch(e => {
                        console.log(e)
                    });
            }
        },
        mounted() {
            this.advert = {}
        }
    }
</script>

<style scoped>
</style>