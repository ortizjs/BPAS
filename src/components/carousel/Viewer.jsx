import React from 'react'

function Viewer({ catalogImage }) {
  return (
    <div className='carousel-img-contianer'>
      <img 
        alt='catalog-view' 
        className='carousel-img' 
        src={catalogImage}
        data-testid='catalog-view' 
      />
    </div>
  )
}

export default Viewer