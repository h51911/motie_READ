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
            datalist: [],
            sexy: '1'
        }
    }

    goto = (id) => {
        // console.log(this.props);
        this.props.history.push({
            pathname: '/details',
            state: id
        });
    }

    back = () => {
        this.props.history.goBack();
    }

    change = async (sex) => {

        let { sexy } = this.state;
        sexy = sex;
        this.setState({
            sexy
        })
        let data = await Listss.get({
            rankType: 9,
            sex,
            pageNo: 1,
            siteId: 99,
            timeLimit: 4,
            group: 1,
            pageSize: 10,
        });

        let datalist = data.data.bookList;

        this.setState({
            datalist,
            istrue: true,
        })
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
        let { goto, back, change } = this;
        return (
            <>
                <MyContext.Provider value={{ goto, back }}>
                    <div id="List" >
                        <Header center="分类" back={back} />
                        <nav className="nav">
                            <div className="nav_list">
                                <span className="nav_title">男频</span>
                                <div className="right">
                                    <ul>
                                        <li className={this.state.sexy == '1' ? 'active' : null} onClick={change.bind(null, 1)}

                                        >男频</li>
                                        <li
                                            className={this.state.sexy == '2' ? 'active' : null}
                                            onClick={change.bind(null, 2)}
                                        >女频</li>
                                        <li
                                            className={this.state.sexy == '3' ? 'active' : null}
                                            onClick={change.bind(null, 3)}>出版</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="nav_list">
                                <span className="nav_title">分类</span>
                                <div className="right">
                                    <ul>
                                        <li className="active" onClick={change.bind(null, 1)}>全部</li>
                                        <li onClick={change.bind(null, 2)}>现代都市</li>
                                        <li onClick={change.bind(null, 3)}>仙侠武侠</li>
                                        <li onClick={change.bind(null, 1)}>玄幻奇幻</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="nav_list">
                                <span className="nav_title">状态</span>
                                <div className="right">
                                    <ul>
                                        <li className="active" onClick={change.bind(null, 1)}>全部</li>
                                        <li onClick={change.bind(null, 2)}>完结</li>
                                        <li onClick={change.bind(null, 3)}>连载</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="nav_list">
                                <span className="nav_title">价格</span>
                                <div className="right">
                                    <ul>
                                        <li className="active" onClick={change.bind(null, 1)}>全部</li>
                                        <li onClick={change.bind(null, 2)}>免费</li>
                                        <li onClick={change.bind(null, 3)}>付费</li>
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