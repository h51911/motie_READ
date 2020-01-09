import React from 'react';
import { withRouter } from 'react-router-dom';

const Good = ({ datalist1, titleO1, titleO2 }) => {
  return (
    <>
      <section className="con1">
        <h3>
          <em>|</em>
          {titleO2}
        </h3>
        <section className="con2">
          <ul className="con2-1">
            {
              datalist1.slice(0, 3).map((item, idx) => {
                return (
                  <li key={item.id}>
                    <img alt="" src={item.icon} />
                    <p>{item.name}</p>
                  </li>
                )
              })
            }

          </ul>

        </section>
      </section>
      <section className="con2">
        <h3>
          <em>|</em>
          {titleO1}
        </h3>
        {
          datalist1.slice(3, 6).map((item, idx) => {
            return (
              <dl key={item.id}>
                <dt><img alt="" src={item.icon} /></dt>
                <dd>
                  <h4>{item.name}} </h4>
                  <b>{item.introduce}</b>
                  <p>
                    <img alt="" src={item.authorIcon} />
                    <span>{item.authorName}</span>
                    <i> 悬疑探险</i>
                  </p>
                </dd>
              </dl>

            )
          })
        }

        <em className="more">查看更多</em>
      </section>
    </>
  )
}
export default withRouter(Good)