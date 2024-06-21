import React from 'react'
import {CommandDialogDemo} from '../../components/CommandDialogDemo'

function Success() {
  return (
    <div className='absolute top-1/1 left-1/2 transform:translate(-50%, -50%)'>
        <div  className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h5  className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Payment Successful</h5>
            <ul className="space-y-5 my-7">
                <li  className="flex items-center">
                    <svg  className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>
                    <span  className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">First step Processed</span>
                </li>
                <li  className="flex">
                    <svg  className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>
                    <span  className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Second step Processed</span>
                </li>
                <li  className="flex">
                    <svg  className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>
                    <span  className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Third step Processed</span>
                </li>
            </ul>
            <button type="button"  className="text-red  hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">
                <a href='./Shopping'>Come Back</a>
            </button>
        </div>
        <div className='hidden ...'>
             <CommandDialogDemo />
        </div>
    </div>
  )
}

export default Success