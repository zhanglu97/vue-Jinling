<template>
    <div class="addProject">
        <div class="addForm zll-form">
            <div class="mine-add">
                <span class="el-icon-circle-plus" @click="addTable"></span>
                <span class="el-icon-remove-outline" @click.stop="deleteTable"></span>
            </div>
            <div class="tableList">
                <table border="1">
                    <tr>
                        <th width="50"></th><th width="50">代码</th>
                        <th>资质名称</th>
                        <th width="100">登记编号</th>
                        <th width="100">有效期止</th>
                        <th width="50">上传</th>
                        <th width="50">全选</th>
                    </tr>
                    <tr class="add_Table" v-for="(item, index) in tableData"  :key="index">
                        <td width="50">
                            <span class="checkStyle" @click="checkList(index)">
                                <i class="el-icon-check" v-show="item.list"></i>
                                <i class="no-check" v-show="!item.list"></i>
                            </span>
                        </td>
                        <td width="50">{{ index + 1 }}</td>
                        <td><el-input clearable v-model="item.table1" placeholder=""></el-input></td>
                        <td width="100"><el-checkbox v-model="item.table2"></el-checkbox></td>
                        <td width="100"><el-checkbox v-model="item.table3"></el-checkbox></td>
                        <td width="50"><el-checkbox v-model="item.table4"></el-checkbox></td>
                        <td width="50"><el-checkbox v-model="item.table5" @change="checked=>isAllClick(checked, item)"></el-checkbox></td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            tableData:[
                { list:false,table1: '营业执照',table2: false,table3: false,table4: false,table5: false, },
            ],
            addForm: {
                addFormData1: '',
            },
            rules: {
				addFormData1: [
					{ required: true, message: "请输入物料名称", trigger: "blur", },
				],
            },
        }
    },
    methods: {
        addTable(){//增加table
            this.tableData.push({ list:false,table1: '',table2: '',table3: false,table4: false,table5: false, })
        },
        checkList(index){
            this.tableData[index].list = !this.tableData[index].list;
        },
        deleteTable(){//删除table
            if(this.tableData.length == 1){
                this.$message.warning('不能少于一列!');
                return false
            }else{
                this.tableData = this.tableData.filter(e => {
                    return !e.list
                })
            }
        },
        isAllClick( val, item ) {//全选
            if( val == true ) {
                item.table2 = true
                item.table3 = true
                item.table4 = true
            }else {
                item.table2 = false
                item.table3 = false
                item.table4 = false
            }
        },
        setFormData(formName){
            let formdata = {
                ...this.addForm,
                'tableData': [...this.tableData]
            }
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$emit('addForm',formdata)
                }else {
                    return false
                }
            })
        },
    },
    mounted() {
        
    },
    components: {
    }
}
</script>

<style scoped lang="scss">
    @import "@/assets/style/dialog.scss";
    .form_left {
        width: 72px;
        height: 32px;
        line-height: 32px;
        text-align: right;
        display: inline-block;
        color: #606266;
        margin-top: 10px
    }
    .tableList {
        margin-top: 0px !important;
    }
</style>
