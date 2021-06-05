import { Column } from '@antv/g2plot'

const THEME_COLOR = '#61DDAA'

const renderHourGraph = function () {
  fetch('https://dsqiao.github.io/data-integration/data/buy_time.json')
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
            // 柱形图数据标签位置自动调整
            { type: 'interval-adjust-position' },
            // 数据标签防遮挡
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
            text: '订单量'
          }
        },
        meta: {
          time: {
            alias: '时间',
          },
          value: {
            alias: '订单量',
          },
        },
      })
      bar.render()
    })
}

const renderSalesGraoh = function () {
  fetch('https://dsqiao.github.io/data-integration/data/sales.json')
    .then(res => res.json())
    .then(data => {
      const bar = new Column('container', {
        data,
        isGroup: true,
        xField: 'category_id',
        yField: 'value',
        seriesField: 'item_id',
        minColumnWidth: 1,
        columnStyle: {
          fill: THEME_COLOR
        },
        legend: false,
        label: {
          position: 'top', // label 数据标签位置 top', 'middle', 'bottom'
          layout: [
            // 柱形图数据标签位置自动调整
            { type: 'interval-adjust-position' },
            // 数据标签防遮挡
            { type: 'interval-hide-overlap' },
            // 数据标签文颜色自动调整
            { type: 'adjust-color' },
          ],
        },
        xAxis: {
          label: {
            autoRotate: false,
          },
          title: {
            text: 'category_id',
          },
        },
        yAxis: {
          title: {
            text: '销量'
          },
        },
        slider: {
          start: 0,
          end: 0.04,
          formatter: () => '',
        },
      })
      bar.render()
    })
}

export default function renderGraph () {
  renderHourGraph()
  renderSalesGraoh()
}