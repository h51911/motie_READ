import Good from './Good'
import GoodLast from './GoodLast'
import { withRouter } from 'react-router-dom'
import React from 'react';


const List = ({ datalist1 }) => {
  return (
    <>
      <Good datalist1={datalist1} titleO1='主编力荐' titleO2='本期主打分类' ></Good>
      <Good datalist1={datalist1.slice(6)} titleO1='书友收藏' titleO2='完美精品'></Good>
      <Good datalist1={datalist1.slice(12)} titleO1='无线风向榜' titleO2='新书抢先榜'></Good>
      <GoodLast datalist1={datalist1.slice(18)}></GoodLast>
    </>
  )


}
export default withRouter(List)

