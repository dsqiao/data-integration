import { Column } from '@antv/g2plot'

const THEME_COLOR = '#61DDAA'

const renderRecallRateGraph = function () {
  fetch('http://119.3.153.72/recall_rate.json')
    .then(res => res.json())
    .then(data => {
      const bar = new Column('recall-rate-container', {
        data,
        xField: 'item_id',
        yField: 'recall_rate',
        xAxis: {
          label: {
            autoRotate: false,
          },
        },
        columnStyle: {
          fill: THEME_COLOR,
        },
        slider: {
          start: 0.0,
          end: 0.15,
        },
      })
      bar.render()
    })
}

const renderHourGraph = function () {
  fetch('http://119.3.153.72//brower_time.json')
    .then(res => res.json())
    .then(data => {
      const bar = new Column('browser-time-container', {
        data,
        xField: 'time',
        yField: 'value',
        label: {
          position: 'top',
          style: {
            fill: '#000',
            opacity: 0.6,
          },
          layout: [
            { type: 'interval-adjust-position' },
            { type: 'interval-hide-overlap' },
          ],
        },
        maxColumnWidth: 8,
        columnStyle: {
          fill: THEME_COLOR,
        },
        xAxis: {
          label: {
            autoHide: true,
            autoRotate: false,
          },
          title: {
            text: '时间'
          }
        },
        yAxis: {
          title: {
            text: '浏览量'
          }
        },
        meta: {
          time: {
            alias: '时间',
          },
          value: {
            alias: '浏览量',
          },
        },
      })
      bar.render()
    })
}

const renderBuyHourGraph = function () {
  fetch('http://119.3.153.72/buy_time_stream.json')
    .then(res => res.json())
    .then(data => {
      const bar = new Column('buy-time-container', {
        data,
        xField: 'time',
        yField: 'value',
        label: {
          position: 'top',
          style: {
            fill: '#000',
            opacity: 0.6,
          },
          layout: [
            { type: 'interval-adjust-position' },
            { type: 'interval-hide-overlap' },
          ],
        },
        maxColumnWidth: 8,
        columnStyle: {
          fill: THEME_COLOR,
        },
        xAxis: {
          label: {
            autoHide: true,
            autoRotate: false,
          },
          title: {
            text: '时间'
          }
        },
        yAxis: {
          title: {
            text: '购买量'
          }
        },
        meta: {
          time: {
            alias: '时间',
          },
          value: {
            alias: '购买量',
          },
        },
      })
      bar.render()
    })
}

const renderPremiseGraph = function () {
  fetch('http://119.3.153.72/premise.json')
    .then(res => res.json())
    .then(data => {
      const bar = new Column('premise-container', {
        data,
        xField: 'time',
        yField: 'ratio',
        maxColumnWidth: 8,
        columnStyle: {
          fill: THEME_COLOR,
        },
        xAxis: {
          label: {
            autoHide: true,
            autoRotate: false,
          },
          title: {
            text: '时间'
          }
        },
        yAxis: {
          title: {
            text: '购买欲望'
          }
        },
        meta: {
          time: {
            alias: '时间',
          },
          ratio: {
            alias: '购买欲望',
          },
        },
      })
      bar.render()
    })
}

export default function renderGraph () {
  renderRecallRateGraph()
  renderHourGraph()
  renderBuyHourGraph()
  renderPremiseGraph()
}