<template>
    <div class="addProject">
        <div class="addForm zll-form">
            <el-form :model="addForm" ref="addForm" class="demo-ruleForm">
                <el-row>
                    <el-col :span="12">
                        <el-form-item class="formList" prop="addFormData1" label="等级：">
                            <el-input clearable class="input_right" placeholder="请输入等级" v-model="addForm.addFormData1"></el-input>
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
                <el-table-column fixed prop="tableInput1" label="等级" width="150">
                     <template slot-scope="scope">
                        <el-input v-model="scope.row.tableInput1"></el-input>
                    </template>
                </el-table-column>
                <el-table-column fixed prop="tableInput2" label="说明">
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
                { tableInput1: 'A',tableInput2: '对产品质量有直接影响的物料' },
                { tableInput1: 'B',tableInput2: '对产品质量及安全有影响但程度非常有限的物料' },
                { tableInput1: 'C',tableInput2: '对药品质量基本没有影响的物料' },
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
            this.$confirm('确定删除？', '提示', {       
                distinguishCancelAndClose: true,
                cancelButtonText: '取消',
                confirmButtonText: '确定',
            }).then(() => {
                rows.splice(index, 1);
                this.$message.success("已删除")
                this.getTableList()

            }).catch(() => {
                this.$message.info("已取消")          
            });
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