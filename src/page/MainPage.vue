<template>
    <div class="MainPage">
        <Header ref="Header"></Header>
        <div class="main_right">
            <LeftMenu></LeftMenu>
            <div class="mainContent" :class="$store.state.leftMenuMin && 'max'">
                <div class="bodyContain">
                    <div class="app-main">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LeftMenu from "@/components/LeftMenu/index";
import Header from "@/components/Header/index";

export default {
    name: "MainPage",
    components: {
        LeftMenu,
        Header,
    },
    beforeRouteEnter(to, from, next) {
        // 在渲染该组件的对应路由被 confirm 前调用 不！能！获取组件实例 `this` 因为当钩子执行前，组件实例还没被创建
        next((VM) => {
            VM.$refs.Header.setMenu(to);
        });
    },
    beforeRouteUpdate(to, from, next) {
        // 在当前路由改变，但是该组件被复用时调用 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
        // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。可以访问组件实例 `this`
        next();
        this.$refs.Header.setMenu(to);
    },
    beforeRouteLeave(to, from, next) {
        // 导航离开该组件的对应路由时调用 可以访问组件实例 `this`
        next();
    },
};
</script>

<style scoped lang="scss">
.MainPage {
    width: 100%;
    height: 100%;
    overflow: auto;
    .main_right {
        height: calc(100% - 50px);
        width: 100%;
        display: flex;
    }
    .mainContent {
        // padding: 15px;
        height: calc(100% - 46px);
        background-color: #fff;
        width: calc(100% - 170px);
        margin-top: 46px;
        transition: width 0.3s;
        .bodyContain {
            background: #f2f2f2;
            padding: 15px;
                height: calc(100vh - 96px);
            .app-main {
                background: #fff;
                height: calc(100vh - 126px);
                .app-container {
                    padding: 15px;    
                    height: 100%;
                    box-shadow: 0 0 3px #ccc;
                    overflow: auto;
                }
            }
        }
        &.max {
            width: calc(100% - 64px);
        }
    }
}
</style>
