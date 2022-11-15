import React from 'react'

export default function MovieCards({title , imgSrc}) {
  return (
        <div className='col-md-3'>
            <div className="moveis-cards shadow">
                <div>
                    <img src={'https://image.tmdb.org/t/p/w500'+imgSrc} className='w-100' alt="" />
                </div>
                <h5 className='text-white text-center py-2'>{title}</h5>
            </div>
        </div>
  )
}
