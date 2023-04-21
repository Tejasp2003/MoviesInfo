"use client"
import React, { useEffect } from 'react'


const Error = ({error, reset}) => {
    useEffect(() => {
        console.log(error)
    }, [error]);
  return (
    <div className='flex items-center justify-center flex-col space-y-3'>
        <h1 className="text-4xl font-bold text-center mt-5">Something went wrong</h1>
        <button onClick={reset} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Try again
        </button>
    </div>
  )
}

export default Error