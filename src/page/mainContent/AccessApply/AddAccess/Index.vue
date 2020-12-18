<template>
    <div class="AddAccess">
        <div class="nav" v-if="isAdd">
            <div class="add" :style="{backgroundColor:$store.state.colorData.top.topBgColor}" @click="goPage()">
                <img src="@/assets/img/addapply.png">
                <span>新供应商准入申请</span>
            </div>
        </div>
        <div class="page" v-if="!isAdd">
            <h1>金陵药业供应商物料 · <span>准入申请</span></h1>
            <div class="Search_Top_Input isLeft">
                <div class="search_list" style="width: 100% !important">
                    <div class="input_flex">
                        <span class="search_left">申请人：</span>
                        <el-input clearable v-model="addData.data1" placeholder="" :disabled="isdisable"></el-input>
                    </div>
                    <div class="input_flex">
                        <span class="search_left">状态：</span>
                        <el-select clearable v-model="addData.data2" placeholder="" :disabled="isdisable" class="iscolor">
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
                        <el-input clearable v-model="addData.data4" placeholder="" :disabled="isdisable" class="iscolor"></el-input>
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
                                <td colspan="3"><el-input clearable v-model="tableData2.data1" placeholder="" :disabled="isdisable"></el-input></td>
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
            <div class="add-table" v-if="isCheck">
                <div class="tableList">
                    <table border="1">
                        <tr>
                            <th >物料类别</th><th>物料编码</th><th>物料名称</th><th>等级</th>
                        </tr>
                        <tr class="add_Table">
                            <td><el-input clearable v-model="tableData4.data1" placeholder=""></el-input></td>
                            <td><el-input clearable v-model="tableData4.data2" placeholder=""></el-input></td>
                            <td><el-input clearable v-model="tableData4.data3" placeholder=""></el-input></td>
                            <td><el-input clearable v-model="tableData4.data4" placeholder=""></el-input></td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="add-table">
                <table border="1" class="mainTable">
                    <tr v-for="(item, index) in tableData3" :key="index">
                        <td class="column index">{{ index + 1 }}</td>
                        <td class="column name">{{ item.name }}</td>
                        <td width="200"><el-input clearable v-model="item.number" placeholder="证书编号" :disabled="isdisable2"></el-input></td>
                        <td width="200"><el-date-picker v-model="item.date" type="date" placeholder="有效期止" value-format="yyyy-MM-dd" :disabled="isdisable2"></el-date-picker></td>
                        <td><el-input clearable v-model="item.bz" placeholder="备注" :disabled="isdisable2"></el-input></td>
                        <td width="100" style="position: relative">
                            <input type="file" class="file" @change="upLoad($event,index)" :disabled="isdisable2">
                            <p class="upLoad" v-show="!item.file">上传附件<i class="el-icon-paperclip"></i></p>
                            <p class="upLoad" v-show="item.file">{{ item.file }}</p>
                        </td>
                        <td width="50"><el-checkbox v-model="item.isChoose" :disabled="isdisable2"></el-checkbox></td>
                    </tr>
                </table>
            </div>
            <div class="bottom" v-show="!isdisable2">
                <p class="zll-botton save" @click="save()">保 存</p>
				<p class="zll-botton" @click="submit()">提 交</p>
                <div class="clearBoth"></div>
            </div>
            <div class="bottom one" v-show="isdisable2">
				<p class="zll-botton" @click="close()" >确 定</p>
                <div class="clearBoth"></div>
            </div>
        </div>
    </div>
</template>

