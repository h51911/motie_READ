import React, { Component } from 'react';
import '../css/base.css'
import '../scss/reg.scss'
import 'antd/dist/antd.css';
import '../iconfont/iconfont.css'
import Titlename from '../components/titlename'
import Sponsor from '../components/sponsor'
import axios from 'axios';
import qs from 'qs';



class Reg extends Component {
    constructor() {

        super();
        //改变样式
        this.state = {
            phone: '',
            verify: '',
            verifycss: 'btn',
            regbtn: 'regbtn'

        }
        //可以换es6写法就不需要初始化this
        this.changnumber = this.changnumber.bind(this);
        this.gotoLogin = this.gotoLogin.bind(this);
        this.changeverify = this.changeverify.bind(this);
        this.verifyphone = this.verifyphone.bind(this);

    }
    changnumber(e) {
        //绑定数据
        let { phone, verifycss } = this.state
        phone = e.target.value;


        this.setState({
            phone,

        })
        //样式的不变
        if (phone.length < 11 || phone.length === undefined) {
            verifycss = 'btn';
            this.setState({
                verifycss
            })


        }
        //样式改变
        else if (phone.length === 11) {
            verifycss = 'btnsuccess';
            this.setState({
                verifycss
            })
        }

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
        let { phone, verifycss } = this.state;
        //非空
        if (phone.length) {

            if (phone.length === 11) {

                if (!/13[0-9]{9}/.test(phone)) {
                    phone = '';
                    verifycss = 'btn';

                    this.setState({
                        phone,
                        verifycss
                    })
                    alert('请输入正确的号码和验证码')
                }
                else {
                    var data = { phone }
                    axios.post('http://localhost:8888/users/userfind',
                        qs.stringify(data)
                    ).then(res => {
                        console.log(res.data.code);
                    })

                    //发起axiso 请求查看数据库是否有相同



                    //跳到  验证码部分
                    //axiso验证成功后的操作
                    verifycss = 'btnsuccess';
                    this.setState({
                        verifycss
                    })
                    this.textInput.focus();

                }
            }
            //没有达到长度没有必要验证
            else {
                phone = '';
                this.setState({
                    phone
                })
                // 用alert会有bug
                // this.textInput.focus();
                alert('请输入正确的号码和验证码')
            }
        }






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
                            onBlur={this.verifyphone}


                        />
                    </div>

                    <div className='messagetitle'>
                        <input type="text" id='message'
                            placeholder='输入验证码'
                            maxLength='6'
                            value={this.state.verify}
                            onChange={this.changeverify}
                            ref={(input) => { this.textInput = input; }}
                        />
                        <button id={this.state.verifycss}>发送验证码</button>

                    </div>


                    <button className={this.state.regbtn}>登录/注册</button>
                    <button className='loginbtn' onClick={this.gotoLogin.bind(null)}> 账号密码登录</button>
                </div>

                <Sponsor />

            </>
        )
    }

}

export default Reg