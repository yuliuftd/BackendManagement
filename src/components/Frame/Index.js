import React from 'react'
import {withRouter} from 'react-router-dom'
import { Layout, Menu} from 'antd';
import Icon from '@ant-design/icons';
import Logooo from './logooo.png'
import '../../App.css'
import {adminRoutes} from '../../routes';

const routes = adminRoutes.filter(route => route.isShow)

const { Header, Content, Sider } = Layout;

function Index(props) {
    return (
        <Layout>
    <Header className="header" style={{backgroundColor: '#428bca'}}>
      <div className="logo">
          <img src={Logooo} alt="logo" />
      </div>
   
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          {routes.map(route=>{return (
          <Menu.Item key={route.path} onClick={p=>props.history.push(p.key)}>
              <Icon type = {route.icon} />
              {route.title}
          </Menu.Item>)})}
        </Menu>
      </Sider>
      <Layout style={{ padding: '16px' }}>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  </Layout>
    )
}

export default withRouter(Index)
