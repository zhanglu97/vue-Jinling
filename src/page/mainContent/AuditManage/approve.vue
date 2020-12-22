<template>
    <div class="AddAccess">
        <div class="page">
            <h1>供应商物料准入申请审计
                <div class="top top2">
                    <p class="zll-botton goback" @click="close()" >返 回</p>
                </div>
            </h1>
            <div class="Search_Top_Input isLeft">
                <div class="search_list" style="width: 100% !important">
                    <div class="input_flex">
                        <span class="search_left">申请人：</span>
                        <el-input clearable v-model="addData.data1" placeholder="" :disabled="isdisable"></el-input>
                    </div>
                    <div class="input_flex">
                        <span class="search_left">状态：</span>
                        <el-select clearable v-model="addData.data2" placeholder="" :disabled="isdisable">
                            <el-option label="未提交" value="未提交"></el-option>
                            <el-option label="审计中" value="审计中"></el-option>
                            <el-option label="现场审计" value="现场审计"></el-option>
                            <el-option label="驳回" value="驳回"></el-option>
                            <el-option label="合格" value="合格"></el-option>
                        </el-select>
                    </div>
                    <div class="input_flex">
                        <span class="search_left">申请日期：</span>
                        <el-date-picker v-model="addData.data3" type="date" placeholder="" value-format="yyyy-MM-dd" :disabled="isdisable"></el-date-picker>
                    </div>
                    <div class="input_flex">
                        <span class="search_left">申请号：</span>
                        <el-input clearable v-model="addData.data4" placeholder="" :disabled="isdisable"></el-input>
                    </div>
                </div>
            </div>
            <div>
                <el-row :gutter="20">
                    <el-col :span="8">
                        <table border="1" class="mainTable">
                            <tr>
                                <td class="column">物料类别</td>
                                <td>
                                    <el-select clearable v-model="tableData1.data1" placeholder="" :disabled="isdisable">
                                        <el-option label="原料" value="原料"></el-option>
                                        <el-option label="辅料" value="辅料"></el-option>
                                        <el-option label="包装材料" value="包装材料"></el-option>
                                        <el-option label="试剂" value="试剂"></el-option>
                                    </el-select>
                                </td>
                            </tr>
                            <tr>
                                <td class="column">物料名称</td>
                                <td><el-input clearable v-model="tableData1.data2" placeholder="" :disabled="isdisable"></el-input></td>
                            </tr>
                            <tr>
                                <td class="column">等级</td>
                                <td>
                                    <el-select clearable v-model="tableData1.data3" placeholder="" :disabled="isdisable">
                                        <el-option label="A" value="A"></el-option>
                                        <el-option label="B" value="B"></el-option>
                                        <el-option label="C" value="C"></el-option>
                                    </el-select>
                                </td>
                            </tr>
                            <tr>
                                <td class="column">物料编码</td>
                                <td><el-input clearable v-model="tableData1.data4" placeholder="" :disabled="isdisable"></el-input></td>
                            </tr>
                            <tr>
                                <td class="column">样品检验</td>
                                <td> <el-checkbox v-model="tableData1.data5" :disabled="isdisable" @change="isCheckout"></el-checkbox></td>
                            </tr>
                        </table>
                    </el-col>
                    <el-col :span="16">
                        <table border="1" class="mainTable">
                            <tr>
                                <td class="column">企业名称</td>
                                <td><el-input clearable v-model="tableData2.data1" placeholder="" :disabled="isdisable"></el-input></td>
                                <td class="column">性质</td>
                                <td>
                                    <el-select clearable v-model="tableData2.data10" placeholder="" :disabled="isdisable">
                                        <el-option label="生产厂" value="生产厂"></el-option>
                                    </el-select>
                                </td>
                            </tr>
                            <tr>
                                <td class="column">统一代码</td>
                                <td><el-input clearable v-model="tableData2.data2" placeholder="" :disabled="isdisable"></el-input></td>
                                <td class="column">网址</td>
                                <td><el-input clearable v-model="tableData2.data3" placeholder="" :disabled="isdisable"></el-input></td>
                            </tr>
                            <tr>
                                <td class="column">住所</td>
                                <td><el-input clearable v-model="tableData2.data4" placeholder="" :disabled="isdisable"></el-input></td>
                                <td class="column">邮编</td>
                                <td><el-input clearable v-model.number="tableData2.data5" placeholder="" maxlength="6" :disabled="isdisable"></el-input></td>
                            </tr>
                            <tr>
                                <td class="column">类型</td>
                                <td>
                                    <el-select clearable v-model="tableData2.data6" placeholder="" :disabled="isdisable">
                                        <el-option label="有限责任公司" value="有限责任公司"></el-option>
                                        <el-option label="股份有限公司" value="股份有限公司"></el-option>
                                        <el-option label="外商独资公司" value="外商独资公司"></el-option>
                                        <el-option label="个人独资企业" value="个人独资企业"></el-option>
                                        <el-option label="国有独资公司" value="国有独资公司"></el-option>
                                        <el-option label="其他" value="其他"></el-option>
                                    </el-select>
                                </td>
                                <td class="column">成立日期</td>
                                <td><el-date-picker v-model="tableData2.data7" type="date" placeholder="" value-format="yyyy-MM-dd" :disabled="isdisable"></el-date-picker></td>
                            </tr>
                            <tr>
                                <td class="column">注册资本</td>
                                <td><el-input style="width: calc(100% - 50px)" clearable v-model="tableData2.data8" placeholder="" :disabled="isdisable"></el-input> <span>万元</span></td>
                                <td class="column">有效期止</td>
                                <td><el-date-picker v-model="tableData2.data9" type="date" placeholder="" value-format="yyyy-MM-dd" :disabled="isdisable"></el-date-picker></td>
                            </tr>
                        </table>
                    </el-col>
                </el-row>
            </div>

            <!-- 样品检验 -->
            <div class="add-table" v-if="isCheck">
                <div class="tableList">
                    <table border="1">
                        <tr>
                            <th width="160">检验号</th><th width="200">检验结果</th><th>备注</th><th width="220">检验报告</th><th width="150">检验日期</th><th width="100">检验人</th>
                        </tr>
                        <tr class="add_Table">
                            <td width="160"><el-input clearable v-model="tableData5.data1" placeholder=""></el-input></td>
                            <td width="200"><el-input clearable v-model="tableData5.data2" placeholder=""></el-input></td>
                            <td><el-input clearable v-model="tableData5.data3" placeholder=""></el-input></td>
                            <td width="220"><el-input clearable v-model="tableData5.data4" placeholder=""></el-input></td>
                            <td width="150"><el-input clearable v-model="tableData5.data5" placeholder=""></el-input></td>
                            <td width="100"><el-input clearable v-model="tableData5.data6" placeholder=""></el-input></td>
                        </tr>
                    </table>
                </div>
            </div>

            <!-- 证书表格 -->
            <div class="add-table">
                <table border="1" class="mainTable">
                    <tr v-for="(item, index) in tableData3" :key="index">
                        <td class="column index">{{ index + 1 }}</td>
                        <td class="column name">{{ item.name }}</td>
                        <td width="200"><el-input clearable v-model="item.number" placeholder="证书编号" :disabled="isdisable"></el-input></td>
                        <td><el-input clearable v-model="item.bz" placeholder="备注" :disabled="isdisable"></el-input></td>
                        <td width="200"><el-date-picker v-model="item.date" type="date" placeholder="有效期止" value-format="yyyy-MM-dd" :disabled="isdisable"></el-date-picker></td>
                        <td width="150" style="position: relative">
                            <input type="file" class="file" @change="upLoad($event,index)" :disabled="isdisable">
                            <p class="upLoad" v-show="!item.file">上传附件<i class="el-icon-paperclip"></i></p>
                            <p class="upLoad" v-show="item.file">{{ item.file }}</p>
                        </td>
                        <td width="100"><el-checkbox v-model="item.isChoose" :disabled="isdisable"></el-checkbox></td>
                    </tr>
                </table>
            </div>
            <div class="add-table">
                <div class="mine-add" v-show="!isdisable">
                    <span class="el-icon-circle-plus" @click="addTable"></span>
                    <span class="el-icon-remove-outline" @click.stop="deleteTable"></span>
                </div>
                <div class="tableList">
                    <table border="1">
                        <tr>
                            <th width="50"></th><th >设备名称</th><th>品牌型号</th><th width="100">数量</th><th>生产厂家</th>
                        </tr>
                        <tr class="add_Table" v-for="(item, index) in tableData4"  :key="index">
                            <td width="50">
                                <span class="checkStyle" @click="checkList(index)" v-show="!isdisable">
                                    <i class="el-icon-check" v-show="item.list"></i>
                                    <i class="no-check" v-show="!item.list"></i>
                                </span>
                                <span class="checkStyle" v-show="isdisable">
                                    <i class="no-check"></i>
                                </span>
                            </td>
                            <td><el-input clearable v-model="item.table1" placeholder=""></el-input></td>
                            <td><el-input clearable v-model="item.table2" placeholder=""></el-input></td>
                            <td width="100"><el-input clearable v-model="item.table3" placeholder=""></el-input></td>
                            <td><el-input clearable v-model="item.table4" placeholder=""></el-input></td>
                        </tr>
                    </table>
                </div>
            </div>

            <!-- 非现场审计 -->
            <div class="add-table">
                <div class="nav_scene">
                    <span class="circle"></span> 非现场审计 <span class="circle2"></span>
                </div>
                <div class="nav_list left">
                    <div class="input_flex">
                        <span class="search_left">审计结果：</span>
                        <el-radio v-model="addData.data5" label="通过">通过</el-radio>
                        <el-radio v-model="addData.data5" label="驳回">驳回</el-radio>
                        <div class="clearBoth"></div>
                    </div>
                    <div class="input_flex">
                        <span class="search_left">审计意见：</span>
                        <el-input class="search_right" clearable v-model="addData.data6" placeholder="请输入审计意见"></el-input>
                        <div class="clearBoth"></div>
                    </div>
                </div>
                <div class="nav_list">
                    <div class="input_flex">
                        <span class="search_left">日期：</span>
                        <el-date-picker class="search_right" type="date" placeholder="请选择日期" value-format="yyyy-MM-dd" v-model="addData.data7"></el-date-picker>
                        <div class="clearBoth"></div>
                    </div>
                    <div class="input_flex">
                        <span class="search_left">审计人：</span>
                        <el-input class="search_right" clearable v-model="addData.data8" placeholder="请输入审计人"></el-input>
                        <div class="clearBoth"></div>
                    </div>
                </div>
                <div class="submit-plan">
                    <p class="zll-botton reject">完 成</p>
                </div>
                <div class="clearBoth"></div>
            </div>

            <!-- 现场审计 -->
            <div class="add-table">
                <div class="nav_scene is">
                    <span class="circle"></span> 现场审计 <span class="circle2"></span>
                </div>
                <div class="nav_body">
                    <div class="tab">计划</div>
                    <div class="nav_list is">
                        <div class="input_flex">
                            <span class="search_left">组名：</span>
                            <el-input class="search_right" clearable v-model="addData.data9" placeholder="请输入组名"></el-input>
                            <div class="clearBoth"></div>
                        </div>
                        <div class="input_flex">
                            <span class="search_left">日期：</span>
                            <el-date-picker class="search_right" type="date" placeholder="请选择计划日期" value-format="yyyy-MM-dd" v-model="addData.data10"></el-date-picker>
                            <div class="clearBoth"></div>
                        </div>
                        <div class="input_flex">
                            <span class="search_left">地点：</span>
                            <el-input class="search_right" clearable v-model="addData.data11" placeholder="请输入地点"></el-input>
                            <div class="clearBoth"></div>
                        </div>
                        <div class="input_flex">
                            <span class="search_left">计划人：</span>
                            <el-input class="search_right" clearable v-model="addData.data12" placeholder="请输入计划人"></el-input>
                            <div class="clearBoth"></div>
                        </div>
                    </div>
                    <div class="nav_list is table">
                        <div class="input_flex">
                            <span class="search_left">人数：</span>
                            <el-input class="search_right" clearable v-model="addData.data8" placeholder="请输入人数"></el-input>
                            <div class="clearBoth"></div>
                        </div>
                        <div class="input_flex">
                            <span class="search_left">负责人：</span>
                            <el-input class="search_right" clearable v-model="addData.data8" placeholder="请输入负责人"></el-input>
                            <div class="clearBoth"></div>
                        </div>
                        <div class="input_flex tableList">
                            <span class="search_left">组员：</span>
                            <table border="1" class="search_right">
                                <tr>
                                    <td class="dept">生产部</td>
                                    <td>
                                        <p class="name">徐晓飞、刘浩</p>
                                        <span class="el-icon-user-solid user"></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="dept">质量部</td>
                                    <td>
                                        <p class="name"></p>
                                        <span class="el-icon-user-solid user"></span>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div class="submit-plan">
                        <p class="zll-botton" @click="submit()">提交计划</p>
                    </div>
                    <div class="clearBoth"></div>
                </div>
                <div class="nav_body">
                    <div class="tab tab2">现场审计</div>
                    <div class="nav_list is">
                        <div class="input_flex">
                            <span class="search_left">日期：</span>
                            <el-date-picker class="search_right" type="date" placeholder="请选择计划日期" value-format="yyyy-MM-dd" v-model="addData.data10"></el-date-picker>
                            <div class="clearBoth"></div>
                        </div>
                        <div class="input_flex">
                            <span class="search_left">地点：</span>
                            <el-input class="search_right" clearable v-model="addData.data11" placeholder="请输入地点"></el-input>
                            <div class="clearBoth"></div>
                        </div>
                        <div class="input_flex">
                            <span class="search_left">计划人：</span>
                            <el-input class="search_right" clearable v-model="addData.data12" placeholder="请输入计划人"></el-input>
                            <div class="clearBoth"></div>
                        </div>
                    </div>
                    <div class="nav_list is table">
                        <div class="input_flex">
                            <span class="search_left">人数：</span>
                            <el-input class="search_right" clearable v-model="addData.data8" placeholder="请输入人数"></el-input>
                            <div class="clearBoth"></div>
                        </div>
                        <div class="input_flex">
                            <span class="search_left">负责人：</span>
                            <el-input class="search_right" clearable v-model="addData.data8" placeholder="请输入负责人"></el-input>
                            <div class="clearBoth"></div>
                        </div>
                        <div class="input_flex tableList">
                            <span class="search_left">组员：</span>
                            <table border="1" class="search_right">
                                <tr>
                                    <td class="dept">生产部</td>
                                    <td>
                                        <p class="name">徐晓飞、刘浩</p>
                                        <span class="el-icon-user-solid user"></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="dept">质量部</td>
                                    <td>
                                        <p class="name"></p>
                                        <span class="el-icon-user-solid user"></span>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div class="nav_list is table shenji">
                        <div class="input_flex tableList">
                            <span class="search_left">现场审计文件：</span>
                            <table border="1">
                                <tr>
                                    <th>文件名称</th><th>备注</th><th width="150">上传日期</th><th width="100">操作</th>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td width="150"></td>
                                    <td width="100"></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div class="nav_list is shenji">
                        <div class="input_flex tableList">
                            <span class="search_left">现场审计结论：</span>
                            <el-input clearable v-model="addData.data8" placeholder="请输入现场审计结论"></el-input>
                            <div class="clearBoth"></div>
                        </div>
                    </div>
                    <div class="clearBoth"></div>
                </div>
            </div>
            <div class="bottom one">
                <p class="zll-botton reject" @click="submit()" >提交审批</p>
                <div class="clearBoth"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['detailData'],
    data() {
        return {
            isdisable: false,
            isCheck: false,
            addData: {
                data1: '', data2: '', data3: '', data4: '', data5: '', data6: '', data7: '', data8: '', data9: '', data10: '', data11: '', data12: '',
            },
            tableData1: {
                data1: '', data2: '', data3: '', data4: '', data5: false,
            },
            tableData2: {
                data1: '', data2: '', data3: '', data4: '', data5: '', data6: '', data7: '', data8: '', data9: '', data10: '',
            },
            tableData3: [
                {
                    name: '营业执照', number: '', date: '', bz: '', file: '', isChoose: false,
                }, {
                    name: '生产许可证', number: '', date: '', bz: '', file: '', isChoose: false,
                }, {
                    name: '原料药登记号', number: '', date: '', bz: '', file: '', isChoose: false,
                }, {
                    name: 'ISO 证书', number: '', date: '', bz: '', file: '', isChoose: false,
                }, {
                    name: 'GMP 证书', number: '', date: '', bz: '', file: '', isChoose: false,
                }, {
                    name: '卫生许可证', number: '', date: '', bz: '', file: '', isChoose: false,
                }, {
                    name: '药监局等级信息', number: '', date: '', bz: '', file: '', isChoose: false,
                }, {
                    name: '洁净级别证明', number: '', date: '', bz: '', file: '', isChoose: false,
                },
            ],
            tableData4:[
                { list:false,table1: '',table2: '',table3: '',table4: '' },
            ],
            tableData5: {
                data1: '', data2: '', data3: '', data4: '',data5: '', data6: '',
            },
        }
    },
    methods: {
        isCheckout(val) {
            this.isCheck = val
        },
        addTable(){//增加table
            this.tableData4.push({ list:false,table1: '',table2: '',table3: '',table4: '' })
        },
        checkList(index){
            this.tableData4[index].list = !this.tableData4[index].list;
        },
        deleteTable(){//删除table
            if(this.tableData4.length == 1){
                this.$message.warning('不能少于一列!');
                return false
            }else{
                this.tableData4 = this.tableData4.filter(e => {
                    return !e.list
                })
            }
        },
        upLoad(e, index) {
            if(e.target.files.length) {
                let file = e.target.files[0];
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = (eve) => {
                    for(var i = 0; i < this.tableData3.length ;i++) {
                        if( i == index) {
                            this.tableData3[i].file = file.name
                        }
                    }
                }
            }
        },
        submit() {
            // if( !this.addData.data1 ){
            //     this.$message.error('申请人不能为空!');
            //     return false
            // }
            // if( !this.addData.data2 ){
            //     this.$message.error('状态不能为空!');
            //     return false
            // }
            // if( !this.addData.data3 ){
            //     this.$message.error('申请日期不能为空!');
            //     return false
            // }
            // if( !this.addData.data4 ){
            //     this.$message.error('申请号不能为空!');
            //     return false
            // }
            // if( !this.tableData1.data1 || !this.tableData1.data2 || !this.tableData1.data3 || !this.tableData1.data4 ){
            //     this.$message.error('请完善物料信息!');
            //     return false
            // }
            // if( !this.tableData2.data1 || !this.tableData2.data2 ){
            //     this.$message.error('请完善公司信息!');
            //     return false
            // }
            // const reg = /^[^_IOZSVa-z\W]{2}\d{6}[^_IOZSVa-z\W]{10}$/g
            // if( !reg.test(this.tableData2.data2 )) {
            //     this.$message.error('请输入正确统一社会信用代码!');
            //     return false
            // }
            // const number = /^[+-]?(0|([1-9]\d*))(\.\d+)?$/
            // if( !number.test(this.tableData2.data8 )) {
            //     this.$message.error('请输入正确注册资本!');
            //     return false
            // }
            let submitData = {};
            submitData = {
                'addData': { ...this.addData },
                'tableData1': { ...this.tableData1 },
                'tableData2': { ...this.tableData2 },
                'tableData3': [ ...this.tableData3 ],
                'tableData4': [ ...this.tableData4 ],
                'tableData5': { ...this.tableData5 },
            }
            console.log(submitData)
			this.$emit('applyApprove', true)
        },
        close() {
			this.$emit('applyApprove', true)
        }
    },
    mounted() {
        if( this.detailData.state ) {
            this.tableData1.data1 = this.detailData.data.data2
            this.tableData1.data2 = this.detailData.data.data4
            this.tableData1.data3 = this.detailData.data.data5
            this.tableData1.data4 = this.detailData.data.data3
            this.tableData2.data1 = this.detailData.data.data1
            this.addData.data1 = this.detailData.data.data6
            this.addData.data2 = this.detailData.data.data8

            if( this.detailData.state == 'see' ) {
                this.isdisable = true
            }else if( this.detailData.state == 'edit' ) {
                this.isdisable = false
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/page/mainContent/AccessApply/AddAccess/Index.scss";
@import "@/assets/style/SearchTop.scss";
</style>