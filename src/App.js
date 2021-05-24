import { Menu, Layout } from 'antd'
import { useState } from 'react'
import './App.less'

const { Header, Footer, Sider, Content } = Layout

function App () {
  const [current, setCurrent] = useState('1')
  const hanldeMenuClick = e => {
    console.log('click', e)
    setCurrent(e.key)
  }
  return (
    <div className="App">
      <Layout style={{ backgroundColor: '#000' }}>
        <Header>
          <div className="title">第20组成果展示</div>
          <Menu className="menu" onClick={hanldeMenuClick} mode="horizontal" selectedKeys={[current]}>
            <Menu.Item key="1">数据表部分</Menu.Item>
            <Menu.Item key="2">流数据部分</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider theme="light">Sider</Sider>
          <Content>Content</Content>
        </Layout>
      </Layout>
    </div>
  )
}

export default App
