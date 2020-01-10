import React, { Component } from 'react';
import '../scss/mybook.scss'



class Sj extends Component {
  render() {
    return (
      <>
        <div className='mybookshop'> 我的书架</div>
        <div className='booktitle'> <span>收藏书籍1本</span> <span className='bookmanage'>管理</span></div>
        <main className='booklist'> <img src="https://cdn.motieimg.com/book/0015/156198/1.jpg?x-oss-process=image/resize,m_lfit,h_140,w_100" alt="" /><p><span>地狱迷航</span><span>点击阅读</span></p><span className='del'>删除</span></main>


      </>
    )
  }
}

// Sj = withStorage(Sj);

export default Sj;