import React from 'react'
import './navbar.css'
import { Link, useParams } from 'react-router-dom'
export const Navbar = () => {
  const paramter = useParams();
  return (
    <nav className='navbar p-3 container m-auto'>
      <Link to={"/"} className='text-3xl text-green-400 font-bold'>Guild Audit</Link>
      {/* <Link to={`user/${paramter.id}`} className='navbar-brand'>User by Id</Link> */}
    </nav>
  )
}
