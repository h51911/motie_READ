import React, { Component } from 'react';
import { Icon } from 'antd';
import '../scss/mine.scss';
import Mylist from '../components/mylist'


class Mine extends Component {

    render() {

        return (

            <>
                <ul className='minetitle'>
                    <li className='usermessage'><img src="https://cdn.motieimg.com/people/mt_person_ico.png?x-oss-process=style/user_big" alt="" />
                        <p className='username'>用户名字</p>



                    </li>
                    <li><Icon type="right" style={{ fontSize: '.40625rem' }} /></li>
                </ul>

                <div className='mycount'>
                    <p><Icon type="copy" style={{ fontSize: '.60625rem', color: 'red', lineHeight: '.740625rem' }} />&nbsp; 我的账户</p>

                    <ul className='record'>
                        <li><p>0</p>
                            <span>磨铁币</span>
                        </li>
                        <li><p>0</p>  <span>阅读劵</span></li>
                        <li><p>0</p>   <span>推荐票</span></li>
                    </ul>
                    <button className='login'>充值</button>
                </div>

                <div className='myline'></div>


                <Mylist datalist={'account-book'}>充值记录 </Mylist>    <Mylist datalist={'pay-circle'}>消费记录 </Mylist>    <Mylist datalist={'file-search'}>自动订阅 </Mylist>
                <Mylist datalist={'wallet'}>我的活动 </Mylist>
                <Mylist datalist={'wallet'}>我的投票</Mylist>
                <Mylist datalist={'user-add'}>作家专区 </Mylist>
                <Mylist datalist={'exclamation-circle'}>关于我们 </Mylist>

                <div className='logout'>
                    退出登录
                  </div>

            </>
        )
    }
}


export default Mine;