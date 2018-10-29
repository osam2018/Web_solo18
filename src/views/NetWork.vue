<template>
    <el-container>
        <el-aside width="280px" >
            <side-menu></side-menu>
        </el-aside>
        <el-container>
            <el-main><router-view/></el-main>
        </el-container>
    </el-container>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import SideMenu from './Network/SideMenu.vue';
    import Eps1 from './Network/Entry/Eps.vue';
    import Serverroom from './Network/Entry/Serverroom.vue';
    import A from './Network/Room/A.vue';
    import Firewall from './Network/Firewall.vue';

    @Component({
        components: {
            SideMenu,
            Eps1,
            Serverroom,
            A,
            Firewall
        }
    })
    export default class Works extends Vue {
        public activePage:string ="Eps1";

        handleOpen(key:string, keyPath:string) {
            console.log("open ", key, keyPath);
        }

        handleClose(key:string, keyPath:string) {
            console.log("close", key, keyPath);
        }

        handleSelect(key:string, keyPath:string){
            console.log("select", key, keyPath);
            this.$router.replace("/Network/"+key);
        }

    }
</script>

<style scoped>
</style>