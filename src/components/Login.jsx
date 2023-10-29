import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='bg-violet-100 h-screen flex justify-center items-center'>
        <div className='bg-white p-8 rounded-md shadow-lg'>
            <div className='flex flex-col gap-5'>
                <h2 className='text-center text-3xl font-bold text-violet-500'>Todos</h2>
                <input type='text' placeholder='Username' className='bg-white border-2 p-3 w-80 text-black placeholder-gray-500 border-gray-300 outline-none rounded-md'/>
                <input type='password' placeholder='Password' className='bg-white border-2 p-3 w-80 text-black placeholder-gray-500 border-gray-300 outline-none rounded-md'/>
                
                <Link to='../' className='text-center bg-violet-500 p-3 rounded-md text-white text-lg border hover:border-violet-500 hover:bg-white hover:text-violet-500 '>Login</Link>
            </div>
        </div>
    </div>
  )
}

export default Login