import React, { Component } from 'react';
import { Tabs } from 'antd';
import '../css/List2.css';
import 'antd/dist/antd.css';
import ListFooter from '../components/Listfooter';
import MyContext from '../context';
import Gotop from '../components/Gotop';
import { Listss } from '../api';
import { withRouter } from 'react-router-dom';

const { TabPane } = Tabs;

class List2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            datalist: [],
            menu: [],
            activeKey1: '',
            activeKey: ''
        }
    }

    goto = (id) => {
        this.props.history.push({
            pathname: '/details',
            state: id,
        });
    }

    back = () => {
        this.props.history.goBack();
    }

    changeType1 = async (sex) => {
        let data1 = await Listss.get({
            rankType: 9,
            sex,
            pageNo: 1,
            siteId: 99,
            timeLimit: 4,
            group: 1,
            pageSize: 10
        });
        let datalist = data1.data.bookList;

        this.setState({
            datalist,
            activeKey1: sex
        })
    }

    changeType = async (rankType) => {
        let data = await Listss.get({
            rankType,
            sex: 1,
            pageNo: 1,
            siteId: 99,
            timeLimit: 4,
            group: 1,
            pageSize: 10
        });

        let datalist = data.data.bookList;

        this.setState({
            datalist,
            activeKey: rankType,
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
        let menu = datal.data.rank;

        this.setState({
            datalist,
            menu
        })

    }

    render() {
        let { goto,back } = this;
        let { menu, activeKey, activeKey1, datalist } = this.state;
        return (
            <MyContext.Provider value={{ goto }}>
                <div id="listtwo">
                    <header className="header">
                        <div className="leftgg" onClick={back}>
                            <span className="icon"></span>
                        </div>
                        <div className="centerll">
                            <Tabs
                                defaultActiveKey={activeKey1}
                                onChange={this.changeType1}
                            >
                                <TabPane tab="男生" key={1}></TabPane>
                                <TabPane tab="女生" key={2}></TabPane>
                                <TabPane tab="出版" key={3}></TabPane>
                            </Tabs>
                        </div>
                        <div className="right"></div>
                    </header>
                    <div className="b_left">
                        <Tabs
                            tabPosition='left'
                            defaultActiveKey={activeKey}
                            onChange={this.changeType}
                        >
                            {
                                menu.map((item, idx) => (
                                    <Tabs.TabPane tab={item.name} key={idx + 9}>
                                        {
                                            datalist.length > 1 ?
                                                <ListFooter datalist={datalist} goto={this.goto} />
                                                :
                                                <div className="Kong">
                                                    <div className="picimg"></div>
                                                    <p>暂时没有此榜的书籍</p>
                                                </div>
                                        }

                                    </Tabs.TabPane>
                                )
                                )
                            }

                        </Tabs>
                    </div>
                    <Gotop />
                </div>
            </MyContext.Provider >
        )
    }
}

List2 = withRouter(List2);

export default List2;