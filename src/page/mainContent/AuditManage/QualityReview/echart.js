let color = [
    "#8B5CFF",
    "#00CA69",
    "#f0c725",
    "#1890ff",
];
let xAxisData = ["P01", "P02", "P03", "P04", "P05", "P06", "P07", "P08"];
let yAxisData1 = [100, 138, 350, 173, 180, 150, 180, 230];
let yAxisData2 = [233, 233, 200, 180, 199, 233, 210, 180];
let yAxisData3 = [277, 266, 266, 189, 155, 134, 321, 156];
let yAxisData4 = [68, 86, 46, 120, 99, 55, 122, 111];

const hexToRgba = (hex, opacity) => {
    let rgbaColor = "";
    let reg = /^#[\da-f]{6}$/i;
    if (reg.test(hex)) {
        rgbaColor = `rgba(${parseInt("0x" + hex.slice(1, 3))},${parseInt(
            "0x" + hex.slice(3, 5)
        )},${parseInt("0x" + hex.slice(5, 7))},${opacity})`;
    }
    return rgbaColor;
}

export default {
    option1: {
        title: {
            text: '山梨酸钾80 20190801-20201231质量回顾折线图',
            textStyle: {
                fontSize: 16,
                fontWeight: 400
            },
            left: 'center',
        },
        color: color,
        legend: {
            top: 50,
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: 'shadow',
                shadowStyle: {
                    color: '#ffffff',
                    shadowColor: 'rgba(225,225,225,1)',
                    shadowBlur: 5
                }
            }
        },
        grid: {
            top: '25%',
        },
        xAxis: [{
            type: "category",
            boundaryGap: false,
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    color: "#333"
                }
            },
            axisLine: {
                lineStyle: {
                    color: "#D9D9D9"
                }
            },
            data: xAxisData,
        }],
        yAxis: [{
            type: "value",
            name: '单位',
            axisLabel: {
                textStyle: {
                    color: "#666"
                }
            },
            nameTextStyle: {
                color: "#666",
                fontSize: 12,
                lineHeight: 40
            },
            // 分割线
            splitLine: {
                lineStyle: {
                    type: "dashed",
                    color: "#E9E9E9"
                }
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        }],
        series: [{
            // name: "2018",
            name: "山梨酸钾",
            type: "line",
            smooth: true,
            symbolSize: 8,
            zlevel: 3,
            lineStyle: {
                normal: {
                    color: color[0],
                    shadowBlur: 3,
                    shadowColor: hexToRgba(color[0], 0.5),
                    shadowOffsetY: 8
                }
            },
            symbol: 'circle',//数据交叉点样式
            areaStyle: {
                normal: {
                    color: { x: 0, y: 0, x2: 0, y2: 1,
                        colorStops: [
                            { offset: 0, color: hexToRgba(color[0], 0.3) },
                            { offset: 1, color: hexToRgba(color[0], 0.1) }
                        ]
                    },
                    shadowColor: hexToRgba(color[0], 0.1),
                    shadowBlur: 10
                }
            },
            data: yAxisData1
        }, {
            name: "水分",
            type: "line",
            smooth: true,
            symbolSize: 8,
            zlevel: 3,
            lineStyle: {
                normal: {
                    color: color[1],
                    shadowBlur: 3,
                    shadowColor: hexToRgba(color[1], 0.5),
                    shadowOffsetY: 8
                }
            },
            symbol: 'circle',//数据交叉点样式 (实心点)
            areaStyle: {
                normal: {
                    color: { x: 0, y: 0, x2: 0, y2: 1,
                        colorStops: [
                            { offset: 0, color: hexToRgba(color[1], 0.3) },
                            { offset: 1, color: hexToRgba(color[1], 0.1) }
                        ]
                    },
                    shadowColor: hexToRgba(color[1], 0.1),
                    shadowBlur: 10
                }
            },
            data: yAxisData2
        }, {
            name: "溶出度",
            type: "line",
            smooth: true,
            symbolSize: 8,
            zlevel: 3,
            lineStyle: {
                normal: {
                    color: color[2],
                    shadowBlur: 3,
                    shadowColor: hexToRgba(color[2], 0.5),
                    shadowOffsetY: 8
                }
            },
            symbol: 'circle',//数据交叉点样式 (实心点)
            areaStyle: {
                normal: {
                    color: { x: 0, y: 0, x2: 0, y2: 1,
                        colorStops: [
                            { offset: 0, color: hexToRgba(color[2], 0.3) },
                            { offset: 1, color: hexToRgba(color[2], 0.1) }
                        ]
                    },
                    shadowColor: hexToRgba(color[2], 0.1),
                    shadowBlur: 10
                }
            },
            data: yAxisData3
        }, {
            name: "高铁",
            type: "line",
            smooth: true,
            symbolSize: 8,
            zlevel: 3,
            lineStyle: {
                normal: {
                    color: color[3],
                    shadowBlur: 3,
                    shadowColor: hexToRgba(color[3], 0.5),
                    shadowOffsetY: 8
                }
            },
            symbol: 'circle',//数据交叉点样式 (实心点)
            areaStyle: {
                normal: {
                    color: { x: 0, y: 0, x2: 0, y2: 1,
                        colorStops: [
                            { offset: 0, color: hexToRgba(color[3], 0.3) },
                            { offset: 1, color: hexToRgba(color[3], 0.1) }
                        ]
                    },
                    shadowColor: hexToRgba(color[3], 0.1),
                    shadowBlur: 10
                }
            },
            data: yAxisData4
        }]
    }
}