<template>
    <div id="item">
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row no-gutters">
                <div class="col-md-4">
                    <img :src="getImage(this.$props.card.imgSrc)" class="card-img" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{{this.$props.card.title}}</h5>
                        <p class="card-text">{{this.$props.card.shortDescription}}</p>
<!--                        <p class="card-text">{{this.$props.card.longDescription}}</p>-->
                        <p class="card-text">{{this.$props.card.price}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Item",
        props: {
            card: Object
        },
        methods: {
            getImage(src){
                if (!src){
                    src = './logo.png'
                }
                let image = require.context('@/assets/', false)
                return image(src)
            }
        }
    }
</script>

<style scoped>

</style>