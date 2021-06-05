import { Column } from '@antv/g2plot'

const renderHourGraph = function () {
  fetch('https://dsqiao.github.io/data-integration/data/brower_time.json')
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
          fill: '#722ED1',
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
  fetch('https://dsqiao.github.io/data-integration/data/buy_time_stream.json')
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
          fill: '#722ED1',
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
  fetch('https://dsqiao.github.io/data-integration/data/premise.json')
    .then(res => res.json())
    .then(data => {
      const bar = new Column('premise-container', {
        data,
        xField: 'time',
        yField: 'ratio',
        maxColumnWidth: 8,
        columnStyle: {
          fill: '#722ED1',
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
  renderHourGraph()
  renderBuyHourGraph()
  renderPremiseGraph()
}