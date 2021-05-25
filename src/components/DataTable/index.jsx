import { Layout } from "antd"

const { Sider, Content } = Layout
function DataTable () {
  return (
    <Layout>
      <Sider theme="light" width="250px"></Sider>
      <Content>hello from data table</Content>
    </Layout>
  )
}

export default DataTable