<template>
	<div class="app-container QualificationAge">
		<!-- 头部input搜索 -->
		<div class="Search_Top_Input">
            <div class="search_list" style="width: calc(100%) !important">
                <div class="input_flex">
                    <el-select clearable v-model="searchData1" placeholder="物料类别">
                        <el-option label="原料" value="原料"></el-option>
                        <el-option label="辅料" value="辅料"></el-option>
                        <el-option label="包装材料" value="包装材料"></el-option>
                        <el-option label="试剂" value="试剂"></el-option>
                    </el-select>
                </div>
                <div class="input_flex">
                    <el-input clearable v-model="searchData2" placeholder="物料名称"></el-input>
                </div>
                <div class="input_flex">
                    <el-select clearable v-model="searchData3" placeholder="等级">
                        <el-option label="A" value="A"></el-option>
                        <el-option label="B" value="B"></el-option>
                        <el-option label="C" value="C"></el-option>
                    </el-select>
                </div>
                <div class="input_flex">
                    <el-input clearable v-model="searchData4" placeholder="规格"></el-input>
                </div>
                <div class="input_flex">
                    <el-input clearable v-model="searchData5" placeholder="供应商"></el-input>
                </div>
                <div class="input_flex search">
                    <span class="zll-search">搜索</span>
                    <span class="zll-search-reset" @click="searchReset()">重置</span>
                </div>
            </div>
		</div>
		<!-- table -->
		<sys-table 
			:isMultipleSelection="false" 
			:tableData="tableData" 
			:tableLoading="tableLoading" 
			:tableHeader="tableHeader" 
			:scopeWidth="100" :filterTag="true"
		>
			<template slot-scope="tag" slot="tag">
				<el-tag type="success" class="table_tag" v-if="tag.row.data9 == '有效'">{{ tag.row.data9 }}</el-tag>
				<el-tag type="danger" class="table_tag" v-if="tag.row.data9 == '已过期'">{{ tag.row.data9 }}</el-tag>
				<el-tag type="warning" class="table_tag" v-if="tag.row.data9 == '即将过期'">{{ tag.row.data9 }}</el-tag>
			</template>

			<template slot-scope="scope" slot="operate">
				<el-button @click="goDetail(scope.row)" type="text" size="small">查看</el-button>
			</template>
		</sys-table>

		<!-- 新建资质时效弹框 -->
		<div class="zll-dialog">
			<popout title="资质时效 · 查看" :visible.sync="addDialog" v-if="addDialog">
				<Add ref="add" slot="content" ></Add>
				<template slot="bottom">
					<p class="zll-botton" @click="addDialog = false">确 定</p>
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
			searchData1: "",
			searchData2: "",
			searchData3: "",
			searchData4: "",
			searchData5: "",
			tableData: [
				{
					data1: "原料", //物料类别
					data2: "P20201011", //物料编码
					data3: "琥珀酸亚铁片参比制剂", //物料名称
					data4: '生产商', //等级
					data5: "", //规格
					data6: "生产商", //类别
					data7: '安徽山河药辅股份有限公司', //供应商
					data8: "合格", //状态
					data9: "有效", //资质时效
				}, {
					data1: "原料", //物料类别
					data2: "P20201011", //物料编码
					data3: "琥珀酸亚铁片参比制剂", //物料名称
					data4: '生产商', //等级
					data5: "", //规格
					data6: "生产商", //类别
					data7: '安徽山河药辅股份有限公司', //供应商
					data8: "合格", //状态
					data9: "已过期", //资质时效
				}, {
					data1: "原料", //物料类别
					data2: "P20201011", //物料编码
					data3: "琥珀酸亚铁片参比制剂", //物料名称
					data4: '生产商', //等级
					data5: "", //规格
					data6: "生产商", //类别
					data7: '安徽山河药辅股份有限公司', //供应商
					data8: "合格", //状态
					data9: "即将过期", //资质时效
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
					{ columnValue: "data1", columnName: "物料类别" },
					{ columnValue: "data2", columnName: "物料编码" },
					{ columnValue: "data3", columnName: "物料名称" },
					{ columnValue: "data4", columnName: "等级", width: 80  },
					{ columnValue: "data5", columnName: "规格" },
					{ columnValue: "data6", columnName: "类别", width: 80 },
					{ columnValue: "data7", columnName: "供应商", width: 200 },
					{ columnValue: "data8", columnName: "状态", width: 100 },
				];
				this.tableData = JSON.parse(JSON.stringify(this.tableData));
				this.tableLoading = false;
			}, 500);
		},
		goDetail(row) {
			this.addDialog = true;
			this.title = "查看";
		},
		searchReset() {//重置搜索
			this.searchData1 = "";
			this.searchData2 = "";
			this.searchData3 = "";
			this.searchData4 = "";
			this.searchData5 = "";
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
.QualificationAge {
    h1 {
        text-align: center;
        color: #34bfc6;
        font-size: 20px;
        font-weight: normal;
        position: relative;
        width: 150px;
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
