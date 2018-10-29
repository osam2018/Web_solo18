<template>
    <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @select="handleSelect"
            @close="handleClose">
        <el-submenu index="Entry">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>선번장</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="Entry/Eps1">1층 Eps</el-menu-item>
                <el-menu-item index="Entry/Serverroom">서버실</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="Firewall">
            <i class="el-icon-menu"></i>
            <span>방화벽 현황</span>
        </el-menu-item>
        <el-submenu index="Room">
        <template slot="title">
            <i class="el-icon-location"></i>
            <span>기능실별 현황</span>
        </template>
        <el-menu-item-group>
            <el-menu-item index="Room/A">A</el-menu-item>
        </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class SideMenu extends Vue {
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
