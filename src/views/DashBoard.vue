<template>
    <el-container class="Dashboard">
        <el-main>
            <el-row :gutter="30">
                <el-col :span="8"><div class="grid-content bg-purple">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>오늘 해야할 일</span>
                        </div>
                        <div v-for="list in todo" class="text item">
                           {{list.request}}
                        </div>
                    </el-card>
                </div></el-col>
                <el-col :span="8"><div class="grid-content bg-purple">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>잊어버릴만한 것 들</span>
                            <el-popover
                                    placement="top"
                                    width="160"
                                    v-model="visible2">
                                <p>백 엔드 구현시 작동예정.</p>
                                <div style="text-align: right; margin: 0">
                                    <el-button size="mini" type="text" @click="visible2 = false">cancel</el-button>
                                    <el-button type="primary" size="mini" @click="visible2 = false">confirm</el-button>
                                </div>
                                <el-button slot="reference" style="float: right">수정</el-button>
                            </el-popover>
                        </div>
                        <div class="text item">
                            {{simpleman}}
                        </div>
                    </el-card>
                </div></el-col>
                <el-col :span="8"><div class="grid-content bg-purple">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>주요 연락처</span>
                            <el-popover
                                    placement="top"
                                    width="160"
                                    v-model="visible2">
                                <p>백 엔드 구현시 작동예정.</p>
                                <div style="text-align: right; margin: 0">
                                    <el-button size="mini" type="text" @click="visible2 = false">cancel</el-button>
                                    <el-button type="primary" size="mini" @click="visible2 = false">confirm</el-button>
                                </div>
                                <el-button slot="reference" style="float: right">수정</el-button>
                            </el-popover>
                        </div>
                        <div v-for="item in call" class="text item">
                            {{item.name}}: {{item.num}}
                        </div>
                    </el-card>
                </div></el-col>
            </el-row>
            <el-row :gutter="30" style="margin-top: 50px">
                <el-col :span="8"><div class="grid-content bg-purple">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>D-Days</span>
                            </div>
                        <div v-for="item in dday" class="text item" style="font-size: 30px">
                            {{item.name}}바꾸기까지 <br> D-{{item.day}}
                        </div>
                    </el-card>
                </div></el-col>
                <el-col :span="8"><div class="grid-content bg-purple">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>간단 메모장</span>
                        </div>
                        <el-input
                                type="textarea"
                                :rows="8"
                                placeholder=""
                                v-model="textarea" >
                        </el-input>
                    </el-card>
                    </div></el-col>
                <el-col :span="8"><div class="grid-content bg-purple">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>근무자 현황</span>
                        </div>
                        <el-input
                                type="textarea"
                                :rows="8"
                                placeholder=""
                                v-model="textarea" >
                        </el-input>
                    </el-card>
                </div></el-col>
            </el-row>


        </el-main>

        <el-footer>Footer</el-footer>
    </el-container>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

    @Component({
        components: {

        }
    })
    export default class DashBoard extends Vue {
        public $http:any;
        private simpleman:string[]=[];
        private call:string[]=[];
        private dday:string[]=[];
        private  todo:string[]=[];
        async mounted(){
            let result  = await this.$http.get("./mockup_data/Dash.json");


            console.log(result.data);
            this.simpleman=result.data.simpleman
            this.call=result.data.call;
            this.dday=result.data.Dday;
            result  = await this.$http.get("./mockup_data/Works.json");
            this.todo = result.data.todo;
        }
    }



</script>

<style scoped>

    .text {
        font-size: 14px;
    }

    .item {
        margin: 0;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 100%;
        height: 270px;
        margin: 0;
    }


</style>