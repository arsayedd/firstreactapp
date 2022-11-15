import React from 'react'
import CardOverlay from '../CardOverlay/CardOverlay'
import './CardList.css'
export default function CardList({imgSrc,title ,index}) {
    
  return (
    <>
    <div className='col-md-4'>
        <div className="portfolio-cards position-relative overflow-hidden">
            <img src={imgSrc} alt="" className='w-100 rounded' />
            <CardOverlay imgSrc={imgSrc} title={title} index={index}/>
          </div>
    </div>
    
    </>
  )
}
