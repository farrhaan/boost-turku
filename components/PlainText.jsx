import React from 'react'

export default function PlainText({ text }) {
    return (
        <div>
            <p className='text-xl my-3 md:my-4'>
                {text}
            </p>
        </div>
    )
}
