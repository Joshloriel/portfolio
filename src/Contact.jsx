import React from 'react'
import CoreForm from '@/CoreForm'
const Contact = () => {
    return (
        <div id='contact' className=' bg-slate-700 pb-10 pt-20 min-h-[92vh]'>
            <div className="container min-h-96 bg-slate-800 md:w-3/5 rounded">
                <h3 className='text-3xl font-bold text-center py-6'>Message me!</h3>
                <CoreForm />
            </div>
        </div>
    )
}

export default Contact