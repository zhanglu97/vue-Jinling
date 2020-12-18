<template>
    <div class="addProject">
        <div class="addForm zll-form">
            <el-form :model="addForm" ref="addForm" class="demo-ruleForm">
                <el-row>
                    <el-col :span="12">
                        <el-form-item class="formList" prop="addFormData1" label="检项名称：">
                            <el-input clearable class="input_right" placeholder="请输入检项名称" v-model="addForm.addFormData1"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <div class="mine-add ss">
                            <span class="el-icon-circle-plus" @click="addTable"></span>
                        </div>
                    </el-col>
                </el-row>
            </el-form>
        </div>
        <div class="Table_body zll-table">
            <el-table border style="width: 100%" tooltip-effect="dark" 
                :data="tableData" 
            >
                <el-table-column fixed prop="tableInput1" label="检项代码" width="150">
                     <template slot-scope="scope">
                        <el-input v-model="scope.row.tableInput1"></el-input>
                    </template>
                </el-table-column>
                <el-table-column fixed prop="tableInput2" label="检项名称">
                     <template slot-scope="scope">
                        <el-input v-model="scope.row.tableInput2"></el-input>
                    </template>
                </el-table-column>
                <el-table-column fixed="right" label="操作" width="100">
                    <template slot-scope="scope">
                        <el-button @click="edit(scope.row)" type="text" size="small">编辑</el-button>
                        <el-button type="text" size="small" @click="deleteRow(scope.index, tableData)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tableData: [
                { tableInput1: 'J001',tableInput2: '性状' },
                { tableInput1: 'J002',tableInput2: '溶出度' },
                { tableInput1: 'J003',tableInput2: '高铁' },
                { tableInput1: 'J004',tableInput2: '琥珀酸' },
                { tableInput1: 'J005',tableInput2: '熔点' },
            ],
            addForm: {
                addFormData1: '',
            },
        };
    },
    methods: {
        addTable() { //增加table
            this.tableData.push({
                tableInput1: "",
                tableInput2: "",
            });
        },
        deleteRow(index, rows) {
            rows.splice(index, 1);
        },
        edit(row) {
            console.log(row)
        },
        setFormData() {
            this.$emit("addForm", this.tableData);
        },
    },
};
</script>
<style lang="scss" scoped>
@import "@/assets/style/dialog.scss";
</style>