<script>
import { VM } from  '@/main'
export default {
    data() {
        return {
            isAdd: true,
            isdisable: false,
            isdisable2: false,
            isCheck: false,
            addData: {
                data1: '',
                data2: '',
                data3: '',
                data4: '',
            },
            tableData1: {
                data1: '',
                data2: '',
                data3: '',
                data4: '',
                data5: false,
            },
            tableData2: {
                data1: '',
                data2: '',
                data3: '',
                data4: '',
                data5: '',
                data6: '',
                data7: '',
                data8: '',
                data9: '',
            },
            tableData3: [
                {
                    name: '营业执照',
                    number: '',
                    date: '',
                    bz: '',
                    file: '',
                    isChoose: false,
                }, {
                    name: '生产许可证',
                    number: '',
                    date: '',
                    bz: '',
                    file: '',
                    isChoose: false,
                }, {
                    name: '原料药登记号',
                    number: '',
                    date: '',
                    bz: '',
                    file: '',
                    isChoose: false,
                }, {
                    name: 'ISO 证书',
                    number: '',
                    date: '',
                    bz: '',
                    file: '',
                    isChoose: false,
                }, {
                    name: 'GMP 证书',
                    number: '',
                    date: '',
                    bz: '',
                    file: '',
                    isChoose: false,
                }, {
                    name: '卫生许可证',
                    number: '',
                    date: '',
                    bz: '',
                    file: '',
                    isChoose: false,
                }, {
                    name: '药监局等级信息',
                    number: '',
                    date: '',
                    bz: '',
                    file: '',
                    isChoose: false,
                }, {
                    name: '洁净级别证明',
                    number: '',
                    date: '',
                    bz: '',
                    file: '',
                    isChoose: false,
                },
            ],
            tableData4: {
                data1: '',
                data2: '',
                data3: '',
                data4: '',
            },
        }
    },
    methods: {
        goPage() {
            this.isAdd = false
        },
        save() {
            this.isAdd = true
            if( this.$store.state.isApply.state == 'edit' ) {
                this.goBack ()
            }else {
                VM.$goPage = true;//允许页面跳转
                history.pushState(null, null, document.URL);
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
        isCheckout(val) {
            this.isCheck = val
        },
        submit() {
            if( !this.addData.data1 ){
                this.$message.error('申请人不能为空!');
                return false
            }
            if( !this.addData.data2 ){
                this.$message.error('状态不能为空!');
                return false
            }
            if( !this.addData.data3 ){
                this.$message.error('申请日期不能为空!');
                return false
            }
            if( !this.addData.data4 ){
                this.$message.error('申请号不能为空!');
                return false
            }
            if( !this.tableData1.data1 || !this.tableData1.data2 || !this.tableData1.data3 || !this.tableData1.data4 ){
                this.$message.error('请完善物料信息!');
                return false
            }
            if( !this.tableData2.data1 || !this.tableData2.data2 ){
                this.$message.error('请完善公司信息!');
                return false
            }
            const reg = /^[^_IOZSVa-z\W]{2}\d{6}[^_IOZSVa-z\W]{10}$/g
            if( !reg.test(this.tableData2.data2 )) {
                this.$message.error('请输入正确统一社会信用代码!');
                return false
            }
            const number = /^[+-]?(0|([1-9]\d*))(\.\d+)?$/
            if( !number.test(this.tableData2.data8 )) {
                this.$message.error('请输入正确注册资本!');
                return false
            }
            let submitData = {};
            submitData = {
                'addData': { ...this.addData },
                'tableData1': { ...this.tableData1 },
                'tableData2': { ...this.tableData2 },
                'tableData3': [ ...this.tableData3 ],
            }
            console.log(submitData)
            if( this.$store.state.isApply.state == 'edit' ) {
                this.goBack ()
            }else {
                this.isAdd = true
                this.$store.commit('SET_isApply', {'isAdd': true});
                VM.$goPage = true;//允许页面跳转
                history.pushState(null, null, document.URL);
            }
        },
        close() {
            this.isAdd = true
            this.$store.commit('SET_isApply', {});
			this.goBack ()
        },
        goBack () {//点击了返回页面
			VM.$goPage = true;//允许页面跳转
			window.history.back();
			history.pushState(null, null, document.URL);
		},
    },
    mounted() {
        let applyData = this.$store.state.isApply
        this.isAdd = applyData.isAdd
        if( !applyData.isAdd) {
            this.tableData1.data1 = applyData.data.data2
            this.tableData1.data2 = applyData.data.data4
            this.tableData1.data3 = applyData.data.data5
            this.tableData1.data4 = applyData.data.data3
            this.tableData2.data1 = applyData.data.data1
            this.addData.data1 = applyData.data.data6
            this.addData.data2 = applyData.data.data8

            if( applyData.state == 'see' ) {
                this.isdisable = true
                this.isdisable2 = true
            }else if( applyData.state == 'edit' ) {
                this.isdisable = true
                this.isdisable2 = false
            }
        }
    },
    watch: {
        isAdd: {
            handler: function(val) {
                if( val == false ) {
                    VM.$goPage = false;//禁止页面跳转
                    if (window.history && window.history.pushState) {// 向历史记录中插入了当前页
                        history.pushState(null, null, document.URL);
                        window.addEventListener('popstate', this.goBack, false);
                    }
                }else {
                    VM.$goPage = true;//允许页面跳转
                    history.pushState(null, null, document.URL);
                }
            },
            immediate: true
        },
    },
	destroyed () {
		window.removeEventListener('popstate', this.goBack, false);
	},
}
</script>

<style lang="scss" scoped>
@import "./Index.scss";
@import "@/assets/style/SearchTop.scss";
</style>