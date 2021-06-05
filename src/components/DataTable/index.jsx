import { useEffect } from 'react'
import { Layout } from "antd"
import renderGraph from './renderGraph'
const { Sider, Content } = Layout

function DataTable () {
  useEffect(() => {
    renderGraph()
  }, [])
  return (
    <Layout>
      <Sider theme="light" width="250px"></Sider>
      <Content style={{ padding: '100px 0px',}}>
        <div id="container" style={{ width: '70%', marginLeft: '15%', marginTop: '160px' }}></div>
        <div id="buy-amount-container"></div>
        <div id="buy-time-container" style={{ width: '70%', marginLeft: '16%', marginTop: '160px' }} />
        <div>我们分析了数据库表中所有购买记录的时间，做出各个小时的购买量如图</div>
      </Content>
    </Layout>
  )
}

export default DataTable