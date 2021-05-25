import { Menu, Layout } from 'antd'
import { useState } from 'react'
import { Route, Link } from 'react-router-dom'
import './App.less'
import DataFlow from './components/DataFlow'
import DataTable from './components/DataTable'

const { Header } = Layout

function App () {
  const [current, setCurrent] = useState('1')
  const hanldeMenuClick = e => {
    setCurrent(e.key)
  }
  return (
    <div className="App">
      <Layout style={{ backgroundColor: '#000' }}>
        <Header>
          <div className="title">第20组成果展示</div>
            <Menu className="menu" onClick={hanldeMenuClick} mode="horizontal" selectedKeys={[current]}>
              <Menu.Item key="1"><Link to="/1">数据表部分</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/2">流数据部分</Link></Menu.Item>
            </Menu>
        </Header>
          <Route path="/1" component={DataTable}></Route>
          <Route path="/2" component={DataFlow}></Route>
      </Layout>
    </div>
  )
}

export default App
