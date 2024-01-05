import React, { useState } from 'react'

export default function TodoFooter({task}) {

    

  return (
    <div>
        {
            task.map((item, index) => {
                return <div className=' d-flex ' key={index}>
                    <input type="checkbox" />
                    <h2 className='mx-3'>{item.title} {item.id}</h2>
                </div>
            })
        }
    </div>
  )
}
