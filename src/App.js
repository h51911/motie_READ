import React, { Component } from 'react';
import { HashRouter, Route, Link, NavLink, Switch, Redirect, withRouter } from 'react-router-dom';

import Home from './pages/Home';
import My from './pages/My';
import Sj from './pages/Sj';

// import "./scss/Jxuan.css"
// import './App.scss';
import { Menu, Icon, Row, Col, Button, Badge } from 'antd';
import 'antd/dist/antd.css'




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [{
        name: 'sj',
        path: '/sj',
        text: '书架',
        icon: 'sj'
      },
      {
        name: 'home',
        path: '/home',
        text: '精选',
        icon: 'star'
      },
      {
        name: 'my',
        path: '/my',
        text: '我的',
        icon: 'my'
      }
      ]
    }
    this.goto = this.goto.bind(this);

  }


  goto (path) {
    this.props.history.push(path)
    console.log('this', this.props);

  }
  render () {
    let { menu } = this.state;
    return <div>
      <Switch>
        {/* 路由配置,当浏览器路径匹配path时,渲染component组件 */}
        <Route path='/sj' component={Sj} />

        <Route path='/home' component={Home} />
        <Route path='/my' component={My} />
        {/* <Route path='/goods/:id' component={Goods} />
        <Route path='/login' component={Login} />
        <Route path='/reg' component={Reg} /> */}
        <Route path='/notfound' render={() => <h1>你访问的页面不存在</h1>} />

        {/* "/" 跳转到 "/home" */}
        <Redirect from="/" to="/home" exact />

        <Redirect to="/notfound" />
        {/* <Route path="/" component={Home}/> */}
      </Switch>
      <Row style={{ backgroundColor: '#fff' }} className="bottom">
        <Col span={8} style={{ lineHeight: '49px', textAlign: 'center' }}>
          <Button
            type="link"
            icon="user-add"
            onClick={this.goto.bind(this, '/sj')}
          >书架</Button>
        </Col>
        <Col className="nav-link" span={8} style={{ lineHeight: '49px', textAlign: 'center' }}>
          <Button
            type="link"
            icon="login"
            onClick={this.goto.bind(this, '/home')}
          >精选</Button>

        </Col>
        <Col span={8} style={{ lineHeight: '49px', textAlign: 'center' }}>

          <Button
            type="link"
            icon="login"
            onClick={this.goto.bind(this, '/my')}
          >我的</Button>

        </Col>
      </Row>
      <p className="nQ">

      </p>


    </div>



  }


}
App = withRouter(App)
export default App;
