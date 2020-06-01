<template>
    <div id="showAdvert">
        <div class="container">
            <div class="row-4" style="width: 30rem;">
                <img :src="getImage(img)" class="card-img" alt="...">
            </div>
            <div class="row-8">
                <form>
                    <div class="form-group">
                        <label for="title">Title: </label>
                        <input type="text" class="form-control" id="title" v-model="advert.title">
                    </div>
                    <div class="form-group">
                        <label for="shortDescription">Short description: </label>
                        <input type="text" class="form-control" id="shortDescription" v-model="advert.shortDescription">
                    </div>
                    <div class="form-group">
                        <label for="longDescription">Long description: </label>
                        <textarea class="form-control" id="longDescription" v-model="advert.longDescription" rows="3"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="price">Price: </label>
                        <input type="text" class="form-control" id="price" v-model="advert.price">
                    </div>
                    <div class="form-group">
                        <label for="price">Image Name: </label>
                        <input type="text" class="form-control" id="imgSrc" v-model="advert.imgSrc">
                    </div>
                    <div class="editTools">
                        <router-link :to="`/profile/${advert.userID}`"><button type="button" class="btn btn-outline-danger" @click="deleteAdvert()">Delete</button></router-link>
                        <router-link :to="`/profile/${advert.userID}`"><button type="button" class="btn btn-outline-warning" @click="updateAdvert()">Update</button></router-link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import AdvertDataService from "../services/AdvertDataService";

    export default {
        name: "showAdvert",
        data() {
            return {
                advertID: this.$route.params.id,
                advert: {
                    userID: '',
                    imgSrc: '',
                    title: '',
                    shortDescription: '',
                    longDescription: '',
                    price: '',
                },
                img: ''
            }
        },
        methods: {
            getImage(src){
                if (!src){
                    src = './logo.png'
                }
                let image = require.context('@/assets/', false)
                return image(src)
            },
            getAdvertByID() {
                AdvertDataService.get(this.advertID)
                .then(response => {
                    this.advert = response.data
                    this.img = this.advert.imgSrc
                })
                .catch(e => {
                    console.log(e)
                })
            },
            deleteAdvert() {
                AdvertDataService.delete(this.advertID)
                    .then(response => {
                        console.log(response.data)
                    })
                    .catch(e => {
                        console.log(e)
                    })
            },
            updateAdvert() {
                console.log('before Update this advert:', this.advert)
                AdvertDataService.update(this.advertID, this.advert)
                    .then(response => {
                        console.log(response.data)
                    })
                    .catch(e => {
                        console.log(e)
                    })
            },
        },
        beforeMount() {
           this.getAdvertByID()
        }
    }
</script>

<style scoped>
    .btn-outline-danger{
        margin-right: 50px;
    }
    form{

    }
</style>