import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/navbar/Navbar'
import { Home } from './screens/home/Home'
import { UserDetail } from './screens/userDetail/UserDetail'


function App() {


  return (
    <div className='w-full mx-auto bg-gradient-to-r from-slate-900 to-slate-700 h-screen text-white'>
    <Navbar/>

    <main className="mx-auto h-[90%] ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<UserDetail/>} />
      </Routes>
    </main>
    </div>
  )
}

export default App
