<template>
    <div class="FirstPage">
        <div class="main_part">
            <div class="part_nav dataTong">
                <h2 class="title"><i class="iconfont iconfonta icon-tongji"></i> 数据统计</h2>
                <div class="contain">
                    <div class="dataList dataList1">
                        <p class="name">用户量</p>
                        <p class="total">5414</p>
                    </div>
                    <div class="dataList dataList2">
                        <p class="name">接口量</p>
                        <p class="total">356</p>
                    </div>
                    <div class="dataList dataList3">
                        <p class="name">登录量</p>
                        <p class="total">541</p>
                    </div>
                    <div class="dataList dataList4">
                        <p class="name">浏览量</p>
                        <p class="total">87455</p>
                    </div>
                    <div class="clearBoth"></div>
                </div>
            </div>
            <div class="part_nav middle">
                <h2 class="title"><i class="iconfont iconfontb icon-kuaijierukou"></i> 快捷入口</h2>
                <div class="contain">
                    <div class="dataList" v-for="(item,index) in routerList" :key="index">
                        <span class="delete"><i class="el-icon-remove-outline"></i></span>
                        <div class="image" @click="goPage(item.name)">
                            <i class="iconfont" :class="item.icon"></i>
                        </div>
                        <p class="name">{{ item.title }}</p>
                    </div>
                    <div class="dataList">
                        <div class="image" @click="openList()">
                            <i class="iconfont icon-jia4"></i>
                        </div>
                        <p class="name">添加入口</p>
                    </div>
                    <div class="clearBoth"></div>
                </div>
            </div>
            <div class="part_nav banben">
                <h2 class="title"><i class="iconfont iconfontc icon-shezhi"></i> 版本信息</h2>
                <div class="contain">
                    <div class="titlen">
                        <p>金陵药业</p>
                        <p class="subtitle">变更控制管理系统</p>
                    </div>
                    <p class="txt">当前版本：V1.0.0</p>
                </div>
            </div>
            <div class="clearBoth"></div>
        </div>
        <div class="main_part last">
            <div class="part_nav baobiao">
                <h2 class="title"><i class="iconfont iconfontd icon-tongji"></i> 用户统计</h2>
                <div class="contain">
                    <div class="echart" ref="echart1"></div>
                </div>
            </div>
            <div class="part_nav baobiao baobiao2">
                <h2 class="title"><i class="iconfont iconfonte icon-tongji"></i> 报表统计</h2>
                <div class="contain">
                        <div class="echart" ref="echart2"></div>
                </div>
            </div>
        </div>
        
        <div class="zll-dialog changePassword">
            <popout title="添加入口" :visible.sync="dialogVisible" v-if="dialogVisible" class="minSize">
                <div class="csstop">
                <div class="cssborder"></div>
                <div class="cssborder2"></div>
                <div class="cssborder3"></div>
                </div>
                <div class="zll_checkboxG">
                    <el-checkbox-group v-model="routerList" class="check_group">
                        <el-checkbox v-for="(item,index) in routerListAll" :key="index" :label="item.title">{{item.title}}</el-checkbox>
                    </el-checkbox-group>
                </div>
                <template slot="bottom">
                    <p class="zll-botton">确 定</p>
                </template>
            </popout>
        </div>
    </div>
</template>

<script>
import Detail from "./detail";
import echartOption from './echart'

