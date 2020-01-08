import React from 'react';
import '../css/Gotop.css'
import '../api/icon/iconfont.css';
import { BackTop } from 'antd';

function Gotop() {
    return (
        <BackTop>
            <div className="ant-back-top-inner gotop iconfont icon-huidaodingbu"></div>
        </BackTop>
    )
}

export default Gotop;