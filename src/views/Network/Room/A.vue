<template>
    <el-main >
        <img src="./a.jpg" style="float:left; padding-right: 150px"></img>
        <template>
            <el-table
                    :data="tableData"
                    style="width: 45%">
                <el-table-column
                        prop="no"
                        label="자리번호">
                </el-table-column>
                <el-table-column
                        prop="patch"
                        label="패치번호">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="이름">
                </el-table-column>
                <el-table-column
                        prop="job"
                        label="직책">
                </el-table-column>
                <el-table-column
                        prop="machine"
                        label="사용장비">
                </el-table-column>
                <el-table-column
                        prop="nat"
                        label="망 종류">
                </el-table-column>
            </el-table>
        </template>
    </el-main>

</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

    export default {
        data() {
            return {
                tableData: [{
                    no: '1',
                    patch: '1-1',
                    name: '대위 김코딩',
                    job: '중대장',
                    machine: 'pc',
                    nat: '인트라넷'
                }, {
                    no: '1',
                    patch: '1-2',
                    name: '대위 김코딩',
                    job: '중대장',
                    machine: 'voip',
                    nat: '인트라넷'
                },{
                    no: '1',
                    patch: '2-1',
                    name: '대위 김코딩',
                    job: '중대장',
                    machine: '전용단말',
                    nat: '인터넷'
                },{
                    no: '1',
                    patch: '1-4',
                    name: '대위 김코딩',
                    job: '중대장',
                    machine: '전용단말',
                    nat: '전장망'
                }]
            }
        }
    }
</script>

<style scoped>
    .about{
        line-height: 30px;
    }
</style>