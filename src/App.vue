<template>

      <el-container id="app">
          <el-header>
              <title>네트워크반</title>
              <a href="/" style="text-decoration:none;color: black">네트워크반입니다. 무엇을도와드립니까</a>
          </el-header>

              <div id="nav" style="margin-left: 5%;margin-right:5%">
                  <el-menu :default-active="activePage" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                      <el-menu-item index="Dashboard">Dashboard</el-menu-item>
                      <el-submenu index="Works">
                          <template slot="title">작업현황</template>
                          <el-menu-item index="Works/ToDo">해야할 작업</el-menu-item>
                          <el-menu-item index="Works/Complete">완료된 작업</el-menu-item>
                      </el-submenu>
                      <el-submenu index="NetWork">
                          <template slot="title">N/W현황</template>
                          <el-submenu index="Info">
                              <template slot="title">N/W정보</template>
                              <el-menu-item index="Network/Entry/Eps1">1층 EPS실</el-menu-item>
                              <el-menu-item index="Network/Entry/Serverroom">서버실</el-menu-item>
                          </el-submenu>
                          <el-menu-item index="Network/FireWall">방화벽 등록 현황</el-menu-item>
                          <el-menu-item index="Network/Room/A">기능실별 현황</el-menu-item>
                      </el-submenu>
                      <el-menu-item index="About" style="float: right">작업접수</el-menu-item>
                  </el-menu>
              </div>
        <el-main>
          <router-view/>
        </el-main>
          <el-footer>This Page Is Made By Codingnome in OSAM<br>ROK.Army 3Corps</el-footer>
      </el-container>
</template>
<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    @Component({

    })
    export default class Home extends Vue {
        public activePage:string ="home";
        handleSelect(key:string, keyPath:string) {
            this.$router.replace("/"+key);
        }
    }
</script>

<style >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.el-header{
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 3%;
    margin-bottom: 3%;
    font-size:  40px;
    color: #333;
    text-align: center;

}
.el-footer{
    background-color: #B3C0D1;
    color: #333;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0;
    padding: 0;
    text-align: center;

}
.el-aside {
    color: #333;
    text-align: center;
}

.el-main {
    color: #333;
    text-align: center;

}

body > .el-container {
    margin-bottom: 40px;
}



</style>
