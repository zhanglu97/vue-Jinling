<template>
	<div class="QualityReview">
        <h1 :style="{color:$store.state.colorData.top.topBgColor}">质量回顾</h1>
		<!-- 头部input搜索 -->
		<div class="Search_Top_Input">
            <div class="search_list" style="width: calc(100% - 150px) !important">
                <div class="input_flex">
                    <el-input clearable v-model="searchData2" placeholder="物料名称"></el-input>
                </div>
                <div class="input_flex">
                    <el-input clearable v-model="searchData3" placeholder="供应商"></el-input>
                </div>
                <div class="input_flex">
                    <el-date-picker v-model="searchData1" type="daterange" range-separator="-" start-placeholder="开始日期" end-placeholder="结束日期"> </el-date-picker>
                </div>
                <div class="input_flex search">
                    <span class="zll-search">搜索</span>
                    <span class="zll-search-reset" @click="searchReset()">重置</span>
                </div>
            </div>
			<!-- <div class="addNew" style="width: 150px !important">
				<span @click="add()"><i class="el-icon-circle-plus-outline"></i> 新建质量回顾</span>
			</div> -->
		</div>
        <div class="repord">
            <div class="left">
                <p>
                    <span>山梨酸钾80</span> / 
                    <span>原料药</span> / 
                    <span>A</span> / 
                    <span>2019-08-01至2020-12-31</span> / 
                    <span>7批</span> / 
                </p>
                <el-checkbox-group v-model="checkList">
                    <el-checkbox label="南京威尔药业股份有限公司"></el-checkbox>
                    <el-checkbox label="泰州中环制药有限公司"></el-checkbox>
                    <el-checkbox label="南京绿岛化工有限公司"></el-checkbox>
                </el-checkbox-group>
            </div>
            <div class="right">
				<p class="zll-botton Info">生成报告</p>
            </div>
            <div class="clearBoth"></div>
        </div>
        <div class="tableList">
            <table border="1">
                <tr>
                    <td rowspan="2" class="color">检项</td>
                    <td rowspan="2" class="color">标准</td>
                    <td>2019.08.11</td>
                    <td>2019.08.11</td>
                    <td>2019.08.11</td>
                    <td>2019.08.11</td>
                    <td>2019.08.11</td>
                    <td>2019.08.11</td>
                </tr>
                <tr>
                    <td class="is">P191208033</td>
                    <td class="is">P191208033</td>
                    <td class="is">P191208033</td>
                    <td class="is">P191208033</td>
                    <td class="is">P191208033</td>
                    <td class="is">P191208033</td>
                </tr>
                <tr v-for="(item, index) in tableData" :key="index">
                    <td class="color">{{ item.data1 }}</td>
                    <td class="color">{{ item.data2 }}</td>
                    <td>{{ item.data3 }}</td>
                    <td>{{ item.data4 }}</td>
                    <td>{{ item.data5 }}</td>
                    <td>{{ item.data6 }}</td>
                    <td>{{ item.data7 }}</td>
                    <td>{{ item.data8 }}</td>
                </tr>
            </table>
        </div>
        <div class="echart_bottom">
            <el-row >
                <el-col :span="20">
                    <div class="echart" ref="echart"></div>
                </el-col>
                <el-col :span="4">
                    <div class="botton">
                        <div>
                            <p class="zll-botton">截图</p>
                            <p class="zll-botton download">下载</p>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>

		<!-- 新建质量回顾弹框 -->
		<div class="zll-dialog">
			<popout :title="'年度供应商质量检验结果回顾分析表 · ' + title" :visible.sync="addDialog" v-if="addDialog" class="longSize">
				<Add ref="add" slot="content" :titleTxt="title" @addForm="getFormData"></Add>
				<template slot="bottom">
					<p class="zll-botton" v-if="title != '查看'" @click="()=>{this.$refs.add.setFormData('addForm')}">提 交</p>
					<p class="zll-botton" v-else @click="addDialog = false">确 定</p>
				</template>
			</popout>
		</div>
	</div>
</template>

