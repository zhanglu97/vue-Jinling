var colorList = ['#73A0FA', '#73DEB3'];

export default {
  option1: {
    color: ['#73A0FA', '#73DEB3', '#FFB761'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999'
        },
        lineStyle: {
          type: 'dashed'
        }
      }
    },
    grid: {
      left: '25',
      right: '25',
      bottom: '24',
      top: '75',
      containLabel: true
    },
    legend: {
      data: ['设备产量'],
      orient: 'horizontal',
      // icon: "rect",
      show: true,
      left: 20,
      top: 25,
    },
    xAxis: {
      type: 'category',
      data: ['01-01', '01-02', '01-03', '01-04', '01-05', '01-06', '01-07'],
      axisLabel: {interval: 0, rotate: 30},
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
    },
    yAxis: {
      type: 'value',
      // max: max_value>=100? max_value + 100: max_value+10,
      // max: max_value > 100 ? max_value * 2 : max_value + 10,
      // interval: 10,
      // nameLocation: "center",
      axisLabel: {
        color: '#999',
        textStyle: {
          fontSize: 12
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#F3F4F4'
        }
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
    },
    series: [{
      name: '设备产量',
      type: 'line',
      smooth: true,
      data: [13, 1, 4, 44, 45, 322, 76]
    }
    ]
  },


  option2: {
    tooltip: {
      trigger: 'item'
    },
    grid: {
      left: '20%',
      right: '20%',
      bottom: '24',
      top: '75',
    },
    legend: {
      data: ['一月', '二月'],
      orient: 'horizontal',
      // icon: "rect",
      show: true,
      left: 20,
      top: 25,
    },
    series: [{
      type: 'pie',
      radius: '40%',
      center: ['50%', '50%'],
      clockwise: true,
      hoverOffset: 15,
      itemStyle: {
        normal: {
          color: function (params) {
            return colorList[params.dataIndex]
          }
        }
      },
      label: {
        show: true,
        position: 'outside',
        formatter: '{a|{b}：{d}%}\n{hr|}',
        rich: {
          hr: {
            backgroundColor: 't',
            borderRadius: 3,
            width: 3,
            height: 3,
            padding: [3, 3, 0, -12]
          },
          a: {
            padding: [-30, 15, -20, 15]
          }
        }
      },
      labelLine: {
        normal: {
          length: 20,
          length2: 30,
          lineStyle: {
            width: 1
          }
        }
      },
      data: [{
        'name': '一月',
        'value': 1.45
      }, {
        'name': '二月',
        'value': 2.93
      },
      ],
    }]
  }
}
