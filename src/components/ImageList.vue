<template>
    <div v-if="isLoggedIn" class="image-container">     
        <img v-for="image in allImages" :key="image.id" :src="image.link" width="400"/>
    </div>
    <h2 v-else>
        Login to your account to see your images uploaded to Imgur!
    </h2>
</template>
<script>
import {mapActions,mapGetters} from 'vuex'
export default {
    name: 'ImageList',
    computed: {
         ...mapGetters(['allImages','isLoggedIn']),    
    },
    methods:{
        ...mapActions(['fetchImages']),  
            
    },    
    created(){
        if(this.isLoggedIn) this.fetchImages();
    }
}
</script>
<style scoped>
.image-container{
    column-count: 3;
    column-gap: 0;
}
img{
    max-width: 100%;
    padding: 5px;
}
</style>