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
    import SideMenu from './Works/SideMenu.vue';
    import ToDo from './Works/Todo.vue';
    import Complete from './Works/Complete.vue';

    @Component({
        components: {
            SideMenu,
            ToDo,
            Complete
        }
    })
    export default class Works extends Vue {
        public activePage:string ="ToDo";

        handleOpen(key:string, keyPath:string) {
            console.log("open ", key, keyPath);
        }

        handleClose(key:string, keyPath:string) {
            console.log("close", key, keyPath);
        }

        handleSelect(key:string, keyPath:string){
            console.log("select", key, keyPath);
            this.$router.replace("/Work/"+key);
        }

    }
</script>

<style scoped>
</style>