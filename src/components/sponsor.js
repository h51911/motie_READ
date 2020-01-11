import React from 'react'
import '../iconfont/iconfont.css'
import '../scss/sponsor.scss'



const Sponsor = () => {
    return (
        <>
            <h3 className='othername'>______第三方账号登录______</h3>

            <ul className='othercompany'>
                <li className='iconfont'>&#xe600;</li>
                <li className='iconfont'>&#xe6e5;</li>
                <li className='iconfont'>&#xe621;</li>
            </ul>
            <p className="agreement">登录代表你同意<span>《磨铁中文网用户协议》</span></p>
        </>
    )
}

export default Sponsor;