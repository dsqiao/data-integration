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
              <div onClick={() => { goAnchor('#link2') }}>订单量分析</div>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Content>
        <h3 id="link1">销量分析</h3>
        <div id="container" style={{ width: '70%', marginLeft: '15%', marginTop: '160px' }}></div>
        <div id="buy-amount-container"></div>
        <h3 id="link2">订单量分析</h3>
        <div id="buy-time-container" style={{ width: '70%', marginLeft: '16%', marginTop: '160px' }} />
        <div>我们分析了数据库表中所有购买记录的时间，做出各个小时的购买量如图</div>
      </Content>
    </Layout>
  )
}

export default DataTable