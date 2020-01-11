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
            regbtn: 'regbtn',
            message: '发送验证码',
            code: ''


        }
        //可以换es6写法就不需要初始化this
        this.changnumber = this.changnumber.bind(this);
        this.gotoLogin = this.gotoLogin.bind(this);
        this.changeverify = this.changeverify.bind(this);
        this.verifyphone = this.verifyphone.bind(this);
        this.setmessage = this.setmessage.bind(this);
        this.gotomine = this.gotomine.bind(this);

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
        let { verify, regbtn, verifycss, message } = this.state
        verify = e.target.value;

        this.setState({
            verify,

        })

        //改变numberbtn 

        if (verify.length === 6 && verifycss === 'btnsuccess') {
            if (verify === message) {
                regbtn = 'regbtnsuccess'

                this.setState({
                    regbtn
                })
            }


        }
        else {
            regbtn = 'regbtn'

            this.setState({
                regbtn
            })
        }
    }
    //跳转到登录页
    gotoLogin() {
        this.props.history.push('/login')
    }
    //验证码功能
    setmessage() {

        let codeArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        let length = 6;
        let code = '';
        let { message, phone, verifycss } = this.state
        for (let i = 0; i < length; i++) {
            let randomI = Math.floor(Math.random() * 36);
            code += codeArr[randomI];
        }

        //上面都通过后才能显示
        if (phone.length === 11 && verifycss === 'btnsuccess') {
            message = code
            this.setState({
                message
            })
            // console.log(code);
            //生成随机验证码
        }
        else {
            message = '发送验证码'
            this.setState({
                message
            })
        }

    }

    verifyphone() {
        // alert(this.state.phone.length)
        let { phone, verifycss, message } = this.state;
        //非空
        if (phone.length) {

            if (phone.length === 11) {

                if (!/13[0-9]{9}/.test(phone)) {
                    phone = '';
                    verifycss = 'btn';
                    message = '发送验证码'
                    this.setState({
                        phone,
                        verifycss, message
                    })
                    alert('请输入正确的号码和验证码')
                }
                else {
                    //跳到  验证码部分
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
                message = '发送验证码'
                this.setState({
                    phone,
                    message
                })
                // 用alert会有bug
                // this.textInput.focus();
                alert('请输入正确的号码和验证码')
            }
        }
    }

    gotomine() {

        //验证验证码是否正确
        let { phone, message, verify } = this.state
        if (message === verify) {
            var data = { phone }
            axios.post('http://localhost:8888/users/userfind',
                qs.stringify(data)
            ).then(res => {
                console.log(res.data.code);

                // 1 注册登录


                if (res.data.code === 1) {
                    console.log(phone);
                    //注册登录
                    var password = '123'
                    var data = { phone, password }
                    axios.post('http://localhost:8888/users/reg',
                        qs.stringify(data)
                    ).then(res => {
                        localStorage.setItem('phone', phone)
                        this.props.history.push('/home')
                        alert('注册成功默认密码123')
                        console.log('注册登录成功', res.data.code);
                    })

                }
                else {


                    //存在直接登录
                    console.log(phone);
                    //需要set 那个token..
                    localStorage.setItem('phone', phone)
                    console.log('登录成功');
                    this.props.history.push('/home')



                }
            })
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
                            ref={(input) => {
                                this.numInput = input;
                            }}

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
                        <button id={this.state.verifycss}
                            onClick={this.setmessage.bind(null)}
                        >{this.state.message}</button>

                    </div>


                    <button className={this.state.regbtn}
                        onClick={this.gotomine}
                    >登录/注册</button>
                    <button className='loginbtn' onClick={this.gotoLogin.bind(null)}> 账号密码登录</button>
                </div>

                <Sponsor />

            </>
        )
    }

}

export default Reg