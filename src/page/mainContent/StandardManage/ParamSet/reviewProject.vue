<template>
    <div class="addProject">
        <div class="addForm zll-form">
            <el-form :model="addForm" ref="addForm" class="demo-ruleForm">
                <el-row>
                    <el-col :span="12">
                        <el-form-item class="formList" prop="addFormData1" label="项目名称：">
                            <el-input clearable class="input_right" placeholder="请输入项目名称" v-model="addForm.addFormData1"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <div class="ss">
                            <span class="zll-search">搜索</span>
                            <span class="zll-search-reset">重置</span>
                        </div>
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
                <el-table-column fixed prop="tableInput1" label="项目名称">
                     <template slot-scope="scope">
                        <el-input v-model="scope.row.tableInput1"></el-input>
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
                { tableInput1: '' },
                { tableInput1: '' },
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
.ss {
    float: left;
}
.zll-search {
    background: #1890ff;
    border: 1px solid #1890ff;
    color: #ffffff;
    border-radius: 5px;
    text-align: center;
    display: inline-block;
    height: 26px;
    line-height: 26px;
    padding: 0 10px;
    cursor: pointer;    
    font-size: 12px;
    &:hover {
        transition: all .3s;
        opacity: .8;
    }
    margin-left: 20px;
    float: left;    
    margin-top: 3px;
}
.zll-search-reset {
    border: 1px solid #ccc;
    color: #aaaaaa;
    border-radius: 5px;
    text-align: center;
    display: inline-block;
    height: 26px;
    line-height: 26px;
    padding: 0 10px;
    cursor: pointer;
    margin-left: 10px;  
    font-size: 12px;
    &:hover {
        transition: all .3s;
        opacity: .8;
    }
    margin-top: 3px;
}
</style>