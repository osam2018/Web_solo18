<template>
    <el-main >
        <div style="float: left">
        <h4>많이도 했네</h4>
        <p >완료한 작업</p>

        </div>
        <div style="float:right">
            <el-input placeholder="검색" v-model="input5" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input></div>
        <el-table
                :data="done"
                style="width: 100%">
            <el-table-column type="expand">
                <template slot-scope="props">
                    <h2>상세내용</h2>
                    <p>{{ props.row.reqdetail }}</p>
                    <h2>조치사항</h2>
                    <p>{{props.row.what}}</p>
                </template>
            </el-table-column>
            <el-table-column
                    prop="date"
                    label="완료한 시간"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="작업자"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="request"
                    label="작업내용">
            </el-table-column>
        </el-table>
    </el-main>

</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class DashBoard extends Vue {
        public $http:any;
        private done:string[]=[];
        async mounted(){
            let result  = await this.$http.get("./mockup_data/Works.json");
            console.log(result.data.done);
            this.done = result.data.done;
        }
    }
</script>

<style scoped>
    .about{
        line-height: 30px;
    }
</style>