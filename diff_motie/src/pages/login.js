import React, { Component } from 'react';
import '../scss/login.scss';

import Titlename from '../components/titlename'
import Sponsor from '../components/sponsor'


class Login extends Component {


    render() {
        return (
            <>
                <Titlename>账户密码登录</Titlename>
                <div className='main'>
                    <div className='emailtitle'>
                        <input type="text" id='email' placeholder='输入邮箱地址'
                        />
                    </div>
                    <div className='passwordtitle'>
                        <input type="password" id='password' placeholder='输入密码'
                        />
                    </div>

                    <ul className='choose'>
                        <li>
                            <input type="checkbox" />
                            <span>记住我</span>
                        </li>
                        <li>忘记密码</li>
                    </ul>


                    <button className='login'>登录</button>
                    <button className='loginbtn'> 手机快捷登录/注册</button>
                </div>
                <Sponsor></Sponsor>


            </>
        )
    }
}


export default Login;
