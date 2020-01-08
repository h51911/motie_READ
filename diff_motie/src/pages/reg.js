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

        this.state = {
            phone: '',
            verify: ''

        }
        //可以换es6写法就不需要初始化this
        this.changnumber = this.changnumber.bind(this);
        this.gotoLogin = this.gotoLogin.bind(this);
        this.changeverify = this.changeverify.bind(this);
        this.verifyphone = this.verifyphone.bind(this);

    }
    changnumber(e) {
        //绑定数据
        let { phone, } = this.state
        phone = e.target.value;

        this.setState({
            phone,

        })

    }
    changeverify(e) {
        //绑定数据
        let { verify } = this.state
        verify = e.target.value;

        this.setState({
            verify,

        })
    }

    gotoLogin() {
        this.props.history.push('/login')
    }
    verifyphone() {
        // alert(this.state.phone.length)


    }
    render() {

        return (
            <>
                <Titlename >手机快捷登录/注册</Titlename>


                <div className='main'>
                    <div className='phonetitle'>
                        <input type="text" id='phone' placeholder='输入手机号码'
                            maxLength='11'
                            value={this.state.phone}
                            onChange={this.changnumber}
                            onBlur={this.verifyphone} />
                    </div>

                    <div className='messagetitle'>
                        <input type="text" id='message'
                            placeholder='输入验证码'
                            maxLength='6'
                            value={this.state.verify}
                            onChange={this.changeverify}
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