<template>
        <el-container>
            <el-main><router-view/></el-main>
        </el-container>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import Eps1f from './Entry/Eps.vue';
    import Serverroom from './Entry/Serverroom.vue';

    @Component({
        components: {
            Eps1f,
            Serverroom
        }
    })
    export default class Entry extends Vue {
        public activePage:string ="Eps1f";

        handleOpen(key:string, keyPath:string) {
            console.log("open ", key, keyPath);
        }

        handleClose(key:string, keyPath:string) {
            console.log("close", key, keyPath);
        }

        handleSelect(key:string, keyPath:string){
            console.log("select", key, keyPath);
            this.$router.replace("/Entry/"+key);
        }

    }
</script>

<style scoped>
</style>