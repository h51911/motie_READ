import React, { Component } from 'react';
import '../scss/mybook.scss'
import axios from 'axios';
import qs from 'qs';



class Sj extends Component {
  constructor() {
    super()
    this.state = {
      datalist: [],
      titlename: '管理',
      ios: false,
      devcss: 'delview'
    }
    this.changedel = this.changedel.bind(this)
    this.dels = this.dels.bind(this)
  }

  async componentDidMount() {
    let phone = localStorage.getItem('phone');
    var data = { phone }
    await axios.post('http://localhost:8888/users/bookshoplist',
      qs.stringify(data)).then(res => {
        console.log(res.data);
        let { datalist } = this.state
        if (res.data) {

          datalist = res.data
          this.setState({
            datalist
          })
        }

      })


  }




  dels(item) {
    let phone = localStorage.getItem('phone');
    var id = item
    console.log(id);
    var data = { phone, id }
    axios.post('http://localhost:8888/users/del',
      qs.stringify(data)).then(res => {
        // console.log(res.data);
        if (res.data.code === 0) {
          var data = { phone }
          console.log(data);
          axios.post('http://localhost:8888/users/bookshoplist',
            qs.stringify(data)).then(res => {
              console.log(res.data);
              let { datalist } = this.state
              // console.log(datalist);
              datalist = res.data;

              this.setState({
                datalist
              })

            })
        }

      })

  }

  changedel() {
    let { titlename, ios, devcss } = this.state
    ios = !ios;
    if (ios === true) {
      titlename = '完成'
      devcss = 'del'

    }
    else {
      titlename = '管理'
      devcss = 'delview'
    }
    this.setState({
      ios,
      titlename,
      devcss
    })

  }
  render() {
    var { datalist } = this.state

    // console.log('2', this.state.datalist);


    return (

      datalist.length ? <>

        <div className='mybookshop'> 我的书架</div>
        <div className='booktitle'> <span>收藏书籍{datalist.length}本</span> <span className='bookmanage'
          onClick={this.changedel.bind(null)}
        >{this.state.titlename}</span></div>
        {
          datalist.map(item => {
            return (
              <React.Fragment key={item.id}>


                <main className='booklist'> <img src={item.icon} alt="" /><p><span>{item.name}</span><span>点击阅读</span></p><span className={this.state.devcss}
                  onClick={this.dels.bind(null, item.id)}
                >删除</span></main>
              </React.Fragment>

            )
          })}


      </> : <>

          <div className='mybookshop' onClick={this.texts}> 我的书架</div>
          <div className='booktitle'> <span>收藏书籍0本</span> <span className='bookmanage'>管理</span></div>

        </>

    )
  }
}

// Sj = withStorage(Sj);

export default Sj;