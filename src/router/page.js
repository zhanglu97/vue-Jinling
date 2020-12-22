import FirstPage from '@/page/mainContent/Firstpage/Index' //信息公告
import QualitStandard from '@/page/mainContent/StandardManage/QualitStandard/Index' //标准管理——质量标准
import ParamSet from '@/page/mainContent/StandardManage/ParamSet/Index' //标准管理——参数设定
import QualityName from '@/page/mainContent/StandardManage/QualityName/Index' //标准管理——资质认证
import Send from '@/page/mainContent/StandardManage/Send/Index' //信息发布
// import MaterialManage from '@/page/mainContent/StandardManage/MaterialManage/Index' //标准管理——物料管理
import AddAccess from '@/page/mainContent/AccessApply/AddAccess/Index' //准入申请——新建申请
import ApplyManage from '@/page/mainContent/AccessApply/ApplyManage/Index' //准入申请——申请管理
import BatchCheck from '@/page/mainContent/AccessApply/BatchCheck/Index' //准入申请——批次请检
import admit from '@/page/mainContent/AuditManage/admit/admit' //审计管理——准入审计
import dynamic from '@/page/mainContent/AuditManage/dynamic/dynamic' //审计管理——动态审计
import time from '@/page/mainContent/AuditManage/time/time' //审计管理——定时审计
import AnnualPlan from '@/page/mainContent/AuditManage/AnnualPlan/Index' //审计管理——年度计划
import QualityReview from '@/page/mainContent/AuditManage/QualityReview/Index' //审计管理——质量回顾
import Supply from '@/page/mainContent/Supplier/Supply/Index' //供应商管理——合格供应商
import Prospective from '@/page/mainContent/Supplier/Prospective/Index' //供应商管理——准供应商
import QualificationAge from '@/page/mainContent/Supplier/QualificationAge/Index' //供应商管理——资质时效
import Organization from '@/page/mainContent/System/Organization/Index' //系统管理——组织架构
import User from '@/page/mainContent/System/User/Index' //系统管理——用户管理
import Power from '@/page/mainContent/System/Power/Index' //系统管理——角色权限
import DataCopy from '@/page/mainContent/System/DataCopy/Index' //系统管理——数据备份
import SystemLog from '@/page/mainContent/System/SystemLog/Index' //系统管理——系统日志
import InspectionResult from '@/page/mainContent/InspectManage/InspectionResult/Index' //检验管理——检验结果
import QC from '@/page/mainContent/InspectManage/QC/Index' //检验管理——QC检验
import Stability from '@/page/mainContent/InspectManage/Stability/Index' //检验管理——稳定性考察
import Reserved from '@/page/mainContent/InspectManage/Reserved/Index' //检验管理——留样考察
import Receive from '@/page/mainContent/ReagentManage/Receive/Index' //试剂管理——领用发放
import ReceiveRecord from '@/page/mainContent/ReagentManage/ReceiveRecord/Index' //试剂管理——领用记录
import Stock from '@/page/mainContent/ReagentManage/Stock/Index' //试剂管理——库存管理
import ReagentManage from '@/page/mainContent/ReagentManage/ReagentManage/Index' //试剂管理——试剂管理
import StandBook from '@/page/mainContent/ReagentManage/StandBook/Index' //试剂管理——试剂台账
import Examine from '@/page/mainContent/Examine/Index' //审批

// **************登录后访问的路由**********
export default [
    {
        path: 'FirstPage',
        name: 'FirstPage',
        meta: {title: '信息公告'},
        component: FirstPage
    }, {
        path: 'Send',
        name: 'Send',
        meta: {title: '信息发布'},
        component: Send
    }, {
        path: 'QualitStandard',
        name: 'QualitStandard',
        meta: {title: '质量标准'},
        component: QualitStandard
    }, {
        path: 'ParamSet',
        name: 'ParamSet',
        meta: {title: '参数设定'},
        component: ParamSet
    }, {
        path: 'QualityName',
        name: 'QualityName',
        meta: {title: '资质名称'},
        component: QualityName
    }, 
    // {
    //     path: 'MaterialManage',
    //     name: 'MaterialManage',
    //     meta: {title: '物料管理'},
    //     component: MaterialManage
    // },
    {
        path: 'AddAccess',
        name: 'AddAccess',
        meta: {title: '新建申请'},
        component: AddAccess,
    }, {
        path: 'ApplyManage',
        name: 'ApplyManage',
        meta: {title: '申请管理'},
        component: ApplyManage
    }, {
        path: 'BatchCheck',
        name: 'BatchCheck',
        meta: {title: '批次请检'},
        component: BatchCheck
    }, {
        path: 'admit',
        name: 'admit',
        meta: {title: '准入审计'},
        component: admit
    }, {
        path: 'dynamic',
        name: 'dynamic',
        meta: {title: '动态审计'},
        component: dynamic
    }, {
        path: 'time',
        name: 'time',
        meta: {title: '定时审计'},
        component: time
    }, {
        path: 'Prospective',
        name: 'Prospective',
        meta: {title: '准供应商'},
        component: Prospective
    }, {
        path: 'Supply',
        name: 'Supply',
        meta: {title: '合格供应商'},
        component: Supply
    }, {
        path: 'QualificationAge',
        name: 'QualificationAge',
        meta: {title: '资质时效'},
        component: QualificationAge
    }, {
        path: 'AnnualPlan',
        name: 'AnnualPlan',
        meta: {title: '年度计划'},
        component: AnnualPlan
    }, {
        path: 'QualityReview',
        name: 'QualityReview',
        meta: {title: '质量回顾'},
        component: QualityReview
    }, {
        path: 'User',
        name: 'User',
        meta: {title: '用户管理'},
        component: User
    }, {
        path: 'Organization',
        name: 'Organization',
        meta: {title: '组织架构'},
        component: Organization
    }, {
        path: 'Power',
        name: 'Power',
        meta: {title: '角色权限'},
        component: Power
    }, {
        path: 'DataCopy',
        name: 'DataCopy',
        meta: {title: '数据备份'},
        component: DataCopy
    }, {
        path: 'SystemLog',
        name: 'SystemLog',
        meta: {title: '系统日志'},
        component: SystemLog
    }, {
        path: 'InspectionResult',
        name: 'InspectionResult',
        meta: {title: '检验结果'},
        component: InspectionResult
    }, {
        path: 'QC',
        name: 'QC',
        meta: {title: 'QC检验'},
        component: QC
    }, {
        path: 'Stability',
        name: 'Stability',
        meta: {title: '稳定性考察'},
        component: Stability
    }, {
        path: 'Reserved',
        name: 'Reserved',
        meta: {title: '留样考察'},
        component: Reserved
    }, {
        path: 'Receive',
        name: 'Receive',
        meta: {title: '领用发放'},
        component: Receive
    }, {
        path: 'ReceiveRecord',
        name: 'ReceiveRecord',
        meta: {title: '领用记录'},
        component: ReceiveRecord
    }, {
        path: 'Stock',
        name: 'Stock',
        meta: {title: '库存管理'},
        component: Stock
    }, {
        path: 'ReagentManage',
        name: 'ReagentManage',
        meta: {title: '试剂管理'},
        component: ReagentManage
    }, {
        path: 'StandBook',
        name: 'StandBook',
        meta: {title: '试剂台账'},
        component: StandBook
    }, {
        path: 'Examine',
        name: 'Examine',
        meta: {title: '审批'},
        component: Examine
    },
]
