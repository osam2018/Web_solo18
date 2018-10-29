<template>
    <el-table
            :data="firewall"
            style="width: 100%">
        <el-table-column
                prop="ip"
                label="IP"
                width="180">
        </el-table-column>
        <el-table-column
                prop="protocol"
                label="프로토콜"
                width="180">
        </el-table-column>
        <el-table-column
                prop="usage"
                label="사용지">
        </el-table-column>
        <el-table-column
                prop="permit"
                label="책임자">
        </el-table-column>
        <el-table-column
                label="Operations">
            <template slot-scope="scope">
                <el-popover
                        placement="top"
                        width="160"
                        v-model="visible2">
                    <p>정말 지우겠습니까?</p>
                    <div style="text-align: right; margin: 0">
                        <el-button size="mini" type="text" @click="visible2 = false">취소</el-button>
                        <el-button type="primary" size="mini" @click="visible2 = false">네.지우겠습니다.</el-button>
                    </div>
                    <el-button slot="reference">Delete</el-button>
                </el-popover>
            </template>
        </el-table-column>
    </el-table>

</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class DashBoard extends Vue {
        public $http:any;
        private firewall:string[]=[];
        async mounted(){
            let result  = await this.$http.get("./mockup_data/firewall.json");
            console.log(result.data.firewall);
            this.firewall = result.data.firewall;
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
