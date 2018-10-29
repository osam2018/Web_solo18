<template>
    <el-main>
        <div style="float: left">
        <h4 >어허! 일해야지!!</h4>
        <p>오늘 해야할 일</p>
        </div>
        <el-table
                :data="todo"
                style="width: 100%">
            <el-table-column type="expand">
                <template slot-scope="props">
                    <h2>상세내용</h2>
                    <p>{{ props.row.reqdetail }}</p>
                </template>
            </el-table-column>
            <el-table-column
                    prop="date"
                    label="접수일"
                    width="180">

            </el-table-column>
            <el-table-column
                    prop="name"
                    label="접수자"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="where"
                    label="위치"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="request"
                    label="요청내용">
            </el-table-column>

            <el-table-column
                    label="완료">
                <template slot-scope="scope">
                <el-popover
                        placement="right"
                        width="400"
                        trigger="click">
                    조치사항 입력 란 (백엔드 구현시 작동됩니다.)


                    <el-button slot="reference">완료하기</el-button>
                </el-popover>
                </template>
            </el-table-column>
        </el-table>
    </el-main>

</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class DashBoard extends Vue {
        public $http:any;
        private todo:string[]=[];
        private tododetail:string[]=[];
        async mounted(){
            let result  = await this.$http.get("./mockup_data/Works.json");
            console.log(result.data.todo);
            this.todo = result.data.todo;
        }
    }
</script>

<style scoped>
    .about{
        line-height: 30px;
    }
</style>