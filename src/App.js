import { Menu, Layout } from 'antd'
import { useState } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
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
            <Menu.Item key="1"><Link to="/table">数据表部分</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/flow">流数据部分</Link></Menu.Item>
          </Menu>
        </Header>
        <Switch>
          <Route path="/table" component={DataTable}></Route>
          <Route path="/flow" component={DataFlow}></Route>
          <Route path="/" component={DataTable}></Route>
        </Switch>
      </Layout>
    </div>
  )
}

export default App
