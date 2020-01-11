import React, { Component } from 'react';
import { Icon } from 'antd'
import '../scss/titlename.scss'
import { withRouter } from 'react-router-dom'

class Titlename extends Component {
    constructor(props) {
        super(props);

        this.gotoHome = this.gotoHome.bind(this);
    }

    gotoHome() {
        this.props.history.push('/home')
    }
    render() {
        return (
            <div className='regtitle'>
                <Icon className='backto' type="left"
                    onClick={this.props.back}
                />

                <h2 >{this.props.children}</h2>

                <div className='backtohome'><Icon type="home" onClick={this.gotoHome.bind(null)} /></div>
            </div>
        )
    }

}
Titlename = withRouter(Titlename)

export default Titlename;

