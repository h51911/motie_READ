import React, { Component } from 'react';
import '../css/Listfooter.css';
import MyContext from '../context';

class Listfooter extends Component {

    render() {
        let { datalist } = this.props;
        return (
            <MyContext.Consumer>
                {
                    (value) => {
                        let { goto } = value;
                        return (
                            <div id="footer">
                                {
                                    datalist.length > 1 ?
                                        datalist.map((item, index) => {
                                            return (
                                                <dl className="big" key={index} onClick={goto.bind(null, item.id)}>
                                                    <div className="tz">
                                                        <dt className="pic">
                                                            <img src={item.icon} alt="" className="image" />
                                                        </dt>
                                                        <dd className="container">
                                                            <div className="top">
                                                                <span className="title">{item.name}</span>
                                                                <span className="cover">{item.introduce}</span>
                                                            </div>
                                                            <div className="bottom">
                                                                <div className="b_img">
                                                                    <img src={item.authorIcon} alt="" />
                                                                    <span className="b_t">{item.authorName}</span>
                                                                </div>
                                                                <div className="bright">
                                                                    {
                                                                        item.bookTags.map((item, index) => <span key={index}>{item}</span>)
                                                                    }
                                                                </div>
                                                            </div>
                                                        </dd>
                                                    </div>
                                                </dl>
                                            )
                                        })
                                        :
                                        datalist.map((item, index) => {
                                            return (
                                                <dl className="big" key={index}>
                                                    <div className="tz">
                                                        <dt className="pic">
                                                            <img src={item.icon} alt="" className="image" />
                                                        </dt>
                                                        <dd className="container">
                                                            <div className="top">
                                                                <span className="title">{item.name}</span>
                                                                <span className="cover">{item.introduce}</span>
                                                            </div>
                                                            <div className="bottom">
                                                                <div className="b_img">
                                                                    <img src={item.authorIcon} alt="" />
                                                                    <span className="b_t">{item.authorName}</span>
                                                                </div>
                                                                <div className="bright">
                                                                    {
                                                                        item.bookTags.map((item, index) => <span key={index}>{item}</span>)
                                                                    }
                                                                </div>
                                                            </div>
                                                        </dd>
                                                    </div>
                                                </dl>
                                            )
                                        })
                                }
                            </div>
                        )
                    }
                }
            </MyContext.Consumer>
        )
    }

}

export default Listfooter;