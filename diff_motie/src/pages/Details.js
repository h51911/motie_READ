import React, { Component } from 'react';
import Header from '../components/Header';
import Listfooter from '../components/Listfooter';
import { Listss } from '../api';
import '../css/Details.css';
import '../api/icon/iconfont.css';

class Details extends Component {
    constructor() {
        super();

        this.state = {
            datalist: []
        }
    }
    async componentDidMount() {
        let data = await Listss.get('', {
            pageSize: 1,
        })
        let datalist = data.data.bookList[0];
        // console.log(datalist.bookTags);

        this.setState({
            datalist
        })
    }
    render() {
        return (
            <div id="details">
                <Header left="作品详情" icon1={"icon-sousuo1"} icon2={"icon-fangzi"} />
                <nav className="nav">
                    <Listfooter datalist={this.state.datalist} />
                    <div className="buy">
                        <div className="add buy_box">加入书架</div>
                        <div className="read buy_box">立即阅读</div>
                    </div>
                    <div className="shang">
                        <div class="shang_icon shang_left">
                            <span className="iconfont icon--dashangxinxi"></span>
                            <span>打赏</span>
                            <span></span>
                        </div>
                        <div class="shang_icon shang_right">
                            <span className="iconfont icon-tuijian"></span>
                            <span>推荐</span>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Details;