<script>
import Add from "./add";
import echartOption from './echart'
export default {
	data() {
		return {
			title: "",
			searchData1: "",
			searchData2: "",
			searchData3: "",
			tableData: [
				{
					data1: "山梨酸纯度", //标准编码
					data2: "85%±1%", //物料名称
					data3: "", //物料编码
					data4: '', //
					data5: "", //
					data6: "", //
				},{
					data1: "水分", //标准编码
					data2: "1.3%", //物料名称
					data3: "", //物料编码
					data4: '', //
					data5: "", //
					data6: "", //
				},
			],
			tableHeader: [],
			tableLoading: true, //table刷新
            addDialog: false, //新建项目弹框
            checkList: [],
		};
	},
	methods: {
        getEchartData() {  
            let echart = this.$echarts.init(this.$refs.echart);
            echart.setOption(echartOption.option1)
        },
		getTableList() {
			//获取表格数据
			this.tableLoading = true;
			setTimeout(() => {
				for (let i = 0; i < this.tableData.length; i++) {
					this.tableData[i]["index"] = i + 1;
				}
				this.tableHeader = [
					{ columnValue: "index", columnName: "序号", width: 50 },
					{ columnValue: "data1", columnName: "标准编码" },
					{ columnValue: "data2", columnName: "物料名称" },
					{ columnValue: "data3", columnName: "物料编码" },
					{ columnValue: "data4", columnName: "检项数", isSortable: true, width: 100  },
					{ columnValue: "data5", columnName: "版本" },
					{ columnValue: "data6", columnName: "状态", width: 100 },
				];
				this.tableData = JSON.parse(JSON.stringify(this.tableData));
				this.tableLoading = false;
			}, 500);
		},
		getFormData(data) {//获取新增表单数据
			console.log(data);
			this.addDialog = false;
			this.tableData.push({
				data2: data.addFormData1, //
			});
			this.getTableList();
		},
		add() {//新建
			this.addDialog = true;
			this.title = "新建";
		},
		goDetail(row) {
			this.addDialog = true;
			this.title = "查看";
		},
		edit(row) {
			this.addDialog = true;
			this.title = "编辑";
		},
		searchReset() {//重置搜索
			this.searchData1 = "";
			this.searchData2 = "";
			this.searchData3 = "";
			this.getTableList();
		},
	},
	mounted() {
        this.getTableList(); //显示table
        this.getEchartData()
	},
	components: {
		Add,
	},
};
</script>
<style scoped lang="scss">
@import "@/assets/style/SearchTop.scss";
.QualityReview {
    h1 {
        text-align: center;
        color: #34bfc6;
        font-size: 20px;
        font-weight: normal;
        position: relative;
        width: 100px;
        margin: 0 auto;
        padding-bottom: 10px;
    }
    .repord {
        background: #f2f2f2;
        margin-bottom: 20px;
        padding: 10px 20px 20px;
        .left {
            width: calc(100% - 120px);
            float: left;
            p {
                height: 40px;
                line-height: 40px;
                span {
                    padding: 0 10px;
                }
            }
        }
        .right {
            width: 120px;
            float: left;
        }
    }
    .echart_bottom {
        margin-top: 20px;
        .echart {
            width: 100%;
            height: 350px;
        }
        .botton {
            height: 350px;
            display: flex;align-items: center;justify-content: center;
            .zll-botton {
                width: 120px;
                margin-bottom: 20px;
                background-color: #34BFC6;
            }
        }
    }
    .tableList {
        margin-top: 20px;
        position: relative;
        table {
            width: 100%;
            border-collapse: collapse;
            border:1px solid #ffffff;
            text-align: center;
            th {
                background: #a6a6a6;
                color: #ffffff;
                padding: 3px;
                font-weight: normal;
                height: 26px;
                line-height: 26px;
            }
            td {
                padding: 3px;
                height: 26px;
                line-height: 26px;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
                &.is {
                    background: #34BFC6;
                    color: #ffffff;
                }
                &.color {
                    color: #888888;
                }
            }
            tr {
                background: #F2F2F2;
            }
        }
    }
}
</style>