export default {
    data() {
        return {
            dialogVisible: false,
            routerListAll: [],
            routerList:[{
                name: 'AddAccess',//路由name
                title: '新建申请',
                icon: 'icon-tianjiazitu',
            }, {
                name: 'BatchCheck',//路由name
                title: '准入批检',
                icon: 'icon-shenpijiancha',
            }, {
                name: 'admit',//路由name
                title: '准入审计',
                icon: 'icon-shenjizuoyeguanli',
            }, {
                name: 'AnnualPlan',//路由name
                title: '年度计划',
                icon: 'icon-zuixing_huaban1',
            }, {
                name: 'QualityReview',//路由name
                title: '质量回顾',
                icon: 'icon-wangqihuigu',
            }, {
                name: 'Prospective',//路由name
                title: '准供应商',
                icon: 'icon-gongyingshangguanli',
            }] 
        };
    },
    methods: {
        goPage(name) {
            this.$router.push({name})
        },
        getEchartData() { 
            let echart1 = this.$echarts.init(this.$refs.echart1);
            echart1.setOption(echartOption.option1)
            let echart2 = this.$echarts.init(this.$refs.echart2);
            echart2.setOption(echartOption.option2)
        },
        openList() {
            this.dialogVisible = true;
        },
        closeDialog() {
            this.dialogVisible = false;
        },
    },
    mounted() {
        this.getEchartData()
    },
    components: {
        Detail,
    },
};
</script>
<style scoped lang="scss">
@font-face {
    font-family: 'fonta';  //重命名字体名
    src: url('../../../assets/fontFamily.ttf');  //引入字体
}
.FirstPage {
    height: 100%;
    background: #f2f2f2;
    .main_part {
        margin-bottom: 15px;
        height: 330px;  
        .part_nav {
            width: 40%;
            height: 100%;
            float: left;    
            box-shadow: 0 0 3px #8fc4c7;
            background: #fff;
            &.dataTong {
                .contain {
                    padding: 15px 15px 5px 15px;
                    height: calc(100% - 40px);
                    color: #fff;
                    .dataList {
                        width: calc(50% - 5px);
                        background-color: #F8F8F8;
                        float: left;
                        margin-bottom: 10px;
                        padding: 15px;
                        height: calc(50% - 10px);
                        border-radius: 10px;
                        &:nth-of-type(2n) {
                            margin-left: 5px;
                        }
                        &:nth-of-type(2n - 1) {
                            margin-right: 5px;
                        }
                        .total {
                            text-align: center;
                            font-size: 25px;
                            margin-top: 30px;
                        }
                        &.dataList1 {
                            background: linear-gradient(to right, #5fdbef, #73A0FA,);
                        }
                        &.dataList2 {
                            background: linear-gradient(to right, #ffdc5c, #FFB761,);
                        }
                        &.dataList3 {
                            background: linear-gradient(to right, #acf5a4, #73DEB3,);
                        }
                        &.dataList4 {
                            background: linear-gradient(to right, #89c7fd, #9E87FF,);
                        }
                    }
                }
            }
            &.middle {
                width: calc(40% - 30px);
                margin: 0 15px;
                background-color: #f2f6fc;
                border-radius: 15px;
                .contain {
                    padding: 15px 5px 5px 15px;
                    height: calc(100% - 40px);
                    
                    .dataList {
                        float: left;
                        width: calc(25% - 10px);
                        margin: 0 10px 10px 0;
                        position: relative;

                        .delete {
                            display: none;
                            position: absolute;
                            right: 5px;
                            top: 5px;
                            color: #F56C6C;
                            cursor: pointer;
                            z-index: 11111;
                            &:hover {
                                background: #f5f5f5;
                            }
                        }
                        .image {
                            background-color: #fff;
                            border: 1px solid #cbcbcb;
                            height: 85px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            cursor: pointer;
                            border-radius: 10px;
                            .iconfont {
                                font-size: 30px;
                            }
                        }
                        .name {
                            text-align: center;
                            height: 35px;
                            line-height: 35px;
                            color: #6e6e6e;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            margin: 0;
                            font-size: 12px;
                        }
                        &:hover {
                            transition: all .3s;
                            .image {
                                border: 1px solid #34bfc6;
                                color: #34bfc6;
                            }
                            .name {
                                color: #333;
                                font-size: 14px;
                            }
                            .delete {
                                display: block;
                            }
                        }
                    }
                }
            }
            &.banben {
                width: 20%;
                background-color: #f2f6fc;
                border-radius: 15px;
                .contain {
                    padding: 15px;
                    height: 280px;
                    font-size: 14px;
                    line-height: 60px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
                    .titlen {
                        font-size: 20px;
                        line-height: 30px;
                        color: #34bfc6;
                        font-family: fonta;
                    }
                    .txt {
                        color: #787878;
                    }
                }
            }
            .title {
                font-size: 14px;
                height: 40px;
                line-height: 36px;
                padding: 0 15px;
                display: flex;
                align-items: center;
                .iconfont {
                    font-size: 18px;
                    font-weight: 400;
                    color: #34bfc6;
                    margin-right: 5px;
                }
            }
        }
        &.last {
            height: calc(100% - 345px); 
            .baobiao {
                width: 60%;
                height: 100%;
                .contain {
                    height: calc(100% - 40px);
                    .echart {
                        width: 100%;
                        height: 100%;
                    }
                }
                &.baobiao2 {
                    margin-left: 15px;
                    width: calc(40% - 15px);
                    .contain {
                        height: calc(100% - 40px);
                            .echart {
                                width: 100%;
                                height: 100%;
                            }
                    }
                }
            }
        }
    }
}
</style>
