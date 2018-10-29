<template>

    <el-container>
        <el-header style="margin-top: 0;margin-bottom: 0">
            <h1 style="font-size: 35px; margin:  0; float: left"> 1층 EPS실</h1>
        </el-header>
        <el-container>
        <el-aside style="width: 40%;float: left">
            <el-tabs type="card" @tab-click="handleClick"  style="width:100%">
                <el-tab-pane label="인트라넷1">
                    <el-table
                            :data="switchdata2"
                            height = "450"
                            border
                            highlight-current-row
                            @current-change="handleCurrentChange"
                            @row-click = "onRowClick"
                            style="width: 100%">
                        <el-table-column
                                prop="index"
                                label="포트번호">
                        </el-table-column>
                        <el-table-column
                                prop="run"
                                label="사용여부">
                        </el-table-column>
                        <el-table-column
                                prop="patch"
                                label="패치넘버">
                        </el-table-column>
                        <el-table-column
                                prop="user"
                                label="사용자">
                        </el-table-column>
                        <el-table-column
                                prop="device"
                                label="장치">
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="인트라넷2">
                    <el-table
                            :data="switchdata"
                            height = "450"
                            border
                            highlight-current-row
                            @current-change="handleCurrentChange"
                            @row-click = "onRowClick"
                            style="width: 100%">
                        <el-table-column
                                prop="index"
                                label="포트번호">
                        </el-table-column>
                        <el-table-column
                                prop="run"
                                label="사용여부">
                        </el-table-column>
                        <el-table-column
                                prop="patch"
                                label="패치넘버">
                        </el-table-column>
                        <el-table-column
                                prop="user"
                                label="사용자">
                        </el-table-column>
                        <el-table-column
                                prop="device"
                                label="장치">
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="인터넷">
                    <el-table
                            :data="switchdata2"
                            height = "450"
                            border
                            highlight-current-row
                            @current-change="handleCurrentChange"
                            @row-click = "onRowClick"
                            style="width: 100%">
                        <el-table-column
                                prop="index"
                                label="포트번호">
                        </el-table-column>
                        <el-table-column
                                prop="run"
                                label="사용여부">
                        </el-table-column>
                        <el-table-column
                                prop="patch"
                                label="패치넘버">
                        </el-table-column>
                        <el-table-column
                                prop="user"
                                label="사용자">
                        </el-table-column>
                        <el-table-column
                                prop="device"
                                label="장치">
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="전장망">
                    <el-table
                            :data="switchdata"
                            height = "450"
                            border
                            highlight-current-row
                            @current-change="handleCurrentChange"
                            @row-click = "onRowClick"
                            style="width: 100%">
                        <el-table-column
                                prop="index"
                                label="포트번호">
                        </el-table-column>
                        <el-table-column
                                prop="run"
                                label="사용여부">
                        </el-table-column>
                        <el-table-column
                                prop="patch"
                                label="패치넘버">
                        </el-table-column>
                        <el-table-column
                                prop="user"
                                label="사용자">
                        </el-table-column>
                        <el-table-column
                                prop="device"
                                label="장치">
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
            </el-tabs>
        </el-aside>
        <el-main style="width: 40%">
            <el-card class="box-card" style="height: 250px">
            <div slot="header" class="clearfix">
                <span>작업 이력</span>
            </div>
                <div v-for="item in switchn">
                        {{item.switch}}
                </div>
                <div v-for="item in dataArr">
                    port : {{item.index}}
                </div>
                <h1>현재 창은 작업 이력이 나오는 창입니다. (백엔드 구현시 작동예정)</h1>
        </el-card >
            <el-card class="box-card" style="height: 200px; margin-top: 30px">
                <div slot="header" class="clearfix">
                    <span>검색</span>
                </div>
                <div style="margin-top: 3px;">
                    <el-input placeholder="Please input" v-model="input5" class="input-with-select">

                        <el-button slot="append" icon="el-icon-search"></el-button>

                    </el-input>
                    <h1>이곳은 조회 결과가 나오는 영역입니다.(백엔드 구현시 작동예정)</h1>
                </div>
            </el-card>
        </el-main>
        </el-container>
    </el-container>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component({
        components: {}
    })
    export default class DashBoard extends Vue {
        public $http:any;
        private switchdata:string[]=[];
        private switchdata2:string[]=[];
        private dataArr: any[]= [];
        private switchn: string[]=[];

        async mounted(){
            let result  = await this.$http.get("./mockup_data/Switch.json");
            console.log(result.data.switch1);
            this.switchdata = result.data.switch1;
            this.switchdata2 = result.data.switch2;

        }
        onRowClick(row) {
            let obj = {
                "dest":row.dest,
                "device":row.device,
                "index":row.index,
                "patch":row.patch,
                "run":row.run,
                "user":row.user,
            }
            this.dataArr.pop();
            this.dataArr.push(obj);

            // window.$globalBus.$emit("addData", obj);
        }
        handleClick(row){
            let obj={
                "switch":row._props.label,
            }
            this.switchn.pop();
            this.switchn.push(obj);
        }
    }


</script>

<style scoped>
    .about{
        line-height: 30px;
    }
    .el-select .el-input {
        width: 110px;
    }
    .input-with-select .el-input-group__prepend {
        background-color: #fff;
    }
</style>