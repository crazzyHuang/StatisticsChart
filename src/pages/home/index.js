import { connect } from 'dva';
import React, { Component } from 'react';
import router from 'umi/router';
import { Row, Col, Statistic } from 'antd';
import ReactEcharts from 'echarts-for-react';
import echart from 'echarts';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Title from '../../components/title';
// import Horn from '../../components/horn';

import styles from './index.css';

@connect(({ home, global }) => ({ home, global }))
class Index extends Component {
  componentDidMount() {
    // this.props.dispatch({
    //   type: 'home/fetch',
    //   payload: {},
    // });
  }

  handleItemClick = type => {
    router.push(`/${type}`);
  };

  render() {
    const bazxOption = {
      grid: {
        top: 10,
        bottom: 20,
      },
      xAxis: [
        {
          type: 'category',
          data: ['涉案', '嫌疑', '笔录', '上传', '前三'],
          axisPointer: {
            type: 'shadow',
          },
          axisLine: {
            lineStyle: { color: '#0df7dc' },
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
          name: '数量',

          axisLine: {
            lineStyle: { color: 'rgba(13,247,220,0.6)' },
          },
          splitLine: {
            show: false,
            lineStyle: { color: 'rgba(13,247,220,0.6)' },
          },
        },
        {
          type: 'value',
          name: '比例',

          axisLine: {
            lineStyle: { color: 'rgba(13,247,220,0.6)' },
          },
          splitLine: {
            lineStyle: { color: 'rgba(13,247,220,0.6)' },
          },
        },
      ],
      series: [
        {
          name: '蒸发量',
          type: 'bar',
          data: [2.0, 4.9, 7.0, 23.2, 25.6],
          itemStyle: {
            color: 'rgb(117,247,240)',
          },
        },
        {
          name: '平均温度',
          type: 'line',
          yAxisIndex: 1,
          lineStyle: { color: 'rgb(52,209,247)' },
          data: [2.0, 2.2, 3.3, 4.5, 6.3],
        },
        {
          name: '温度',
          type: 'line',
          yAxisIndex: 1,
          lineStyle: { color: 'rgb(247,143,21)' },
          data: [2.0, 2.2, 3.3, 4.5, 6.3].reverse(),
        },
      ],
    };

    const myColor = ['#00c0e9', '#0096f3', '#33CCFF', '#00e9db', '#33FFCC'];
    const agoption = {
      grid: {
        top: '10',
        bottom: '0',
        containLabel: true,
      },
      xAxis: [
        {
          show: false,
        },
      ],
      yAxis: [
        {
          axisTick: 'none',
          axisLine: 'none',
          offset: '27',
          axisLabel: {
            textStyle: {
              color: '#33FFCC',
              fontSize: '16',
            },
          },
          data: ['移送起诉', '执法超期', '审核审批', '申请借阅', '存入案卷'],
        },
        {
          axisTick: 'none',
          axisLine: 'none',
          axisLabel: {
            textStyle: {
              color: '#ffffff',
              fontSize: '16',
            },
          },
        },
        {
          nameTextStyle: {
            color: '#ffffff',
            fontSize: '16',
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(0,0,0,0)',
            },
          },
          data: [],
        },
      ],
      series: [
        {
          name: '条',
          type: 'bar',
          yAxisIndex: 0,
          data: [4, 13, 25, 29, 38],
          label: {
            normal: {
              show: true,
              position: 'right',
              textStyle: {
                color: '#00c0e9',
                fontSize: '16',
              },
            },
          },
          barWidth: 6,
          itemStyle: {
            normal: {
              color: function(params) {
                var num = myColor.length;
                return myColor[params.dataIndex % num];
              },
            },
          },
          z: 2,
        },
        {
          name: '外圆',
          type: 'scatter',
          hoverAnimation: false,
          data: [0, 0, 0, 0, 0],
          yAxisIndex: 2,
          symbolSize: 16,
          itemStyle: {
            normal: {
              color: function(params) {
                var num = myColor.length;
                return myColor[params.dataIndex % num];
              },
              opacity: 1,
            },
          },
          z: 2,
        },
      ],
    };

    const wgption = {
      visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
          colorLightness: [0, 1],
        },
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '80%',
          center: ['50%', '50%'],
          data: [
            { value: 335, name: '涉案物品' },
            { value: 310, name: '物品所在案件' },
            { value: 274, name: '异常出库' },
            { value: 235, name: '同比' },
            { value: 400, name: '环比' },
          ].sort(function(a, b) {
            return a.value - b.value;
          }),
          roseType: 'radius',
          label: {
            normal: {
              textStyle: {
                color: 'rgba(255, 255, 255, 0.3)',
              },
            },
          },
          labelLine: {
            normal: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.3)',
              },
              smooth: 0.2,
              length: 10,
              length2: 20,
            },
          },
          itemStyle: {
            normal: {
              color: '#c23531',
              shadowBlur: 200,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },

          animationType: 'scale',
          animationEasing: 'elasticOut',
          animationDelay: function(idx) {
            return Math.random() * 200;
          },
        },
      ],
    };

    const slaoption = {
      tooltip: {},
      animationDurationUpdate: 1500,
      animationEasingUpdate: 'quinticInOut',
      color: ['#83e0ff', '#45f5ce', '#b158ff'],
      series: [
        {
          type: 'graph',
          layout: 'force',
          force: {
            repulsion: 200,
            edgeLength: 80,
          },
          roam: true,
          label: {
            normal: {
              show: true,
            },
          },
          data: [
            {
              name: '笔录制作情况',
              symbolSize: 60,
              draggable: true,
              category: 0,
              itemStyle: {
                normal: {
                  borderColor: '#04f2a7',
                  borderWidth: 6,
                  shadowBlur: 20,
                  shadowColor: '#04f2a7',
                  color: '#001c43',
                },
              },
            },
            {
              name: '问话笔录材料',
              symbolSize: 60,
              itemStyle: {
                normal: {
                  borderColor: '#04f2a7',
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: '#04f2a7',
                  color: '#001c43',
                },
              },
              category: 1,
            },
            {
              name: '回执送达情况',
              symbolSize: 60,
              category: 1,
              itemStyle: {
                normal: {
                  borderColor: '#04f2a7',
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: '#04f2a7',
                  color: '#001c43',
                },
              },
            },
            {
              name: '询问查证时间总合格率',
              symbolSize: 60,
              category: 1,
              itemStyle: {
                normal: {
                  borderColor: '#82dffe',
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: '#04f2a7',
                  color: '#001c43',
                },
              },
            },
          ],
          links: [
            {
              source: '笔录制作情况',
              target: '问话笔录材料',
            },

            {
              source: '问话笔录材料',
              target: '回执送达情况',
              value: 'DNA',
            },
            {
              source: '询问查证时间总合格率',
              target: '笔录制作情况',
            },
          ],
          lineStyle: {
            normal: {
              opacity: 0.9,
              width: 5,
              curveness: 0,
            },
          },
          categories: [{ name: '0' }, { name: '1' }, { name: '2' }],
        },
      ],
    };

    const jcyfyoption = {
      grid: {
        top: '20',
        left: '40',
        right: '10',
        bottom: '20',
      },
      xAxis: [
        {
          type: 'category',
          color: '#59588D',
          data: [
            '推送案件同比',
            '推送案件环比',
            '推送材料同比',
            '推送材料环比',
            '接收判决同比',
            '接收判决环比',
          ],
          axisPointer: {
            type: 'line',
          },
          axisLine: {
            lineStyle: {
              color: '#272456',
            },
          },
          axisLabel: {
            color: '#59588D',
            textStyle: {
              fontSize: 12,
            },
          },
        },
      ],
      yAxis: [
        {
          min: 0,
          max: 100,
          axisLabel: {
            formatter: '{value}%',
            color: '#59588D',
          },
          axisLine: {
            show: false,
          },
          splitLine: {
            lineStyle: {
              color: '#272456',
            },
          },
        },
      ],
      series: [
        {
          type: 'bar',
          data: [100, 90, 10, 90, 90, 20],
          barWidth: '20px',
          itemStyle: {
            normal: {
              color: new echart.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: '#41E1D4', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#10A7DB', // 100% 处的颜色
                  },
                ],
                false,
              ),
              barBorderRadius: [30, 30, 0, 0],
              shadowColor: 'rgba(0,255,225,1)',
              shadowBlur: 4,
            },
          },
        },
      ],
    };

    const rsoption = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)',
      },
      legend: {
        textStyle: {
          color: 'rgba(0,255,225,1)',
        },
        orient: 'vertical',
        x: '10',
        y: '10',
        data: [
          '110系统流转警情',
          '超24小时未分流',
          '立案审查期限超期',
          '受理审查期限超期',
          '自助终端群众评议',
        ],
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['50%', '70%'],
          center: ['65%', '50%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center',
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold',
              },
            },
          },
          labelLine: {
            normal: {
              show: false,
            },
          },
          data: [
            { value: 335, name: '110系统流转警情' },
            { value: 310, name: '超24小时未分流' },
            { value: 234, name: '立案审查期限超期' },
            { value: 135, name: '受理审查期限超期' },
            { value: 1548, name: '自助终端群众评议' },
          ],
        },
      ],
    };

    const zxxxoption = {
      grid: {
        top: '10',
        bottom: '25',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
          label: {
            show: true,
          },
        },
      },
      xAxis: {
        data: ['嫌疑人数', '行政拘留', '被罚款', '收容教育', '累犯人数'],
        axisLine: {
          show: true,
          lineStyle: { color: 'rgba(13,247,220,0.6)' },
        },
        // axisTick: {
        //   show: true //隐藏X轴刻度
        // },
        axisLabel: {
          show: true,
          textStyle: { color: 'rgba(13,247,220,0.6)' },
        },
      },
      yAxis: [
        {
          type: 'value',
          nameTextStyle: { color: 'rgba(13,247,220,0.6)' },
          axisTick: {
            show: true,
          },
          axisLine: {
            show: true,
            lineStyle: { color: 'rgba(13,247,220,0.6)' },
          },
          axisLabel: {
            show: true,
            textStyle: { color: 'rgba(13,247,220,0.6)' },
          },
        },
        {
          type: 'value',
          name: '同比',
          position: 'right',
          splitLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            show: true,
            formatter: '{value} %', //右侧Y轴文字显示
            textStyle: { color: 'rgba(13,247,220,0.6)' },
          },
        },
        {
          type: 'value',
          gridIndex: 0,
          min: 50,
          max: 100,
          splitNumber: 8,
          splitLine: {
            show: false,
            lineStyle: { color: 'rgba(13,247,220,0.6)' },
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          splitArea: {
            show: true,

            areaStyle: {
              color: ['rgba(250,250,250,0.0)', 'rgba(250,250,250,0.05)'],
            },
          },
        },
      ],
      series: [
        {
          name: '同比',
          type: 'line',
          yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
          smooth: true, //平滑曲线显示
          showAllSymbol: true, //显示所有图形。
          symbol: 'circle', //标记的图形为实心圆
          symbolSize: 10, //标记的大小
          itemStyle: {
            //折线拐点标志的样式
            color: '#058cff',
          },
          lineStyle: {
            color: '#058cff',
          },
          areaStyle: {
            color: 'rgba(5,140,255, 0.2)',
          },
          data: [4.2, 3.8, 4.8, 3.5, 2.9],
        },
        {
          name: '数量',
          type: 'bar',
          barWidth: 15,
          itemStyle: {
            normal: {
              color: new echart.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#00FFE3',
                },
                {
                  offset: 1,
                  color: '#4693EC',
                },
              ]),
            },
          },
          data: [4.2, 3.8, 4.8, 3.5, 2.9],
        },
      ],
    };

    const tsfxoption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          lineStyle: {
            color: '#57617B',
          },
        },
      },
      grid: {
        top: '8%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          axisLine: {
            lineStyle: { color: 'rgba(13,247,220,0.6)' },
          },
          data: [
            '一月',
            '二月',
            '三月',
            '四月',
            '五月',
            '六月',
            '七月',
            '八月',
            '九月',
            '十月',
            '十一月',
            '十二月',
          ],
        },
      ],
      yAxis: [
        {
          type: 'value',
          name: '单位（%）',
          axisTick: {
            show: false,
          },
          axisLine: {
            lineStyle: { color: 'rgba(13,247,220,0.6)' },
          },
          axisLabel: {
            margin: 10,
            textStyle: {
              fontSize: 14,
            },
          },
          splitLine: {
            lineStyle: {
              color: '#57617B',
            },
          },
        },
      ],
      series: [
        {
          name: '命案',
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
            normal: {
              width: 1,
            },
          },
          areaStyle: {
            normal: {
              color: new echart.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: 'rgba(137, 189, 27, 0.3)',
                  },
                  {
                    offset: 0.8,
                    color: 'rgba(137, 189, 27, 0)',
                  },
                ],
                false,
              ),
              shadowColor: 'rgba(0, 0, 0, 0.1)',
              shadowBlur: 10,
            },
          },
          itemStyle: {
            normal: {
              color: 'rgb(137,189,27)',
              borderColor: 'rgba(137,189,2,0.27)',
              borderWidth: 12,
            },
          },
          data: [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122],
        },
        {
          name: '故意伤害',
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
            normal: {
              width: 1,
            },
          },
          areaStyle: {
            normal: {
              color: new echart.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: 'rgba(0, 136, 212, 0.3)',
                  },
                  {
                    offset: 0.8,
                    color: 'rgba(0, 136, 212, 0)',
                  },
                ],
                false,
              ),
              shadowColor: 'rgba(0, 0, 0, 0.1)',
              shadowBlur: 10,
            },
          },
          itemStyle: {
            normal: {
              color: 'rgb(0,136,212)',
              borderColor: 'rgba(0,136,212,0.2)',
              borderWidth: 12,
            },
          },
          data: [120, 110, 125, 145, 122, 165, 122, 220, 182, 191, 134, 150],
        },
        {
          name: '强奸',
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
            normal: {
              width: 1,
            },
          },
          areaStyle: {
            normal: {
              color: new echart.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: 'rgba(219, 50, 51, 0.3)',
                  },
                  {
                    offset: 0.8,
                    color: 'rgba(219, 50, 51, 0)',
                  },
                ],
                false,
              ),
              shadowColor: 'rgba(0, 0, 0, 0.1)',
              shadowBlur: 10,
            },
          },
          itemStyle: {
            normal: {
              color: 'rgb(219,50,51)',
              borderColor: 'rgba(219,50,51,0.2)',
              borderWidth: 12,
            },
          },
          data: [100, 182, 125, 145, 122, 191, 134, 150, 120, 110, 165, 122],
        },
        {
          name: '抢劫',
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
            normal: {
              width: 1,
            },
          },
          areaStyle: {
            normal: {
              color: new echart.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: 'rgba(117,247,240,0.3)',
                  },
                  {
                    offset: 0.8,
                    color: 'rgba(219, 50, 51, 0)',
                  },
                ],
                false,
              ),
              shadowColor: 'rgba(0, 0, 0, 0.1)',
              shadowBlur: 10,
            },
          },
          itemStyle: {
            normal: {
              color: 'rgb(0,110,233)',
              borderColor: 'rgba(219,50,51,0.2)',
              borderWidth: 12,
            },
          },
          data: [100, 182, 125, 145, 122, 191, 134, 150, 120, 110, 165, 122].reverse(),
        },
      ],
    };

    const jgsoption = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}千万元',
      },

      calculable: true,
      series: [
        {
          name: '数量',
          type: 'pie',
          //起始角度，支持范围[0, 360]
          startAngle: 0,
          //饼图的半径，数组的第一项是内半径，第二项是外半径
          radius: [15, 100],
          //支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度
          center: ['50%', '15%'],
          //是否展示成南丁格尔图，通过半径区分数据大小。可选择两种模式：
          // 'radius' 面积展现数据的百分比，半径展现数据的大小。
          //  'area' 所有扇区面积相同，仅通过半径展现数据大小
          roseType: 'area',
          //是否启用防止标签重叠策略，默认开启，圆环图这个例子中需要强制所有标签放在中心位置，可以将该值设为 false。
          avoidLabelOverlap: false,
          label: {},
          labelLine: {
            normal: {
              show: true,
              length2: 1,
            },
            emphasis: {
              show: true,
            },
          },
          data: [
            {
              value: 20,
              name: '未实际送所',
              itemStyle: {
                normal: {
                  color: '#4777f5',
                },
              },
            },
            {
              value: 16,
              name: '提前离开监所',
              itemStyle: {
                normal: {
                  color: '#44aff0',
                },
              },
            },
            {
              value: 14,
              name: '转取保候审',
              itemStyle: {
                normal: {
                  color: '#f6d54a',
                },
              },
            },
            {
              value: 5,
              name: '同比',
              itemStyle: {
                normal: {
                  color: '#f69846',
                },
              },
            },
            {
              value: 2,
              name: '环比',
              itemStyle: {
                normal: {
                  color: '#f6d232',
                },
              },
            },

            {
              value: 0,
              name: '',
              itemStyle: {
                normal: {
                  color: 'transparent',
                },
              },
              label: {
                show: false,
              },
              labelLine: {
                show: false,
              },
            },

            {
              value: 0,
              name: '',
              itemStyle: {
                normal: {
                  color: 'transparent',
                },
              },
              label: {
                show: false,
              },
              labelLine: {
                show: false,
              },
            },
            {
              value: 0,
              name: '',
              itemStyle: {
                normal: {
                  color: 'transparent',
                },
              },
              label: {
                show: false,
              },
              labelLine: {
                show: false,
              },
            },
            {
              value: 0,
              name: '',
              itemStyle: {
                normal: {
                  color: 'transparent',
                },
              },
              label: {
                show: false,
              },
              labelLine: {
                show: false,
              },
            },
            {
              value: 0,
              name: '',
              itemStyle: {
                normal: {
                  color: 'transparent',
                },
              },
              label: {
                show: false,
              },
              labelLine: {
                show: false,
              },
            },
            {
              value: 0,
              name: '',
              itemStyle: {
                normal: {
                  color: 'transparent',
                },
              },
              label: {
                show: false,
              },
              labelLine: {
                show: false,
              },
            },
          ],
        },
      ],
    };

    return (
      <div className={styles.normal}>
        <Header title={"执法执纪监督中心统计"} />
        <Footer />
        <div className={styles.bodyContainer}>
          <Row gitter={12}>
            <Col span={6}>
              <div
                className={styles.items}
                onClick={this.handleItemClick.bind(this, 'bazx')}
                data-text={'办案中心业务概况统计'}
              >
                <Title title={'办案中心业务概况统计'} />
                <div className={styles.itemContent}>
                  <ReactEcharts style={{ height: '100%' }} option={bazxOption} />
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className={styles.items} data-text={'案管中心业务概况统计'}>
                <Title title={'案管中心业务概况统计'} />
                <div className={styles.itemContent}>
                  <ReactEcharts style={{ height: '100%' }} option={agoption} />
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className={styles.items} data-text={'物管中心业务概况统计'}>
                <Title title={'物管中心业务概况统计'} />
                <div className={styles.itemContent}>
                  <ReactEcharts style={{ height: '100%' }} option={wgption} />
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div
                className={styles.items}
                style={{ marginRight: 0 }}
                data-text={'受立案管理中心业务统计'}
              >
                <Title title={'受立案管理中心业务统计'} />
                <div className={styles.itemContent}>
                  <ReactEcharts style={{ height: '100%' }} option={slaoption} />
                </div>
              </div>
            </Col>
          </Row>
          <Row gitter={12}>
            <Col span={6}>
              <div className={styles.items} data-text={'监所关注业务数据统计'}>
                <Title title={'监所关注业务数据统计'} />
                <div className={styles.itemContent}>
                  <ReactEcharts style={{ height: '100%' }} option={jgsoption} />
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className={styles.items} data-text={'执法全流程办案概况统计'}>
                <Title title={'执法全流程办案概况统计'} />
                <div className={styles.itemContent}>
                  <div className={styles.tables}>
                    <table>
                      <tbody>
                        <tr>
                          <td>接处警</td>
                          <td>受理数</td>
                          <td>立案数</td>
                          <td>拘留</td>
                          <td>批捕</td> <td>监视居住</td>
                        </tr>
                        <tr>
                          <td style={{ height: '120px' }}>1</td>
                          <td>1</td>
                          <td>2</td>
                          <td>3</td>
                          <td>4</td>
                          <td>5</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className={styles.items} data-text={'全市办案场所统一管控平台数据统计'}>
                <Title title={'全市办案场所统一管控平台数据统计'} />
                <div className={styles.itemContent}>
                  <Statistic valueStyle={{ color: '#fff' }} value={112893} />
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div
                className={styles.items}
                style={{ marginRight: 0 }}
                data-text={'如实受立案监督专题分析'}
              >
                <Title title={'如实受立案监督专题分析'} />
                <div className={styles.itemContent}>
                  <ReactEcharts style={{ height: '100%' }} option={rsoption} />
                </div>
              </div>
            </Col>
          </Row>
          <Row gitter={12}>
            <Col span={6}>
              <div className={styles.items} data-text={'扫黑除恶业务概况统计'}>
                <Title title={'扫黑除恶业务概况统计'} />
                <div className={styles.itemContent}>
                  <div className={styles.tables} style={{ fontSize: '.8rem' }}>
                    <table>
                      <tbody><tr>
                          <td>类型</td>
                          <td>立案</td>
                          <td>刑拘</td>
                          <td>批捕</td>
                          <td>移送起诉</td>
                          <td>结案</td>
                        </tr><tr>
                          <td>聚众斗殴</td>
                          <td>1</td>
                          <td>1</td>
                          <td>2</td>
                          <td>3</td>
                          <td>4</td>
                        </tr><tr>
                          <td>强迫交易</td>
                          <td>2</td>
                          <td>3</td>
                          <td>5</td>
                          <td>3</td>
                          <td>3</td>
                        </tr><tr>
                          <td>寻衅滋事</td>
                          <td>2</td>
                          <td>3</td>
                          <td>5</td>
                          <td>3</td>
                          <td>3</td>
                        </tr> <tr>
                          <td>敲诈勒索</td>
                          <td>2</td>
                          <td>3</td>
                          <td>5</td>
                          <td>3</td>
                          <td>3</td>
                        </tr><tr>
                          <td>非法拘禁</td>
                          <td>2</td>
                          <td>3</td>
                          <td>5</td>
                          <td>3</td>
                          <td>3</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className={styles.items} data-text={'在校学生行政违法案件统计'}>
                <Title title={'在校学生行政违法案件统计'} />
                <div className={styles.itemContent}>
                  <ReactEcharts style={{ height: '100%' }} option={zxxxoption} />
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className={styles.items} data-text={'常见多发案件态势分析'}>
                <Title title={'常见多发案件态势分析'} />
                <div className={styles.itemContent}>
                  <ReactEcharts style={{ height: '100%' }} option={tsfxoption} />
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div
                className={styles.items}
                style={{ marginRight: '0' }}
                data-text={'政法协同业务情况统计'}
              >
                <Title title={'政法协同业务情况统计'} />
                <div className={styles.itemContent}>
                  <ReactEcharts style={{ height: '100%' }} option={jcyfyoption} />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Index;
