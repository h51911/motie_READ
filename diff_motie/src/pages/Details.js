import React, { Component } from 'react';
import Header from '../components/Header';
import Listfooter from '../components/Listfooter';
import Pubcard from '../components/Pubcard';
import Foot from '../components/Foot';
import Gotop from '../components/Gotop';
import { Listss } from '../api';
import MyContext from '../context';
import { withRouter } from 'react-router-dom';
import '../css/Details.css';
import '../api/icon/iconfont.css';
import qs from 'qs';
import axios from 'axios'

class Details extends Component {
    constructor() {
        super();
        this.addtobook = this.addtobook.bind(this);
        this.state = {
            datalist: [],
            introduce: ''
        }
        window.scrollTo(10,0);
    }

    back = () => {
        this.props.history.goBack();
    }

    gotologin = () => {
        // console.log(this.props);
        this.props.history.push({
            pathname: '/login',
        });
    }

    gotohome = () => {
        // console.log(this.props);
        this.props.history.push({
            pathname: '/home',
        });
    }

    addtobook() {
        let token = localStorage.getItem('phone');

        if (!token) {
            alert('请先登录')
            this.props.history.push('/reg')


        }
        else {
            let { id, icon, name } = this.state.datalist[0]

            var phone = token
            // 拿到本地id 和数据先查找是否存在，不存在再加入
            // 加入成功
            var data = { phone, id }
            console.log(data);
            axios.post('http://localhost:8888/users/books',
                qs.stringify(data)
            ).then(res => {
                //0是可以加入收藏
                if (res.data.code === 1) {
                    var data = { phone, id, icon, name }
                    axios.post('http://localhost:8888/users/addbook',
                        qs.stringify(data)
                    ).then(res => {

                        alert('收藏成功')
                    })
                }

                else if (res.data.code === 0) {
                    alert('你已经收藏了')
                }

            })





        }

    }

    async componentDidMount() {
        let data = await Listss.get({
            rankType: 9,
            sex: 1,
            pageNo: 1,
            siteId: 99,
            timeLimit: 4,
            group: 1,
            pageSize: 10
        })

        let datall = data.data.bookList;
        let datalistId = this.props.location.state;
        //传到详情页的数据
        let datalist = datall.filter(item => item.id === datalistId);
        let introduce = datalist[0].introduce;

        this.setState({
            datalist,
            introduce
        })
        // document.querySelector(".con").scrollTop = 0;
        // window.scrollTo(10,0);

    }

    render() {
        let { back,gotologin,gotohome } = this;
        return (
            <MyContext.Provider value={{ back,gotologin,gotohome }}>
                <div id="details">

                    <Header left="作品详情" icon1={"icon-sousuo1"} icon2={"icon-fangzi1"} gotologin={gotologin} gotohome={gotohome}/>

                    <div className="con">
                        <Listfooter datalist={this.state.datalist} />
                        <div className="buy">
                            <div className="add buy_box" onClick={this.addtobook}>加入书架</div>
                            <div className="read buy_box">立即阅读</div>
                        </div>
                        <div className="shang">
                            <div className="shang_icon shang_left">
                                <span className="iconfont icon--dashangxinxi"></span>
                                <span>打赏</span>
                                <span>(333)</span>
                            </div>
                            <div className="shang_icon shang_right">
                                <span className="iconfont icon-tuijian"></span>
                                <span>推荐(555)</span>
                            </div>
                        </div>

                        <div className="text">
                            <div className="textcon">
                                {this.state.introduce}
                            </div>
                        </div>

                        <div className="mulu">
                            <div className="mulucon">
                                <span className="first">目录</span>
                                <span className="con_text lue"> 连载至 第一百二十三章 别有洞天（2） </span>
                                <span className="con_text">更新于 01-06 13:51</span>
                                <span className="iconfont icon-icon--"></span>
                            </div>
                        </div>
                        <div className="listone">
                            <h3 className="one_title">
                                <em className="ii"></em>
                                看过这本书的人还看了
                        </h3>
                            <div className="one_bottom">
                                <ul>
                                    <li>
                                        <div className="one_img">
                                            <img alt="" src="https://cdn.motieimg.com/book/0011/118652/1.jpg?x-oss-process=image/resize,m_lfit,h_252,w_180" />
                                        </div>
                                        <p className="one_text">心理防线</p>
                                    </li>
                                    <li>
                                        <div className="one_img">
                                            <img alt="" src="https://cdn.motieimg.com/book/0011/110853/1.jpg?x-oss-process=image/resize,m_lfit,h_252,w_180" />
                                        </div>
                                        <p className="one_text">总有大佬对我一见钟情</p>
                                    </li>
                                    <li>
                                        <div className="one_img">
                                            <img src="https://cdn.motieimg.com/book/0011/110545/2.jpg?x-oss-process=image/resize,m_lfit,h_252,w_180" alt="" />
                                        </div>
                                        <p className="one_text">岭南诡术</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="author">
                            <h3 className="one_title">
                                <em className="ii"></em>
                                作者还写过
                            </h3>
                            <Listfooter datalist={this.state.datalist} />
                        </div>

                        <div className="ping">
                            <h3 className="ping_title">
                                <em className="ii"></em>
                                书评区
                            <span className="iconfont icon-xie xie"><span>写书评</span></span>
                            </h3>
                            <div className="ping_text">
                                <ul>
                                    <li>
                                        <div className="pic">
                                            <img src="https://cdn.motieimg.com/people/1951/19516321/2.jpg?x-oss-process=image/resize,m_lfit,h_40,w_40" alt="" />
                                        </div>
                                        <div className="list_text">
                                            <span className="name">红尘中的</span>
                                            <span className="list_center">哈哈，虽然很有不着边际，实质上还是值得拥有滴。666</span>
                                            <div className="list_bottom">
                                                <span className="time">2019-08-10</span>
                                                <div className="huifu">
                                                    <span className="iconfont icon-liuyan"></span>
                                                    <span>(0)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="pic">
                                            <img src="https://cdn.motieimg.com/people/2245/22455332/1.jpg?x-oss-process=image/resize,m_lfit,h_40,w_40" alt="" />
                                        </div>
                                        <div className="list_text">
                                            <span className="name">略略略</span>
                                            <span className="list_center">哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</span>
                                            <div className="list_bottom">
                                                <span className="time">2019-07-30</span>
                                                <div className="huifu">
                                                    <span className="iconfont icon-liuyan"></span>
                                                    <span>(0)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="pic">
                                            <img src="https://cdn.motieimg.com/people/2230/22307276/1.jpg?x-oss-process=image/resize,m_lfit,h_40,w_40" alt="" />
                                        </div>
                                        <div className="list_text">
                                            <span className="name">小蠢喵</span>
                                            <span className="list_center">啊啊啊啊啊啊啊啊（土拨鼠尖叫）好吓人</span>
                                            <div className="list_bottom">
                                                <span className="time">2019-01-09</span>
                                                <div className="huifu">
                                                    <span className="iconfont icon-liuyan"></span>
                                                    <span>(0)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="ping_bottom">
                                <div>
                                    <span>更多书评(2083条)</span>
                                    <span className="iconfont icon-icon--"></span>
                                </div>
                            </div>
                        </div>
                        <Pubcard />
                        <Foot />
                        <Gotop />
                    </div>
                </div>
            </MyContext.Provider>
        )
    }
}

Details = withRouter(Details);

export default Details;
