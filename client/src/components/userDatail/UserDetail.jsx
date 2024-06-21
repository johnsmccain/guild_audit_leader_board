import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../../../data'
export const UserDetail = () => {
  const {id} = useParams()
  console.log(param)
  return (
    <div className=''>
      <div className="">
        <div className="">
          <img src={data[id].img} alt="" />
        </div>
        <div className=""></div>
      </div>
      <div className=""></div>
    </div>
  )
}
