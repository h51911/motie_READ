import React, { Component } from "react";
import Api from '../api/index.js';
import { Carousel, Tabs } from 'antd';
import '../scss/iconfont/iconfont.css';
import '../scss/base.css';
import Main from './main'
// import GoodLast from '../component/GoodLast'
import axios from 'axios';
import { min } from "moment";
import { Item } from "rc-menu";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datalist2: [],
      datalist3: [],
      datalist1: [],
      show: 1,
      menu: [
        {
          name: '男生',
          id: 1
        },
        {
          name: '女生',
          id: 2
        },
        {
          name: '出版',
          id: 3
        }
      ]

    }
    this.ty = this.ty.bind(this);

  }


  async componentDidMount () {
    // this.ty(show);


    // let datalistOne1 = await Api.get({
    //   rankType: 9,
    //   sex: 1,
    //   pageNo: 1,
    //   siteId: 99,
    //   timeLimit: 4,
    //   group: 1,
    //   pageSize: 100
    // });
    // let datalist1 = datalistOne1.data.bookList;
    // this.setState({

    //   datalist1,


    // })

    // let datalistOne2 = await Api.get({
    //   rankType: 9,
    //   sex: 2,
    //   pageNo: 1,
    //   siteId: 99,
    //   timeLimit: 4,
    //   group: 1,
    //   pageSize: 100
    // });

    // let datalist2 = datalistOne2.data.bookList;
    // let datalistOne3 = await Api.get({
    //   rankType: 9,
    //   sex: 3,
    //   pageNo: 1,
    //   siteId: 99,
    //   timeLimit: 4,
    //   group: 1,
    //   pageSize: 100
    // });
    // let datalist3 = datalistOne3.data.bookList;
    // this.setState({
    //   datalist1,
    //   datalist2,
    //   datalist3,


    // })

    let datalistOne1 = await Api.get({
      rankType: 9,
      sex: 1,
      pageNo: 1,
      siteId: 99,
      timeLimit: 4,
      group: 1,
      pageSize: 100
    });
    let datalist1 = datalistOne1.data.bookList;
    this.setState({

      datalist1,

    })

  }




  async ty (show) {
    this.setState({
      show: show
    });
    let datalistOne1 = await Api.get({
      rankType: 9,
      sex: show,
      pageNo: 1,
      siteId: 99,
      timeLimit: 4,
      group: 1,
      pageSize: 100
    });
    let datalist1 = datalistOne1.data.bookList;
    this.setState({
      datalist1,
    })

  }


  // axios.get('http://localhost:2001/hoelist/find').then(res => {
  //   console.log('res', res);
  //   axios.get('http://localhost:2001/hoelist/find', {
  //     params: {
  //       name: 2
  //     }
  //   }).then(res => {
  //     console.log('res', res);

  // })
  // axios.get('http://localhost:2001/hoelist/find').then(res => {

  //   let datas = [];
  //   datas.push(res);
  //   this.setState({
  //     datas
  //   })


  // })

  render () {
    let { datalist1, datalist3, datalist2, show, menu } = this.state;
    console.log(show, '11');


    return <div className="mt">

      <header>
        <img alt="" src="./imgs/ia_100000000.png" />
        <ul className="h-1">
          {/* <li onClick={this.ty.bind(this, 1)}>男生</li>
          <li onClick={this.ty.bind(this, 2)}>女生</li>
          <li onClick={this.ty.bind(this, 3)}>出版</li> */}
          {
            menu.map((item, index) => {
              return <li key={index} onClick={this.ty.bind(this, index + 1)} className={show === index +1? "active" : ""
              }
              >
                {item.name}
              </li>
            })
          }
        </ul>

        {/* <Tabs
            defaultActiveKey={1}
            tabPosition='top'
            className="h-1"
          >
            <Tabs.TabPane tab="男生" key="1" onClick={this.ty.bind(this, 1)}>
              <Main datalist1={datalist2}></Main>
            </Tabs.TabPane>
            <Tabs.TabPane tab="女生" key="2" onClick={this.ty.bind(this, 2)}>
            
            </Tabs.TabPane>
            <Tabs.TabPane tab="出版" key="3" onClick={this.ty.bind(this, 3)}>
            
            </Tabs.TabPane>
          </Tabs> */}
        <p>

          <em className="iconfont icon-sousuokuang"></em>
          <em className="iconfont icon-hengxian"></em>
        </p>
      </header>
      <section className='he'></section>
      <Main datalist1={datalist1}></Main>
      {/* {this.state.show === 1 ? <Main datalist1={datalist1}></Main> : (this.state.show === 2 ? <Main datalist1={datalist2}></Main> : (this.state.show === 3 ? <Main datalist1={datalist3}></Main> : <Main datalist1={datalist1}></Main>))} */}
    </div >
  }
}
export default Home;
