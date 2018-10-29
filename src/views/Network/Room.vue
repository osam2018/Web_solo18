<template>
    <el-container>
        <el-main><router-view/></el-main>
    </el-container>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import A from './Room/A.vue';

    @Component({
        components: {
            A
        }
    })
    export default class Room extends Vue {
        public activePage:string ="A";

        handleOpen(key:string, keyPath:string) {
            console.log("open ", key, keyPath);
        }

        handleClose(key:string, keyPath:string) {
            console.log("close", key, keyPath);
        }

        handleSelect(key:string, keyPath:string){
            console.log("select", key, keyPath);
            this.$router.replace("/Room/"+key);
        }

    }
</script>

<style scoped>

</style>