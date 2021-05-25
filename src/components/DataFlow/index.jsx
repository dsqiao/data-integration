import { Layout } from "antd"

const { Sider, Content } = Layout
function DataFlow () {
  return (
    <Layout>
      <Sider theme="light" width="250px"></Sider>
      <Content>hello from data flow</Content>
    </Layout>
  )
}

export default DataFlow