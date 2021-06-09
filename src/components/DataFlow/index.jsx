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
      fetch('http://119.3.153.72/output.txt')
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
        <div className="paragraph">我们每隔一秒钟获取一次最新的模型精度，并展示如下：</div>
        <div id="precision-container"></div>
        <h3 id="link2">静态数据分析</h3>
        <div className="paragraph">我们统计出了所有商品的订单数量与浏览数量，做差，得到召回率，从高低排序做图如下：</div>
        <div id="recall-rate-container" className='graph-container'></div>
        <div className="paragraph">我们注意到很多商品召回率大于1，即该段时间内商品的购买量大于浏览量，
        原因可能是商品原先就被存放在购物车中，在促销活动开始时，即可跳过浏览步骤，直接购买。</div>
        <div className="paragraph">我们分析了流数据表中所有 getDetail 请求的时间，做出每小时 getDetail 请求的数量如下图</div>
        <div id="browser-time-container" className='graph-container' />
        <div className="paragraph">可以看到，日间的活跃用户数一直维持在较高水平，用户请求数据的高峰在下午四点和晚上九点左右，到了深夜，活跃用户数逐渐降低，在凌晨4点达到低谷。</div>
        <div className="paragraph">然后，我们分析了流数据表中所有 buy 请求的时间，可以发现购买行为随时间段的变化与浏览行为基本一致。</div>
        <div id="buy-time-container" className='graph-container' />
        <div className="paragraph">随后，我们根据购买量与浏览量，计算出各个时间段用户的购买欲望如图</div>
        <div id="premise-container" className='graph-container'/>
        <div className="paragraph">可以看出日间的购买欲望比较稳定，而深夜会有一个较高的增长，在凌晨四点达到峰值，这个点还要买东西的，一定都是有什么急事吧。</div>
      </Content>
    </Layout>
  )
}

export default DataFlow