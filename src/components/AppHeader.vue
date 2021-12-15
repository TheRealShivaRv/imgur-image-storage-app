<template>
    <div class="ui secondary pointing menu">
        <router-link to="/" class="active item">
            Image Storage
        </router-link>        
        <div v-if="isLoggedIn" class="right menu">
            <router-link to="/upload" href="#" class="item">Upload</router-link>
            <router-link to="/" href="#" class="item">Gallery</router-link>
            <a href="#" class="item"  @click="logout">Logout</a>
        </div>
        <div v-else class="right menu">
            <a href="#" class="ui item" @click="login">Login</a>
        </div>
    </div>
</template>
<script>
import {mapActions,mapGetters} from 'vuex';
export default {
    name: 'AppHeader',
    computed: mapGetters(['isLoggedIn']),
    methods:{
        ...mapActions(['login','logout']),
    }
}
</script>
<style>

</style>