<template>
	<div class="app-container QualityName">
		<!-- 头部input搜索 -->
		<div class="Search_Top_Input">
            <div class="search_list" style="width: calc(100% - 150px) !important">
                <div class="input_flex">
                    <el-input clearable v-model="searchData1" placeholder="资质名称"></el-input>
                </div>
                <div class="input_flex search">
                    <span class="zll-search">搜索</span>
                    <span class="zll-search-reset" @click="searchReset()">重置</span>
                </div>
            </div>
			<div class="addNew" style="width: 150px !important">
				<span @click="add()"><i class="el-icon-circle-plus-outline"></i> 新建资质认证名目</span>
			</div>
		</div>
		<!-- table -->
		<sys-table 
			:isMultipleSelection="false" 
			:tableData="tableData" 
			:tableLoading="tableLoading" 
			:tableHeader="tableHeader" 
			:scopeWidth="120"
		>
			<template slot-scope="scope" slot="operate">
				<el-button @click="edit(scope.row)" type="text" size="small">编辑</el-button>
			</template>
		</sys-table>

		<!-- 资质认证名目弹框 -->
		<div class="zll-dialog">
			<popout :title="'资质认证名目 · ' + title" :visible.sync="addDialog" v-if="addDialog">
				<Add ref="add" slot="content" @addForm="getFormData"></Add>
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
export default {
	data() {
		return {
			title: "",
			searchData1: "",
			tableData: [
				{
					data1: "01", //代码
					data2: "营业执照", //资质名称
					data3: "", //登记编码
					data4: "", //有效期止
					data5: "", //上传
					data6: "正常", //状态
				}, {
					data1: "02", //代码
					data2: "生产许可证", //资质名称
					data3: "", //登记编码
					data4: "", //有效期止
					data5: "", //上传
					data6: "正常", //状态
				}, {
					data1: "03", //代码
					data2: "工业生产许可证", //资质名称
					data3: "", //登记编码
					data4: "", //有效期止
					data5: "", //上传
					data6: "正常", //状态
				}, {
					data1: "04", //代码
					data2: "药监局登记信息", //资质名称
					data3: "", //登记编码
					data4: "", //有效期止
					data5: "", //上传
					data6: "停用", //状态
				},
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
					{ columnValue: "data1", columnName: "代码", width: 50 },
					{ columnValue: "data2", columnName: "资质名称" },
					{ columnValue: "data3", columnName: "登记编码" },
					{ columnValue: "data4", columnName: "有效期止", width: 100  },
					{ columnValue: "data5", columnName: "上传", width: 100 },
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
		edit(row) {
			this.addDialog = true;
			this.title = "编辑";
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
.QualityName {
    h1 {
        text-align: center;
        color: #34bfc6;
        font-size: 20px;
        font-weight: normal;
        position: relative;
        width: 200px;
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
