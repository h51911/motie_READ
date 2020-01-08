import React, { Component } from 'react';
import { Tabs } from 'antd';
// import { StickyContainer, Sticky } from 'react-sticky';
import '../css/List2.css';
import 'antd/dist/antd.css';
import ListFooter from '../components/Listfooter';
import MyContext from '../context';
import Gotop from '../components/Gotop';
import { Listss } from '../api';
import { withRouter } from 'react-router-dom';

const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}


class List2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            datalist: [],
            menu: [],
            activeKey: ''
        }
    }

    goto = (id) => {
        // console.log(this.props);
        this.props.history.push({
            pathname: '/details',
            state: id,
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
        let menu = datal.data.rank;
        let activeKey = datal.data.rank.id;

        this.setState({
            datalist,
            menu,
            activeKey
        })

    }

    render() {
        let { goto } = this;
        let { menu, activeKey } = this.state;
        return (
            <MyContext.Provider value={{ goto }}>
                <div id="listtwo">
                    <header className="header">
                        <div className="leftgg">
                            <span className="icon"></span>
                        </div>
                        <div className="centerll">
                            <Tabs defaultActiveKey="1" onChange={callback}>
                                <TabPane tab="男生" key="1">
                                    {/* Content of Tab Pane 1 */}
                                    <ListFooter datalist={this.state.datalist} goto={this.goto} />
                                </TabPane>
                                <TabPane tab="女生" key="2">
                                    <ListFooter datalist={this.state.datalist} goto={this.goto} />
                                </TabPane>
                                <TabPane tab="出版" key="3">
                                    <ListFooter datalist={this.state.datalist} goto={this.goto} />
                                </TabPane>
                            </Tabs>
                        </div>
                        <div className="right"></div>
                    </header>
                    <div className="b_left" style={{ width: 90 }}>
                        <Tabs tabPosition='left' defaultActiveKey={activeKey} >
                            {
                                menu.map((item, idx) => (
                                    <Tabs.TabPane tab={item.name} key={idx}></Tabs.TabPane>
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