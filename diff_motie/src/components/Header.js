import React from 'react';
import '../css/Header.css';
import '../api/icon/iconfont.css';
import MyContext from '../context';

function Header(props) {
    let tt = props;

    return (
        <MyContext.Consumer>
            {
                (value) => {
                    let { back,gotologin,gotohome } = value;
                    return (
                        <header id="header">
                            <div className="left">
                                <span className="icon" onClick={back}></span>
                                <span className="left_t">{tt.left}</span>
                            </div>
                            <div className="centerll">
                                <h1 className="center">{tt.center}</h1>
                            </div>
                            <div className="right">
                                <span className={"iconfont " + tt.icon1} onClick={gotologin}></span>
                                <span className={"iconfont " + tt.icon2}
                                onClick={gotohome}></span>
                            </div>
                        </header>
                    )
                }
            }
        </MyContext.Consumer>

    )
}

export default Header;
