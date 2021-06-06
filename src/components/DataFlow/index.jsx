import { useEffect } from 'react'
import { Layout, Menu } from "antd"
import renderGraph from './renderGraph'
import { Liquid } from '@antv/g2plot'
import '../layout.css'
import SubMenu from 'antd/lib/menu/SubMenu'
import goAnchor from '../goAnchor'
const { Sider, Content } = Layout
const THEME_COLOR = '#61DDAA'


function DataFlow () {
  useEffect(() => {
    renderGraph()
  }, [])

  useEffect(() => {
    const liquidPlot = new Liquid('precision-container', {
      percent: 0.0,
      outline: {
        border: 4,
        distance: 8,
      },
      wave: {
        length: 128,
      },
      color: THEME_COLOR,
    })
    liquidPlot.render()
    setInterval(() => {
      fetch('http://119.3.153.72/output.txt', {
        mode: 'cors',
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          liquidPlot.changeData(data)
        })
    }, 1000)
  }, [])
  
  return (
    <Layout>
      <Sider theme="light" width="250px">
        <Menu
          style={{ width: '100%' }}
          mode="inline"
          defaultOpenKeys={['sub1']}
        >
          <SubMenu title="流数据部分" key='sub1'>
            <Menu.Item key="1">
              <div onClick={() => { goAnchor('#link1') }}>实时模型精度</div>
            </Menu.Item>
            <Menu.Item key="2">
              <div onClick={() => { goAnchor('#link2') }}>静态数据分析</div>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Content>
        <h3 id="link1">实时模型精度</h3>
        <div id="precision-container"></div>
        <h3 id="link2">静态数据分析</h3>
        <div id="recall-rate-container" className='graph-container'></div>
        <div id="browser-time-container" className='graph-container' />
        <div style={{ marginTop: '30px' }}>我们分析了流数据表中所有 getDetail 请求的时间，做出每小时 getDetail 请求的数量如上图</div>
        <div id="buy-time-container" className='graph-container'/>
        <div style={{ marginTop: '30px' }}>然后，我们分析了流数据表中所有 buy 请求的时间</div>
        <div id="premise-container" className='graph-container'/>
        <div style={{ marginTop: '30px' }}>随后，我们根据购买量与浏览量，计算出各个时间段用户的购买欲望如图</div>
      </Content>
    </Layout>
  )
}

export default DataFlow