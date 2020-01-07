import React, { Component } from "react";

import { Carousel } from 'antd';
class Home extends Component {
  constructor() {
    super();
    this.state = {
      recommend: [
        {
          url: './images/ia_100000005.jpg'
        },
        {
          url: './images/ia_100000006.jpg'
        },
        {
          url: './images/ia_100000007.jpg'
        }
      ]
      // recommend:[]
      // datalist:[]
    }

  }
  // goto=(id)=>{
  //   this.props.history.push('//')
  // }
  // async componentDidMount () {
  //   let data = await ExtensionScriptApis.length({

  //   });

  // }
  render () {

    return <div>
      <Carousel className="banner1" autoplay="true">
        <div>
          <img src="https://cdn.motieimg.com/book/0015/156198/1.jpg?x-oss-process=image/resize,m_lfit,h_238,w_170" />
        </div>
        <div>
          <img src="https://cdn.motieimg.com/book/0015/150744/1.jpg?x-oss-process=image/resize,m_lfit,h_238,w_170" />
        </div>
        <div>
          <img src="https://cdn.motieimg.com/book/0015/150744/1.jpg?x-oss-process=image/resize,m_lfit,h_238,w_170" />
        </div>
        <div>
          <img src="https://cdn.motieimg.com/book/0015/150744/1.jpg?x-oss-process=image/resize,m_lfit,h_238,w_170" />
        </div>
      </Carousel>

      <ul className="content1">
        <li>
          <img src="https://cdn.motieimg.com/store/df8957907895e5afd47eb6c64e464bfc.png" />
          <p>
            分类
            </p>
        </li>
        <li>
          <img src="https://cdn.motieimg.com/store/e7e3ceaeac429214e7547f34b5bc17c4.png" />
          <p>
            排行
            </p>
        </li>
        <li>
          <img src="https://cdn.motieimg.com/store/2a8d03f1b8ee3e6168582b10c8c5bb84.png" />
          <p>
            全本
            </p>
        </li>
        <li>
          <img src="https://cdn.motieimg.com/store/aa87fbe0e4f9170feb7bb4be3a5b4e0e.png" />
          <p>
            免费
            </p>
        </li>
      </ul>
      <section className="con1">
        <h3>
          <em>|</em>
          主编力荐
        </h3>
        <section className="con2">
          <ul className="con2-1">
            <li>
              <img src="https://cdn.motieimg.com/book/0015/156198/1.jpg?x-oss-process=image/resize,m_lfit,h_238,w_170" />
              <p>地狱迷航</p>
            </li>
            <li>
              <img src="https://cdn.motieimg.com/book/0015/156198/1.jpg?x-oss-process=image/resize,m_lfit,h_238,w_170" />
              <p>地狱迷航</p>
            </li>
            <li>
              <img src="https://cdn.motieimg.com/book/0015/156198/1.jpg?x-oss-process=image/resize,m_lfit,h_238,w_170" />
              <p>地狱迷航</p>
            </li>
          </ul>

        </section>
      </section>
      <section className="con2">
        <h3>
          <em>|</em>
          本期主打分类
        </h3>
        <dl>
          <dt><img src="https://cdn.motieimg.com/book/0010/102518/3.jpg?x-oss-process=image/resize,m_lfit,h_238,w_170" /></dt>
          <dd>
            <h4>
              诡命法医
            </h4>
            <b>一把千年以前的‘手术刀’，半本祖辈遗留的残卷。
法医，在很久以前，也叫仵作。
我，徐祸。接受了现代法医学科教育，却意外得到一把传承千年的——仵作的刀。
“凡斗殴伤重不能重履之人，不得扛抬赴验，该管官即带领仵作亲往验看。”
“其有检验得法，洗雪沈冤厚给予之。”
           </b>
            <p>
              <img src="https://cdn.motieimg.com/people/0573/5739459/1.jpg?x-oss-process=image/resize,m_lfit,h_30,w_30" />
              <span>天降工人</span>
              <i>
                悬疑探险
             </i>
            </p>
          </dd>
        </dl>
        <dl>
          <dt><img src="https://cdn.motieimg.com/book/0010/102518/3.jpg?x-oss-process=image/resize,m_lfit,h_238,w_170" /></dt>
          <dd>
            <h4>
              诡命法医
            </h4>
            <b>一把千年以前的‘手术刀’，半本祖辈遗留的残卷。
            法医，在很久以前，也叫仵作。
            我，徐祸。接受了现代法医学科教育，却意外得到一把传承千年的——仵作的刀。
            “凡斗殴伤重不能重履之人，不得扛抬赴验，该管官即带领仵作亲往验看。”
            “其有检验得法，洗雪沈冤厚给予之。”
           </b>
            <p>
              <img src="https://cdn.motieimg.com/people/0573/5739459/1.jpg?x-oss-process=image/resize,m_lfit,h_30,w_30" />
              <span>天降工人</span>
              <i>
                悬疑探险
             </i>
            </p>
          </dd>
        </dl>
        <dl>
          <dt><img src="https://cdn.motieimg.com/book/0010/102518/3.jpg?x-oss-process=image/resize,m_lfit,h_238,w_170" /></dt>
          <dd>
            <h4>
              诡命法医
            </h4>
            <b>一把千年以前的‘手术刀’，半本祖辈遗留的残卷。
                  法医，在很久以前，也叫仵作。
                  我，徐祸。接受了现代法医学科教育，却意外得到一把传承千年的——仵作的刀。
                  “凡斗殴伤重不能重履之人，不得扛抬赴验，该管官即带领仵作亲往验看。”
                  “其有检验得法，洗雪沈冤厚给予之。”
           </b>
            <p>
              <img src="https://cdn.motieimg.com/people/0573/5739459/1.jpg?x-oss-process=image/resize,m_lfit,h_30,w_30" />
              <span>天降工人</span>
              <i>
                悬疑探险
             </i>
            </p>
          </dd>
        </dl>

      </section>

    </div>
  }
}
export default Home;
