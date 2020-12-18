<template>
	<div class="StandBook">
        <h1 :style="{color:$store.state.colorData.top.topBgColor}">
            <span class="line1" :style="{backgroundColor:$store.state.colorData.top.topBgColor}"></span>
            试剂台账
            <span class="line2" :style="{backgroundColor:$store.state.colorData.top.topBgColor}"></span>
        </h1>
		<!-- 头部input搜索 -->
		<div class="Search_Top_Input">
            <div class="search_list" style="width: calc(100% - 150px) !important">
                <div class="input_flex">
                    <el-date-picker v-model="searchData1" type="daterange" range-separator="-" start-placeholder="开始日期" end-placeholder="结束日期"> </el-date-picker>
                </div>
                <div class="input_flex search">
                    <span class="zll-search">搜索</span>
                    <span class="zll-search-reset" @click="searchReset()">重置</span>
                </div>
            </div>
			<div class="addNew" style="width: 150px !important">
				
			</div>
		</div>
		<!-- table -->
		<sys-table 
			:isMultipleSelection="false" 
			:tableData="tableData" 
			:tableLoading="tableLoading" 
			:tableHeader="tableHeader" 
			:scopeWidth="100"
		>
			<template slot-scope="scope" slot="operate">
				<el-button @click="edit(scope.row)" type="text" size="small">编辑</el-button>
			</template>
		</sys-table>

		<!-- 新建质量标准弹框 -->
		<div class="zll-dialog">
			<popout :title="'试剂台账 · ' + title " :visible.sync="addDialog" v-if="addDialog">
				<Add ref="add" slot="content" :titleTxt="title" @addForm="getFormData"></Add>
				<template slot="bottom">
					<p class="zll-botton" @click="()=>{this.$refs.add.setFormData('addForm')}">提 交</p>
				</template>
			</popout>
		</div>
	</div>
</template>

<script>
import Add from "./add";
export default {
	data() {
		return {
			title: "",
			searchData1: "",
			tableData: [{
					data1: "氧化二氢", //名称
					data2: "基准", //规格
					data3: "优级纯GR", //纯度
					data4: '一级', //等级
					data5: "", //试剂编码
					data6: "", //合格供应商数量
					data7: "", //期初总数
					data8: "", //本期购入
					data9: "", //本期领用
					data10: "", //期末总数
				}, {
					data1: "氧化二氢", //名称
					data2: "实验", //规格
					data3: "分析纯AR", //纯度
					data4: '二级', //等级
					data5: "", //试剂编码
					data6: "", //合格供应商数量
					data7: "", //期初总数
					data8: "", //本期购入
					data9: "", //本期领用
					data10: "", //期末总数
				}, {
					data1: "氧化二氢", //名称
					data2: "指示", //规格
					data3: "化学纯CP", //纯度
					data4: '三级', //等级
					data5: "", //试剂编码
					data6: "", //合格供应商数量
					data7: "", //期初总数
					data8: "", //本期购入
					data9: "", //本期领用
					data10: "", //期末总数
				}
			],
			tableHeader: [],
			tableLoading: true, //table刷新
			addDialog: false, //新建项目弹框
		};
	},
	methods: {
		getTableList() {
			//获取表格数据
			this.tableLoading = true;
			setTimeout(() => {
				this.tableHeader = [
					{ columnValue: "data5", columnName: "试剂编码" },
					{ columnValue: "data1", columnName: "名称" },
					{ columnValue: "data2", columnName: "规格" },
					{ columnValue: "data3", columnName: "纯度" },
					{ columnValue: "data4", columnName: "等级", width: 80  },
					{ columnValue: "data6", columnName: "合格供应商数量" },
					{ columnValue: "data7", columnName: "期初总数" },
					{ columnValue: "data8", columnName: "本期购入" },
					{ columnValue: "data9", columnName: "本期领用" },
					{ columnValue: "data10", columnName: "期末总数" },
				];
				this.tableData = JSON.parse(JSON.stringify(this.tableData));
				this.tableLoading = false;
			}, 500);
		},
		getFormData(data) {//获取新增表单数据
			console.log(data);
			this.addDialog = false;
			this.getTableList();
        },
		edit(data) {
			this.addDialog = true;
			this.title = '编辑';
		},
		searchReset() {//重置搜索
			this.searchData1 = "";
			this.getTableList();
		},
	},
	mounted() {
		this.getTableList(); //显示table
	},
	components: {
		Add,
	},
};
</script>
<style scoped lang="scss">
@import "@/assets/style/SearchTop.scss";
.StandBook {
    h1 {
        text-align: center;
        color: #34bfc6;
        font-size: 20px;
        font-weight: normal;
        position: relative;
        width: 140px;
        margin: 0 auto;
        padding-bottom: 10px;
        .line1 {
            width: 30px;
            height: 1px;
            position: absolute;
            left: -40px;
            top: 14px;
            background:  #34bfc6;
        }
        .line2 {
            width: 30px;
            height: 1px;
            position: absolute;
            right: -40px;
            top: 14px;
            background:  #34bfc6;
        }
    }
}
</style>
