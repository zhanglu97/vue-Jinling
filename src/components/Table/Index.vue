<template>
    <div>
        <div class="Table_body zll-table" v-loading="loading">
            <el-table border style="width: 100%" tooltip-effect="dark" stripe
                :data="getTableData" 
                @selection-change="handleSelect"
                :cell-style="cellStyle"
                :show-summary="showSummary"
                :summary-method="getSummaries"
            >
                <el-table-column type="selection" width="50" v-if="isMultipleSelection"></el-table-column>
                <el-table-column v-for="(item, index) in getTableHeader" :key="index" 
                    :show-overflow-tooltip="true"
                    :prop="item.columnValue" 
                    :label="item.columnName" 
                    :sortable="item.isSortable" 
                    :width="item.width"
                ></el-table-column>

                <el-table-column label="资质时效" :width="scopeWidth" v-if="filterTag">
                    <template slot-scope="tag">
                        <slot :index="tag.$index"
                            :row="tag.row"
                            name="tag">
                        </slot>
                    </template>
                </el-table-column>

                <el-table-column label="操作" :width="scopeWidth" fixed="right" align="center" v-if="isOperate">
                    <template slot-scope="scope">
                        <slot :index="scope.$index"
                            :row="scope.row"
                            :currentPage="currentPage"
                            :pageSize="pageSize"
                            name="operate">
                        </slot>
                    </template>
                </el-table-column>
            </el-table>
        </div>

        <div class="zll-pagination" v-if="isPagination">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                :current-page="currentPage" 
                :page-sizes="[10, 20, 30, 40]" 
                :page-size="pageSize" 
                layout="total, sizes, prev, pager, next, jumper" 
                :total="totalCount">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            tableData: { //表格数据
                default: function() {
                    return [];
                },
                type: Array
            },
            tableLoading: { //表格加载
                default: function() {
                    return true;
                },
                type: Boolean
            },
            tableHeader: { //表头数据
                default: function() {
                    return [];
                },
                type: Array
            },
            isMultipleSelection: {
                default: false,
                type: Boolean,
            },
            pageSizeParam:{ //分页每页数量
                default: function () {
                    return 10
                },
                type: Number
            },
            scopeWidth: { //右侧操作宽度
                default: 100,
                type: Number
            },
            isOperate: { //是否 显示操作
                default: true,
                type: Boolean,
            },
            isPagination: {//是否 显示分页
                default: true,
                type: Boolean,
            },
            showSummary: {//是否 显示合计
                default: false,
                type: Boolean,
            },
            isSortable: {//是否 排序
                default: false,
                type: Boolean,
            },
            filterTag: {//是否 tag
                default: false,
                type: Boolean,
            },
        },
        data() {
            return {
                getTableData: [],//获取表格数据
                allTable: [],//复制表格数据
                getTableHeader: [],//获取表头
                loading: true,
                currentPage: 1,//当前页
                pageSize:10,//每页数量
                totalCount: 0,//总页数
                multipleSelectData: [],//多选选中数据
            }
        },
        methods: {
            handleSelect(val){ //多选选中
                this.multipleSelectData = val
                this.$emit("getSelection", val);
            },
            handleSizeChange(val) {//pagesize改变
                this.pageSize = val;
                this.upDateTable(this.currentPage,val)
            },
            handleCurrentChange(val) {//currentPage改变
                this.currentPage = val;
                this.upDateTable(val,this.pageSize)
            },
           upDateTable(pageNum,pageSize){//分页刷新表格
                if(pageNum === 1){
                    this.getTableData = this.allTable.slice(0,pageNum*pageSize)
                }else {
                    this.getTableData = this.allTable.slice((pageNum-1)*pageSize,pageNum*pageSize)
                }
            },
            cellStyle({ row, column, rowIndex, columnIndex }) {
                let name = column.property;
                let color = { backgroundColor: "", color: "", };
                if ( name == "data6") { //标准管理——质量标准——状态
                    if (row.data6 == '停用') {
                        color.color = "#e82626";
                    }
                }
                if ( name == "data8") { //准入申请——申请管理——状态
                    if (row.data8 == '待申请' || row.data8 == '驳回' || row.data8 == '未提交') {
                        color.color = "#e82626";
                    }
                    if (row.data8 == '合格') {
                        color.color = "#34bfc6";
                    }
                }
                if ( name == "data9") { //审计——供应商——合格供应商
                    if (row.data9 == '有效') {
                        color.color = "#409EFF";
                    }
                    if (row.data9 == '已过期') {
                        color.color = "#e82626";
                    }
                    if (row.data9 == '即将过期') {
                        color.color = "#E6A23C";
                    }
                }
                return color;
            },
            getSummaries(param) {
                const { columns, data } = param;
                const sums = [];
                columns.forEach((column, index) => {
                    if (index === 0) {
                        sums[index] = '合计';
                        return;
                    }
                    if(column.property == 'tableNum5') {
                        const values = data.map(item => Number(item[column.property]));
                         sums[index] = values.reduce((prev, curr) => {
                            const value = Number(curr);
                            if (!isNaN(value)) {
                                return prev + curr;
                            } else {
                                return prev;
                            }
                        }, 0);
                        sums[index] += '';
                    }
                });
                return sums;
            }
        },
        watch: {
            tableData(val) {
                let getTableData = val
                this.totalCount = getTableData.length
                if(this.totalCount <= this.pageSize){
                    this.getTableData = getTableData
                }else {
                    this.getTableData = getTableData.slice(0,this.pageSize*this.currentPage)
                }
                this.allTable = JSON.parse(JSON.stringify(val));
            },
            tableLoading(val) {
                this.loading = val;
            },
            tableHeader(val) {
                this.getTableHeader = val
            },
            pageSizeParam(val) {
                this.pageSize = val;
            }
        }
    }
</script>