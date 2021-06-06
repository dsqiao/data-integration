import { useEffect } from 'react'
import { Layout, Menu } from "antd"
import renderGraph from './renderGraph'
import '../layout.css'
import SubMenu from 'antd/lib/menu/SubMenu'
import goAnchor from '../goAnchor'

const { Sider, Content } = Layout

function DataTable () {
  useEffect(() => {
    renderGraph()
  }, [])
  return (
    <Layout>
      <Sider theme="light" width="250px">
        <Menu mode="inline" defaultOpenKeys={['1']}>
          <SubMenu key="1" title="数据表部分">
            <Menu.Item>
              <div onClick={() => { goAnchor('#link1') }}>销量分析</div>
            </Menu.Item>
            <Menu.Item>
              <div onClick={() => { goAnchor('#link2') }}>用户订单量分析</div>
            </Menu.Item>
            <Menu.Item>
              <div onClick={() => { goAnchor('#link3') }}>时段订单量分析</div>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Content>
        <h3 id="link1">销量分析</h3>
        <div className="paragraph">我们统计了不同的商品种类的category_id中，不同的item_id的统计数量值，将其按降序排列并取前五名，生成图像如下：</div>
        <div id="container" className='graph-container'></div>
        <h3 id="link2">用户订单量分析</h3>
        <div className="paragraph">我们统计了不同的user_id的统计数量值，将其按降序排列，得到了购买量最多的用户列表</div>
        <div id="buy-amount-container" className='graph-container'></div>
        <h3 id="link3">时段订单量分析</h3>
        <div className="paragraph">我们分析了数据库表中所有购买记录的时间，做出各个小时的购买量如图</div>
        <div id="buy-time-container" className='graph-container' />
      </Content>
    </Layout>
  )
}

export default DataTable