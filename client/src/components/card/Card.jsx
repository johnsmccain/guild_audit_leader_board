import React from 'react'
import { Link } from 'react-router-dom'

export const Card = ({data}) => {
  return (

    <Link to={`/user/${data._id}`}>
      <div className='grid grid-cols-2 text-2xl  my-9 bg-opacity-5 bg-white rounded-md gap-5 h-28 overflow-hidden hover:shadow-md items-center pr-5 hover:shadow-slate-800 transition duration-300 ease-in-out' >
        <div className="flex items-center flex-initial w-auto">

          <img src={`${data.avartar}`} alt="Student" className='h-32 w-32  mr-5 object-cover' />
          <div className="">
            <h3 className='text-xl'>{data.name}</h3>
            <p className='text-sm bg-slate-900 bg-opacity-20 p-2 rounded'>Guild Audit</p>
          </div>
        </div>
          {/* <p className='ml-auto text-centers'>{data.accumilativeGrades}</p> */}

        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
          <div className={`${data.avg > 50 ? "bg-green-400":"bg-red-400"} text-xs font-medium text-gray-900 text-center p-0.5 leading-none rounded-full`}
          style={{ width: `${data?.avg}%` }}
          >
          {`${data.avg}%`}
          </div>
        </div>

      </div>
    </Link>

  )
}
