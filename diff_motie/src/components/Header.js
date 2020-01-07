import React from 'react';
import '../css/Header.css';
import '../api/icon/iconfont.css';

function Header(props) {
    let tt = props;
    return (
        <header id="header">
            <div className="left">
                <span className="icon"></span>
                <span className="left_t">{tt.left}</span>
            </div>
            <div className="centerll">
                <h1 className="center">{tt.center}</h1>
            </div>
            <div className="right">
                <span className={"iconfont " + tt.icon1}></span>
                <span className={"iconfont " + tt.icon2}></span>
            </div>
        </header>
    )
}

export default Header;
