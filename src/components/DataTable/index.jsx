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
        <div className="paragraph">从数据图像不难看出，category_id 值为140410的销量前五名的商品单销量超过70000，远超其他商品种类商品单销量，甚至高出两个数量级。
        一开始所做的猜想是可能是日用品销量好，但考虑到本次数据的特殊性，会把这类商品销量高的原因归结于有抢单机器人的可能。
        而category_id为140410的这几个商品经推测会有比较高的经济利用价值或者属于高性价比商品，可以加入用户浏览商品的推荐中。</div>
        <div id="container" className='graph-container'></div>
        <h3 id="link2">用户订单量分析</h3>
        <div className="paragraph">我们统计了不同的user_id的统计数量值，将其按降序排列，得到了购买量最多的用户列表</div>
        <div className="paragraph">用户订单量中提供的信息并不算多，排名前几的用户订单量为262、177、159、118等，相对高于平均排名10-1000名购买量的用户，
        一方面可以结合其他特征理解为是刷单机器人，另一方面可以简单理解为有冲动型消费的用户或者经济能力较强的用户，为了提高甲方的经济利益可以给这部分用户推送经济效益更高的商品。</div>
        <div id="buy-amount-container" className='graph-container'></div>
        <h3 id="link3">时段订单量分析</h3>
        <div className="paragraph">我们分析了数据库表中所有购买记录的时间，做出各个小时的购买量如图</div>
        <div className="paragraph">将购买量按小时分类之后得到的结论可能相对更加明显，0点的总销量处于中等偏下的水平，从0点到4点总销量呈下降趋势但下降总量逐渐放缓，
        到9点逐渐上涨到0点类似水平，显然由于人们在这个时间段多数处于休息的状态；从9点到16点购买量上下起伏波动不大，18点达到一个极小值点，一方面理解为人们在此时吃饭，
        另一方面也可以猜想人们处于下班回家的时段，购买欲望不强；而从19点到22点再次上涨，在20点达到顶峰，可以理解为人们到家处理完家务之后重新恢复了闲余时间和购买欲望。
        因此可见一天当中10点到22点的人们购买欲望最强烈，因此可以推送整点秒杀活动或限时免减活动等。</div>
        <div id="buy-time-container" className='graph-container' />
      </Content>
    </Layout>
  )
}

export default DataTable