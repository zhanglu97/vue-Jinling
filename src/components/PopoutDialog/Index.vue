<template>
    <div class="movePopout">
        <!--背景-->
        <div class="popout-bg" @mousemove="mousemove">
            <div
                class="popout-main"
                v-bind:class="{'isMax':isMax == 2,'isMin':isMax == 0}"
                v-bind:style="getPosition(height)"
            >
                <div class="title" @mousedown="mousedown" @mouseup="mouseup">
                    <div class="text" v-if="isMax !== 0">
                        <div class="txt"><span>{{title || '提示'}}</span></div>
                        <div class="cssborder"></div>
                        <div class="cssborder2"></div>
                        <div class="cssborder3"></div>
                    </div>
                    <div v-else>
                        {{title || '提示'}}
                    </div>
                    <div class="tool" @mousedown.stop>
                        <!--最小化-->
                        <i class="el-icon-minus" v-show="isMax == 1" @click="setIsMax(0)"></i>
                        <!--最大化-->
                        <i class="el-icon-top-right" @click="setIsMax(2)" v-show="isMax == 1"></i>
                        <!--正常化-->
                        <i class="el-icon-copy-document" @click="setIsMax(1)" v-show="isMax != 1"></i>
                        <!--关闭-->
                        <i class="el-icon-close" @click="close()"></i>
                    </div>
                </div>
                <div class="content" v-show="isMax != 0" :class="isBottom ? '': 'no'">
                    <slot name="content"></slot>
                </div>
                <div class="bottom" :class="isBottom ? '': 'no'">
                    <slot name="bottom"></slot>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "movePopout",
    props: {
        title: {
            default: function() {
                return '';
            },
            type: String
        },
        visible: {
            default: function() {
                return false;
            },
            type: Boolean
        },
        height: {
            default: function() {
                return '';
            },
            type: String
        },
        isBottom: {
            default: function() {
                return true;
            },
            type: Boolean
        },
    },
    data() {
        return {
            isMax: 1, //是否是最大化 0 最小 1 正常  2最大
            left: false, //弹框left距离 false 代表初始移动位置
            top: false, //弹框top距离 false 代表初始移动位置
        };
    },
    watch: {},
    methods: {
        confirm() {
            //确定
            this.$emit("update:visible", true);
        },
        close() {
            //关闭
            this.$emit("update:visible", false);
        },
        setIsMax(val) {
            //设置窗口最大化、最小化
            this.left = false; //位置初始化
            this.top = false; //位置初始化
            this.isMax = val;
        },
        mousedown(e) {
            //按下
            this.down = true; //添加监听
            this.titleX = e.offsetX; //添加监听
            this.titleY = e.offsetY; //添加监听
        },
        mousemove(e) {
            //移动
            if (this.down) {
                let x = e.clientX,
                    y = e.clientY;
                this.left = x - this.titleX; //设置弹框移动
                this.top = y - this.titleY; //设置弹框移动
            }
        },
        mouseup(e) {
            //松开
            this.down = false; //不添加监听
        },
        getPosition(height) {
            //返回弹框位置
            if (this.left === false || this.top == false) {
                return {
                    height: height,
                };
            } else {
                return {
                    left: this.left + "px",
                    top: this.top + "px",
                    height: height,
                };
            }
        },
    },
    mounted() {},
    components: {},
};
</script>
<style scoped lang="scss">
.movePopout {
    /*弹框背景*/
    .popout-bg {
        position: absolute;
        overflow: hidden;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 9;
        background: rgba(0, 0, 0, 0.4);
    }
    /*弹框内容*/
    .popout-main {
        &.isMax {
            width: calc(100% - 60px);
            height: calc(100% - 90px) !important;
            left: 30px;
            top: 45px;
        }
        &.isMin {
            width: 200px;
            height: 40px !important;
            left: 0;
            bottom: 0;
            overflow: hidden;
            top: auto;
        }
        position: absolute;
        width: 600px;
        height: 500px;
        background: #ffffff;
        z-index: 10;
        left: calc(50% - 300px);
        top: calc(50% - 300px);
        overflow: hidden;
        font-size: 12px;
        /*标题*/
        .title {
            height: 40px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid #eee;
            color: #ffffff;
            background: #284358;
            cursor: move;
            .text {
                font-weight: normal;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                flex: 1;
                text-align: center;
                font-size: 14px;
                .txt {
                    line-height: 40px;
                    height: 40px;
                    position: relative;
                    display: flex;
                    flex-wrap: nowrap;
                    align-content: center;
                    justify-content: center;
                    span {
                        position: absolute;
                        top: 10px;
                    }
                }
                .cssborder {
                    background: #ffffff;
                    position: relative;
                    height: 10px;
                    line-height: 10px;
                    width: 28%;
                    float: left;
                    z-index: 1111;
                    &::after {
                        content: '';
                        width: 0;
                        height: 0;
                        border-bottom: 10px solid transparent;
                        border-right: 15px solid #284358;
                        position: absolute;
                        right: 0;
                        top: 0;
                    }
                }
                .cssborder2 {
                    background: #284358;
                    position: relative;
                    height: 10px;
                    line-height: 10px;
                    width: 44%;
                    float: left;
                    z-index: 1111;
                }
                .cssborder3 {
                    background: #ffffff;
                    position: relative;
                    margin-bottom: 5px;
                    height: 10px;
                    line-height: 10px;
                    width: 28%;
                    float: left;
                    z-index: 1111;
                    &::after {
                        content: '';
                        width: 0;
                        height: 0;
                        border-bottom: 10px solid transparent;
                        border-left: 15px solid #284358;
                        position: absolute;
                        left: 0;
                        top: 0;
                    }
                }
            }
            .tool {
                max-width: 120px;
                text-align: right;
                padding-right: 20px;
                height: 100%;
                line-height: 30px;
                cursor: initial;
                position: absolute;
                right: 0;
                top: 2px;
                i {
                    cursor: pointer;
                    font-size: 16px;
                    font-weight: bold;
                    margin-left: 10px;
                    &:hover {
                        opacity: 0.7;
                    }
                }
            }
        }
        /*内容*/
        .content {
            height: calc(100% - 96px);
            display: block;
            flex-direction: column;
            position: relative;
            overflow: auto;
            padding: 20px 25px 0px 25px;
            &.no {
                height: calc(100% - 46px);
            }
        }
        /*底部按钮*/
        .bottom {
            height: 50px;
            padding: 0 5px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            padding-bottom: 10px;
            padding-top: 10px;
            &.no {
                display: none;height: 0;
            }
            .confirm,
            .clear {
                height: 35px;
                line-height: 35px;
                padding: 0 20px;
                border: 1px solid #409eff;
                color: #409eff;
                background: #ffffff;
                cursor: pointer;
                // border-radius: 2px;
                i {
                    font-weight: bold;
                }
                &:hover {
                    color: #5789d7;
                    border-color: #5789d7;
                    background: rgba(0, 0, 0, 0.03);
                }
            }
            .clear {
                margin-left: 10px;
            }
        }
    }
}
.bigSize {
    .popout-main {
        width: 800px;
        height: 700px;
        left: calc(50% - 400px);
    }
}
.minSize {
    .popout-main {
        font-size: 12px;
        width: 400px;
        height: 350px;
        left: calc(50% - 200px);
        top: calc(50% - 250px);
    }
}
.ReagentManage {
    .popout-main {
        font-size: 12px;
        width: 30%;
        height: 500px;
        left: 35%;
        top: calc(50% - 300px);
        .content {
            padding: 10px 20px;
        }
    }
}
.longSize {
    .popout-main {
        width: 70%;
        left: 15%;
    }
}
.QC {
    .popout-main {
        height: 660px;
        top: calc(50% - 400px);
        .doPrint {
            padding: 0 50px;
        }
    }
}
.changePassword {
    .movePopout .popout-bg {
        position: fixed;
    }
}
</style>
