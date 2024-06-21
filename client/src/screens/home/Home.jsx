import React, { useEffect, useState } from 'react'
import data from '../../../data'
import { Card } from '../../components/card/Card'
import axios from 'axios'
export const Home = () => {
  const [grades, setGrades] = useState([])
  const [students, setStudent] = useState([])
  const fetchData = async () => {
    const grades = await axios.get('http://localhost:5000/grades');
    const students = await axios.get('http://localhost:5000/students');
    setGrades(grades.data)
    setGrades(students.data)
  }
  useEffect(() => {


    return () => {
      fetchData()
    }
  }, [])

  console.log(students)
  return (

    <div className='mx-auto max-w-[700px] bg-black bg-opacity-30 rounded-md grid p-5 h-[90%] overflow-hidden  text-amber-50'>
        <div className='grid grid-cols-2 text-2xl my-3'>
            <h2 className='w-[70%] text-center'>Profile</h2>

            <h2 className='text-center'>AVG</h2>
        </div>
        <div className=' overflow-hidden overflow-y-scroll no-scrollbar'>

        {grades.map((data, id) => <Card data={data} key={id}/>)}
        </div>
    </div>
  )
}
