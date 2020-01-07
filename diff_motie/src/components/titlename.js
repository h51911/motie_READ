import React from 'react';
import { Icon } from 'antd'
import '../scss/titlename.scss'

const Titlename = (props) => {
    return (
        <div className='regtitle'>
            <Icon className='backto' type="left"

            />

            <h2 >{props.children}</h2>

            <div className='backtohome'><Icon type="home" /></div>
        </div>
    )
}

export default Titlename;

