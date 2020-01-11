import React from 'react';
import { withRouter } from 'react-router-dom';
const GoodLast = ({ datalist1 }) => {


  return (
    <>
      <section className="conNext">
        <h3>
          <em>|</em>
          发现好书
          </h3>
        <ul className="container">
          {
            datalist1.slice(0, 3).map((item, idx) => {
              return (
                <li key={item.id}>
                  <img alt="" src={item.icon} />
                  <h4>{item.name}</h4>
                  <section className="h5"> <img alt="" src={item.authorIcon} />
                    <i className="counts">{item.authorName}</i></section>
                </li>

              )
            })
          }
        </ul>
        <ul className="container">
          {
            datalist1.slice(3, 6).map((item, idx) => {
              return (
                <li key={item.id}>
                  <img alt="" src={item.icon} />
                  <h4>{item.name}</h4>
                  <section className="h5"> <img alt="" src={item.authorIcon} />
                    <i className="counts">{item.authorName}</i></section>
                </li>

              )
            })
          }
        </ul>


      </section>
    </>
  )
}
export default withRouter(GoodLast);