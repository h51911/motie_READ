import React, { Component } from 'react';
import '../css/Listfooter.css';

class Listfooter extends Component {
    getgoto = (id) => {
        this.props.goto(id);
    }
    render() {
        let { datalist } = this.props;
        return (
            <div id="footer">
                {
                    datalist.length >= 1 ?
                        datalist.map((item, index) => {
                            return (
                                <dl className="big" key={index} onClick={this.getgoto.bind('/details')}>
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
                        <dl className="big">
                            <div className="tz">
                                <dt className="pic">
                                    <img src={datalist.icon} alt="" className="image" />
                                </dt>
                                <dd className="container">
                                    <div className="top">
                                        <span className="title">{datalist.name}</span>
                                        <span className="cover">{datalist.introduce}</span>
                                    </div>
                                    <div className="bottom">
                                        <div className="b_img">
                                            <img src={datalist.authorIcon} alt="" />
                                            <span className="b_t">{datalist.authorName}</span>
                                        </div>
                                        <div className="bright">
                                            {
                                                // datas.map((item, index) => <span key={index}>{item}</span>)
                                            }
                                        </div>
                                    </div>
                                </dd>
                            </div>
                        </dl>
                }
            </div>

        )
    }

}

export default Listfooter;