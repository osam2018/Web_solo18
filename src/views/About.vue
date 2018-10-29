<template>
    <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="접수자">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="위치">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="접수내용">
            <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">접수</el-button>
        </el-form-item>
    </el-form>

</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';



        export default {
        data() {
            return {
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        }
    }

</script>

<style scoped>
    .about{
        line-height: 30px;
    }
</style>