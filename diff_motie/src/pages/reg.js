import React, { Component } from 'react';
import '../css/base.css'
import '../scss/reg.scss'
import 'antd/dist/antd.css';
import '../iconfont/iconfont.css'
import Titlename from '../components/titlename'
import Sponsor from '../components/sponsor'



class Reg extends Component {
    constructor() {

        super();
        this.gotoLogin = this.gotoLogin.bind(this)
    }


    gotoLogin() {
        this.props.history.push('/login')
    }
    render() {

        return (
            <>
                <Titlename >手机快捷登录/注册</Titlename>


                <div className='main'>
                    <div className='phonetitle'>
                        <input type="text" id='phone' placeholder='输入手机号码'
                            maxLength='11' />
                    </div>
                    <div className='messagetitle'>
                        <input type="text" id='message' placeholder='输入验证码' maxLength='6'
                        />
                        <button id='btn'>发送验证码</button>

                    </div>
                    <button className='regbtn'>登录/注册</button>
                    <button className='loginbtn' onClick={this.gotoLogin.bind(null)}> 账号密码登录</button>
                </div>

                <Sponsor />

            </>
        )
    }

}

export default Reg