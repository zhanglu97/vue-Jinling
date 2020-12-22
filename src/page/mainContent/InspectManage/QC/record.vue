<template>
    <div class="addProject doPrint">
        <div class="addForm zll-form printOrder-data">
            <h2>金陵药业股份有限公司 · 南京金陵制药厂</h2>
            <h1>检验报告书</h1>
            <div>
                <el-row>
                    <el-col :span="12">
                        <div class="bottom_liet">
                            <span class="left">检品名称：</span>
                            <span class="right">琥珀酸亚铁片参比制剂</span>
                        </div>
                        <div class="bottom_liet">
                            <span class="left">包装规格：</span>
                            <span class="right">25片/板*4板/盒</span>
                        </div>
                        <div class="bottom_liet">
                            <span class="left">包装方式：</span>
                            <span class="right">铝塑泡罩</span>
                        </div>
                        <div class="bottom_liet">
                            <span class="left">检验目的：</span>
                            <span class="right">/</span>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="bottom_liet">
                            <span class="left">请检部门：</span>
                            <span class="right">技术中心</span>
                        </div>
                        <div class="bottom_liet">
                            <span class="left">请检日期：</span>
                            <span class="right">2020-01-01</span>
                        </div>
                        <div class="bottom_liet">
                            <span class="left">入库批号：</span>
                            <span class="right">AJC100</span>
                        </div>
                        <div class="bottom_liet">
                            <span class="left">批量：</span>
                            <span class="right">5000盒</span>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div style="margin: 20px 0">
                <el-row>
                    <div class="bottom_liet">
                        <span class="left">检验依据：</span>
                        <span class="right">琥珀酸亚铁片（一致性评价）质量标准</span>
                    </div>
                    <el-col :span="12">
                        <div class="bottom_liet">
                            <span class="left">检验号：</span>
                            <span class="right"></span>
                        </div>
                        <div class="bottom_liet">
                            <span class="left">检验日期：</span>
                            <span class="right">2002-09-11</span>
                        </div>
                        <div class="bottom_liet">
                            <span class="left">抽检数量：</span>
                            <span class="right">56片</span>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="bottom_liet">
                            <span class="left">检验：</span>
                            <span class="right">邱莎莎</span>
                        </div>
                        <div class="bottom_liet">
                            <span class="left">复核：</span>
                            <span class="right">张三</span>
                        </div>
                        <div class="bottom_liet">
                            <span class="left">负责：</span>
                            <span class="right">陈曦</span>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div class="tableList">
                <table class="print_bottom">
                    <tr>
                        <th width="5%">序号</th>
                        <th width="10%">检项</th>
                        <th width="40%">质量标准</th>
                        <th width="45%">检验结果</th>
                    </tr>
                    <tr>
                        <td width="5%">1</td>
                        <td width="10%">性状</td>
                        <td width="40%">磷酸钠磷酸钠磷酸钠磷酸钠磷酸钠磷酸钠磷酸钠磷酸钠磷酸钠磷酸钠磷酸钠磷酸钠磷酸钠磷酸钠磷酸钠磷酸钠磷酸钠磷酸钠磷酸钠磷酸钠磷酸钠磷酸钠磷酸钠</td>
                        <td width="45%"></td>
                    </tr>
                    <tr>
                        <td width="5%">2</td>
                        <td width="10%">溶出度</td>
                        <td width="40%"></td>
                        <td width="45%"></td>
                    </tr>
                    <tr>
                        <td width="5%">3</td>
                        <td width="10%">高铁</td>
                        <td width="40%">00.0%</td>
                        <td width="45%">2.9%</td>
                    </tr>
                    <tr>
                        <td width="5%">4</td>
                        <td width="10%">琥珀酸</td>
                        <td width="40%">00.0%</td>
                        <td width="45%">2.9%</td>
                    </tr>
                    <tr>
                        <td width="5%">5</td>
                        <td width="10%">含量测定</td>
                        <td width="40%">00.0%</td>
                        <td width="45%">2.9%</td>
                    </tr>
                </table>
                <p class="point_sin">李淼22020-01-01 15:00:00打印</p>
            </div>
            <div style="margin-top: 20px">
                <el-row>
                    <el-col :span="6">
                        <div class="bottom_liet last">
                            <span class="left">检验：</span>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="bottom_liet last">
                            <span class="left">复核：</span>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="bottom_liet last">
                            <span class="left">负责：</span>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="bottom_liet last">
                            <span class="left">检验单位盖章</span>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
        <p class="zll-botton allin" @click="doPrint()">打 印</p>
    </div>
</template>
<script>
export default {
    data(){
        return {
            
        }
    },
    methods: {
        doPrint() {
            var newstr = document.getElementsByClassName("printOrder-data")[0].innerHTML;
            var bdhtml = window.document.body.innerHTML;
            window.document.body.innerHTML = newstr;
            window.print();
            window.document.body.innerHTML = bdhtml; // 最后还原页面
            window.location.reload();

            this.$emit('addForm',false)
        },
    },
    mounted(){
        
    },
    components: {
    }
}
</script>
<style lang="scss" scoped>
@import "@/assets/style/dialog.scss";
@page {
    size: auto; /* auto is the initial value */
    margin: 0mm; /* this affects the margin in the printer settings */
}
.doPrint h2 {
    text-align: center;
    font-weight: 400;
}
.doPrint h1 {
    text-align: center;    
    margin: 20px 0;
}
.tableList {
    padding: 15px;
    margin-top: 0 !important;
    .point_sin {
        text-align: right;
    }
}
.print_bottom {
    table-layout: fixed;
    th {
        background: #ffffff !important;
        color: #222 !important;
        border: 1px solid #aaa !important;
    }
    td {
        background: #ffffff !important;
        border: 1px solid #aaa !important;
        word-wrap:break-word;
        overflow: auto !important;
        text-overflow: clip !important;
        white-space: normal !important;
    }
}
.bottom_liet {
    height: 26px;
    line-height: 26px;
    padding-left: 15px;
    .left {
        float: left;
        text-align: center;
        width: 60px;
        text-align-last: justify;
    }
    .right {
        width: calc(100% - 60px);
        float: left;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding-left: 10px;
    }
    &.last {
        .left {
            width: 80px;
            text-align-last: auto;
            text-align: left;
        }
    }
}
</style>
<style media="print">
h2 {
    text-align: center;
    font-weight: 400;
    padding-top: 20px;
}
h1 {
    text-align: center;    
    margin: 20px 0;
}
.tableList {
    padding: 15px;
}
.tableList table {
    text-align: center;
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
}
.tableList table th, td {
    height: 35px;
    line-height: 35px;
    padding: 3px;
}
.print_bottom th {
    background-color: #ffffff;-webkit-print-color-adjust: exact;
    font-weight: normal;
    border: 1px solid #aaa;
}
.print_bottom td {
    border: 1px solid #aaa;word-wrap:break-word;
}
</style>