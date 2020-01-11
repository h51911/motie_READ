import React from 'react';
import { Icon } from 'antd';
import '../scss/mylist.scss';


const Mylist = (props) => {

    return (
        <ul className='minelist'>
            <li > <p className='list'><Icon type={props.datalist} style={{ fontSize: '.60625rem', color: 'red', lineHeight: '.740625rem' }} />&nbsp; {props.children}</p> </li>
            <li><Icon type="right" style={{ fontSize: '.40625rem', color: 'gray' }} /></li>
        </ul>
    )


}


export default Mylist;