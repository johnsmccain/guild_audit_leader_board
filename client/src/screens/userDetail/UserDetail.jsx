import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from '../../../data'
import axios from 'axios'
export const UserDetail = () => {
  const {id} = useParams()
  // console.log(id)
    const [grades, setGrades] = useState([])
  const [student, setStudent] = useState([])
  const fetchData = async (studentId) => {
    const grades = await axios.get(`http://localhost:5000/grades/students/${studentId}`);
    const students = await axios.get(`http://localhost:5000/students/${studentId}`);
    setGrades(grades.data)
    setStudent(students.data)
  }
  useEffect(() => {
    console.log(student)

    return () => {
      fetchData(id)
    }
  }, [])

  console.log(student)
  console.log(grades)
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 p-9 gap-5 max-md:flex-col w-full container m-auto overflow-hidden '>
      <div className="relative shadow-md w-[70%]  bg-black bg-opacity-70 h-fit rounded-2xl">
        <div className="">
          <img src={student?.avartar} alt="" className=' w-full'/>
          {/* <img src={``} alt="" className=' w-full'/> */}
        </div>
        <div className=" bottom-0 p-4 rounded-tr-lg rounded-bl-md">
          <div className="">
            <h2 className="text-lg font-bold">{student.name}</h2>
            <p className="">{student?.handle}</p>
          </div>
           <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
          <div className={`${student?.avg > 50 ? "bg-green-400":"bg-red-400"} text-xs font-medium text-gray-800 text-center p-0.5 leading-none rounded-full`}
          style={{ width: `${student?.avg}%` }}
          >
          {`${student?.avg}%`}
          </div>
        </div>
        </div>
      </div>




      <div className="bg-black bg-opacity-10 p-5 rounded-xl h-screen overflow-scroll no-scrollbar">
        <ul className="">{grades.map((gdData, id) => {
          return <li key={gdData._id} className="p-2 bg-gray-500 bg-opacity-5 mb-3 rounded-md hover:shadow-lg x">
            <p className="mb-3">{gdData.assignment.topic}</p>
            {/* <span className="">{gdData.grade}</span> */}
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
            <div className={`${gdData.score> 50?"bg-green-400": "bg-red-400"} text-xs font-medium text-black text-center p-0.5 leading-none rounded-full`}
            style={{ width: `${gdData.score}%` }}
            >
            {`${gdData.score}%`}
            </div>
          </div>
        </li>
        })
          }
        </ul>
      </div>
    </div>
  )
}
