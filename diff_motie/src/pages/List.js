import React, { Component } from 'react';
import '../css/List.css';
import { Listss } from '../api';
import Listfooter from '../components/Listfooter';
import Header from '../components/Header';
import '../api/icon/iconfont.css';
import { withRouter } from 'react-router-dom';
import Gotop from '../components/Gotop';
import MyContext from '../context';

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            datalist: []
        }
    }

    goto = (id) => {
        // console.log(this.props);
        this.props.history.push({
            pathname: '/details',
            state: id
        });
    }

    async componentDidMount() {
        let datal = await Listss.get({
            rankType: 9,
            sex: 1,
            pageNo: 1,
            siteId: 99,
            timeLimit: 4,
            group: 1,
            pageSize: 10,
        });

        let datalist = datal.data.bookList;
        
        this.setState({
            datalist
        })
    }

    render() {
        let { goto } = this;
        return (
            <>
                <MyContext.Provider value={{ goto }}>
                    <div id="List" >
                        <Header center="分类" />
                        <nav className="nav">
                            <div className="nav_list">
                                <span className="nav_title">男频</span>
                                <div className="right">
                                    <ul>
                                        <li className="active">男频</li>
                                        <li>女频</li>
                                        <li>出版</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="nav_list">
                                <span className="nav_title">分类</span>
                                <div className="right">
                                    <ul>
                                        <li className="active">全部</li>
                                        <li>现代都市</li>
                                        <li>仙侠武侠</li>
                                        <li>玄幻奇幻</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="nav_list">
                                <span className="nav_title">状态</span>
                                <div className="right">
                                    <ul>
                                        <li className="active">全部</li>
                                        <li>完结</li>
                                        <li>连载</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="nav_list">
                                <span className="nav_title">价格</span>
                                <div className="right">
                                    <ul>
                                        <li className="active">全部</li>
                                        <li>免费</li>
                                        <li>付费</li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        <footer className="footer">
                            <Listfooter datalist={this.state.datalist} goto={this.goto} />
                        </footer>
                        <Gotop />
                    </div>
                </MyContext.Provider>
            </>
        )
    }
}

List = withRouter(List);


export default List