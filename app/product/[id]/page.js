import React from 'react'

export default function page({params}) {
  const {id} = params;
  return (
    <div className='py-5'>
        <h2 className='font-semibold text-xl'>Product Details Page: {id}</h2>
    </div>
  )
}
