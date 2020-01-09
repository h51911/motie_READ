import React, { Component } from "react";
import '../scss/iconfont/iconfont.css';
import '../scss/base.css';
import List from '../component/List'
import { withRouter } from 'react-router-dom'
import { Carousel, Tabs } from 'antd';

const Main = ({ datalist1 }) => {
  return (
    <>
      <main>
        <Carousel className="banner1" autoplay="true">
          <div>
            <img alt="" src="https://cdn.motieimg.com/specail/7T1571812847987..png" />
          </div>
          <div>
            <img alt="" src="./imgs/ia_100000053.png" />
          </div>
          <div>
            <img alt="" src="./imgs/ia_100000052.jpg" />
          </div>
          <div>
            <img alt="" src="./imgs/ia_100000053.png" />
          </div>

        </Carousel>

        <ul className="content1">
          <li>
            <img alt="" src="https://cdn.motieimg.com/store/df8957907895e5afd47eb6c64e464bfc.png" />
            <p>
              分类
      </p>
          </li>
          <li>
            <img alt="" src="https://cdn.motieimg.com/store/e7e3ceaeac429214e7547f34b5bc17c4.png" />
            <p>
              排行
      </p>
          </li>
          <li>
            <img alt="" src="https://cdn.motieimg.com/store/2a8d03f1b8ee3e6168582b10c8c5bb84.png" />
            <p>
              全本
      </p>
          </li>
          <li>
            <img alt="" src="https://cdn.motieimg.com/store/aa87fbe0e4f9170feb7bb4be3a5b4e0e.png" />
            <p>
              免费
      </p>
          </li>
        </ul>
        <List datalist1={datalist1}></List>
        <section className="mainOne">
          <div className="One1">
            <h3>
              磨铁文学旗下品牌
        </h3>
            <i></i>

          </div>
          <ul className="inH">
            <li>
              <img alt="" src="https://cdn.motieimg.com/web/site/logo/99d24.jpg" />
              <div className="in1">
                <h4>磨铁阅读平台</h4>
                <p>磨铁旗下网站综合站，汇聚旗下所有小说</p>
              </div>

            </li>
            <li>
              <img alt="" src="https://cdn.motieimg.com/web/site/logo/1d11.jpg" />
              <div className="in1">
                <h4>磨铁阅读平台</h4>
                <p>磨铁旗下网站综合站，汇聚旗下所有小说</p>
              </div>

            </li>
            <li>
              <img alt="" src="https://cdn.motieimg.com/web/site/logo/2d5.jpg" />
              <div className="in1">
                <h4>磨铁阅读平台</h4>
                <p>磨铁旗下网站综合站，汇聚旗下所有小说</p>
              </div>

            </li>
            <li>
              <img alt="" src="https://cdn.motieimg.com/web/site/logo/5d2.jpg" />
              <div className="in1">
                <h4>磨铁阅读平台</h4>
                <p>磨铁旗下网站综合站，汇聚旗下所有小说</p>
              </div>

            </li>
            <li>
              <img alt="" src="https://cdn.motieimg.com/web/site/logo/4d5.jpg" />
              <div className="in1">
                <h4>磨铁阅读平台</h4>
                <p>磨铁旗下网站综合站，汇聚旗下所有小说</p>
              </div>

            </li>
            <li>
              <img alt="" src="https://cdn.motieimg.com/web/site/logo/6d5.jpg" />
              <div className="in1">
                <h4>磨铁阅读平台</h4>
                <p>磨铁旗下网站综合站，汇聚旗下所有小说</p>
              </div>

            </li>
          </ul>
        </section>
      </main>
    </>
  )
}
export default withRouter(Main);