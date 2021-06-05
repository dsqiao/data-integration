import { useEffect } from 'react'
import { Layout } from "antd"
import renderGraph from './renderGraph'
const { Sider, Content } = Layout


function DataFlow () {
  useEffect(() => {
    renderGraph()
  }, [])
  return (
    <Layout>
      <Sider theme="light" width="250px"></Sider>
      <Content>
        <div id="browser-time-container" style={{ width: '80%', marginLeft: '10%', marginTop: '160px' }} />
        <div>我们分析了流数据表中所有 getDetail 请求的时间，做出每小时 getDetail 请求的数量如上图</div>
        <div id="buy-time-container" style={{ width: '80%', marginLeft: '10%', marginTop: '160px' }} />
        <div>然后，我们分析了流数据表中所有 buy 请求的时间</div>
        <div id="premise-container" style={{ width: '80%', marginLeft: '10%', marginTop: '160px' }} />
        <div>随后，我们根据购买量与浏览量，计算出各个时间段用户的购买欲望如图</div>
      </Content>
    </Layout>
  )
}

export default DataFlow