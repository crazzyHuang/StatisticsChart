import Header from '@/components/header';
import Footer from '@/components/footer';
import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
import { Row, Col, Modal, Table } from 'antd';
import Title from '@/components/title';
import styles from './index.less';




class Index extends Component {


  state={
    visible:false
  };

  handleOk=()=>{
    this.setState({
      visible:false
    });
  };

  handleCancel=()=>{
    this.setState({
      visible:false
    });
  };


  openModal=()=>{
    this.setState({
      visible:true
    });
  };

  render() {


    const tjsoption = {
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [{
        type: 'category',
        data: [
          '涉案人员',
          '嫌疑人',
          '制作电子笔录数',
          '上传警综平台嫌疑人',
        ],
        axisLine: {
          show: true,
          lineStyle: {
            color: "#063374",
            width: 1,
            type: "solid"
          }
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: "#00c7ff",
          }
        },
      }],
      yAxis: [{
        type: 'value',
        // axisLabel: {
        //   formatter: '{value} %'
        // },
        axisLine: {
          show: false,
          lineStyle: {
            color: "#00c7ff",
            width: 1,
            type: "solid"
          },
        },
        axisTick: {
          show: false
        },
        splitLine: {
          lineStyle: {
            color: "#063374",
          }
        }
      }],
      series: [{
        type: 'bar',
        data: [20, 50, 80, 58],
        barWidth: 50, //柱子宽度
        //barGap: 1, //柱子之间间距
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#00fcae'
            }, {
              offset: 1,
              color: '#006388'
            }]),
            opacity: 1,
          }
        }
      }]
    };

    const hboption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {type: 'cross'}
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      legend: {
        data:['进入办案中心嫌疑人数环比','上传警综平台嫌疑人数环比'],
        textStyle:{
          color:'#0df7dc'
        }
      },
      xAxis: [
        {
          type: 'category',
          data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
          axisLine: {
            show: true,
            lineStyle: {
              color: "#063374",
              width: 1,
              type: "solid"
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#00c7ff",
            }
          },
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: '环比',
          min: 0,
          max: 250,
          interval: 50,
          axisLine: {
            show: true,
            lineStyle: {
              color: "#e5e9e1",
              width: 1,
              type: "solid"
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#00c7ff",
            },
            formatter: '{value} %'
          },
        }
      ],
      series: [
        {
          name:'进入办案中心嫌疑人数环比',
          type:'bar',
          data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#00fcae'
              }, {
                offset: 1,
                color: '#006388'
              }]),
              opacity: 1,
            }
          }
        },
        {
          name:'上传警综平台嫌疑人数环比',
          type:'bar',
          data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#006ee9'
              }, {
                offset: 1,
                color: '#881f08'
              }]),
              opacity: 1,
            }
          }
        }
      ]
    };

    const scoption = {
      title: {
        text: "84%",
        subtext: '同比',
        x: 'center',
        y: 'center',
        textStyle: {
          color: "#fff",
          fontSize: 30,
          fontWeight: 'normal'
        },
        subtextStyle: {
          color: "rgba(255,255,255,.45)",
          fontSize: 14,
          fontWeight: 'normal'
        }
      },
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        x: 'center',
        y: 'bottom',
        data: ['rose3', 'rose5', 'rose6', 'rose7', 'rose8']
      },
      calculable: true,
      series: [

        {
          name: '面积模式',
          type: 'pie',
          radius: [60, 80],
          center: ['50%', '50%'],
          data: [{
            value: 34,
            name: '吴际帅\n牛亚莉',
            itemStyle: {

              color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                offset: 0,
                color: '#f6e3a1'
              }, {
                offset: 1,
                color: '#ff4236'
              }])
            },
            label: {
              color: "rgba(255,255,255,.45)",
              fontSize: 14,
              formatter: '今年\n{a|34}个',
              rich: {
                a: {
                  color: "#fff",
                  fontSize: 20,
                  lineHeight: 30
                },
              }
            }
          },
            {
              value: 52,
              name: 'rose2',
              itemStyle: {
                color: "transparent"
              }
            }
          ]
        },
        {
          name: '面积模式',
          type: 'pie',
          radius: [65, 70],
          center: ['50%', '50%'],
          data: [{
            value: 34,
            name: '吴际帅\n牛亚莉',
            itemStyle: {
              color: "transparent"
            }
          },
            {
              value: 52,
              name: 'rose2',
              itemStyle: {

                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                  offset: 0,
                  color: '#348fe6'
                }, {
                  offset: 1,
                  color: '#625bef'
                }])
              },
              label: {
                color: "rgba(255,255,255,.45)",
                fontSize: 14,
                formatter: '去年\n{a|52}个',
                rich: {
                  a: {
                    color: "#fff",
                    fontSize: 20,
                    lineHeight: 30
                  },
                }
              }
            }
          ]
        }
      ]
    };

    const jroption = {
      title: {
        text: "65%",
        subtext: '同比',
        x: 'center',
        y: 'center',
        textStyle: {
          color: "#fff",
          fontSize: 30,
          fontWeight: 'normal'
        },
        subtextStyle: {
          color: "rgba(255,255,255,.45)",
          fontSize: 14,
          fontWeight: 'normal'
        }
      },
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        x: 'center',
        y: 'bottom',
        data: ['rose3', 'rose5', 'rose6', 'rose7', 'rose8']
      },
      calculable: true,
      series: [

        {
          name: '面积模式',
          type: 'pie',
          radius: [60, 80],
          center: ['50%', '50%'],
          data: [{
            value: 70,
            name: '吴际帅\n牛亚莉',
            itemStyle: {

              color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                offset: 0,
                color: '#f6e3a1'
              }, {
                offset: 1,
                color: '#ff4236'
              }])
            },
            label: {
              color: "rgba(255,255,255,.45)",
              fontSize: 14,
              formatter: '今年\n{a|34}个',
              rich: {
                a: {
                  color: "#fff",
                  fontSize: 20,
                  lineHeight: 30
                },
              }
            }
          },
            {
              value: 30,
              name: 'rose2',
              itemStyle: {
                color: "transparent"
              }
            }
          ]
        },
        {
          name: '面积模式',
          type: 'pie',
          radius: [65, 70],
          center: ['50%', '50%'],
          data: [{
            value: 70,
            name: '吴际帅\n牛亚莉',
            itemStyle: {
              color: "transparent"
            }
          },
            {
              value: 30,
              name: 'rose2',
              itemStyle: {

                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                  offset: 0,
                  color: '#348fe6'
                }, {
                  offset: 1,
                  color: '#625bef'
                }])
              },
              label: {
                color: "rgba(255,255,255,.45)",
                fontSize: 14,
                formatter: '去年\n{a|52}个',
                rich: {
                  a: {
                    color: "#fff",
                    fontSize: 20,
                    lineHeight: 30
                  },
                }
              }
            }
          ]
        }
      ]
    };



    const dataSource = [
      {
        rybh: 'R1234567890',
        xm: '胡彦斌',
        zbdw: '公园派出所',
        zbmj: '张三',
        lrsj: '2019-06-19 02:08:31',
        cssj: '2019-06-19 02:08:31',
      },
      {
        rybh: 'R1234567890',
        xm: '胡彦斌',
        zbdw: '公园派出所',
        zbmj: '张三',
        lrsj: '2019-06-19 02:08:31',
        cssj: '2019-06-19 02:08:31',
      },
      {
        rybh: 'R1234567890',
        xm: '胡彦斌',
        zbdw: '公园派出所',
        zbmj: '张三',
        lrsj: '2019-06-19 02:08:31',
        cssj: '2019-06-19 02:08:31',
      },
    ];

    const columns = [
      {
        title: '人员编号',
        dataIndex: 'rybh',
        key: 'rybh',
      },
      {
        title: '姓名',
        dataIndex: 'xm',
        key: 'xm',
      },
      {
        title: '主办单位',
        dataIndex: 'zbdw',
        key: 'zbdw',
      },
      {
        title: '主办民警',
        dataIndex: 'zbmj',
        key: 'zbmj',
      },
      {
        title: '录入时间',
        dataIndex: 'lrsj',
        key: 'lrsj',
      },
      {
        title: '出所时间',
        dataIndex: 'cssj',
        key: 'cssj',
      },
    ];




    return (
      <div className={styles.normal}>
        <Header title={'办案中心业务概况统计'} />
        <Footer />
        <div className={styles.bodyContainer}>
          <Row gitter={12}>
            <Col span={6}>
              <div className={styles.areaItem}>
                <Title title={'进入办案中心嫌疑人数同比'} />
                <div className={styles.itemContent} >
                  <ReactEcharts style={{ height: '100%' }} option={jroption} />
                </div>
              </div>
              <div className={styles.areaItem}>
                <Title title={'上传警综平台嫌疑人数同比'} />
                <div className={styles.itemContent} >
                  <ReactEcharts style={{ height: '100%' }} option={scoption} />
                </div>
              </div>
            </Col>
            <Col span={12}>
              <div className={styles.areaItem}>
                <div className={styles.bigItemContent} >
                  <ReactEcharts style={{ height: '100%' }} option={tjsoption} />
                </div>
                <div className={styles.bigItemContent} >
                  <ReactEcharts style={{ height: '100%' }} option={hboption} />
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className={styles.areaItem}>
                <Title title={'办案中心使用单位前三名'} />
                <div className={styles.itemContent} >
                  <div className={styles.tables}>
                    <table>
                      <tbody>
                      <tr>
                        <td width={'50%'}>
                          公园派出所
                        </td>
                        <td>
                          10
                        </td>
                      </tr>
                      <tr>
                        <td>
                          公园派出所
                        </td>
                        <td>
                          10
                        </td>
                      </tr>
                      <tr>
                        <td>
                          公园派出所
                        </td>
                        <td>
                          10
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>

                </div>
              </div>
              <div className={styles.areaItem}>
                <Title title={'案件概览'} />
                <div className={styles.itemContent} >
                  <div className={styles.detailTables}>
                    <table>
                      <tbody>
                      <tr>
                        <td>人员编号</td>
                        <td>姓名</td>
                      </tr>
                      <tr onClick={this.openModal}>
                        <td width={'50%'}>
                          R1234567890
                        </td>
                        <td>
                          张三
                        </td>
                      </tr>
                      <tr>
                        <td width={'50%'}>
                          R1234567890
                        </td>
                        <td>
                          张三
                        </td>
                      </tr>
                      <tr>
                        <td width={'50%'}>
                          R1234567890
                        </td>
                        <td>
                          张三
                        </td>
                      </tr>
                      <tr>
                        <td width={'50%'}>
                          R1234567890
                        </td>
                        <td>
                          张三
                        </td>
                      </tr>
                      <tr>
                        <td width={'50%'}>
                          R1234567890
                        </td>
                        <td>
                          张三
                        </td>
                      </tr>
                      <tr>
                        <td width={'50%'}>
                          R1234567890
                        </td>
                        <td>
                          张三
                        </td>
                      </tr>
                      <tr>
                        <td width={'50%'}>
                          R1234567890
                        </td>
                        <td>
                          张三
                        </td>
                      </tr>
                      <tr>
                        <td width={'50%'}>
                          R1234567890
                        </td>
                        <td>
                          张三
                        </td>
                      </tr>


                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <Modal
          width={800}
          title="详情"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Table  dataSource={dataSource} columns={columns} bordered size={'middle'} pagination={false} />
        </Modal>
      </div>
    );
  }
}

export default Index;


