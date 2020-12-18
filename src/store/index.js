import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import colorDataList from '@/components/colorPopout/colorData'
export default new Vuex.Store({
    state: {
        leftMenuMin: false, //左侧菜单最小化
        //主题数据
        colorData: localStorage.getItem('colorData') ? JSON.parse(localStorage.getItem('colorData')) : colorDataList[0],
        isApply: { //准入申请
            isAdd: true,
            state: '',
            data: []
        },
        applyApprove: { //准入审计
            state: '',
            data: []
        },
    },
    mutations: {
        SET_leftMenuMin(state, val) {
            state.leftMenuMin = val;
        },
        setColorData(state, data) {//设置主题数据
            localStorage.setItem('colorData', JSON.stringify(data));
            state.colorData = data;
        },
        SET_isApply(state, val) {
            state.isApply.isAdd = val.isAdd
            state.isApply.state = val.state
            state.isApply.data = val.data
        },
        SET_applyApprove(state, val) {
            state.applyApprove.state = val.state
            state.applyApprove.data = val.data
        },
    },
    actions: {

    },
    getters: {

    }
})
                                             