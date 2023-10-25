import React, {useState, useEffect } from 'react'
// import {m4, hoodOpen, mercedes, multipleCars, redBmw, silverBmw} from './../../assets/images';
import M4 from './../../assets/images/m4.png'
import hoodOpen from './../../assets/images/hoodOpen.png'
import mercedes from './../../assets/images/mercedes.png'
import redBmw from './../../assets/images/redBmw.png'
import silverBmw from './../../assets/images/silverBmw.png'
import './Carousel.css'

import Viewer from './Viewer';
const Carousel = () => {
    const catalogList = [
        {
            thumb: M4,
            image: M4
          },
          {
            thumb: silverBmw,
            image: silverBmw
          },
          {
            thumb: redBmw,
            image: redBmw
          },
          {
            thumb: mercedes,
            image: mercedes
          },
          {
            thumb: hoodOpen,
            image: hoodOpen
          },
    ];

    const [ catalogs, setCatalogs ] = useState([...catalogList]);
    const [ activeIndex, setActiveIndex ] = useState(0);
    const [ isSliding, setIsSliding ] = useState(true);
    const [ slideDuration ] = useState(3000);

    // const handlePreviousClick = () => {
    //     if (activeIndex === 0) {
    //       setActiveIndex(catalogs.length - 1);
    //     } else {
    //       setActiveIndex(prevIdx => prevIdx - 1);
    //     }
    // }

    // const handleThumbClick = (idx) => {
    //     setActiveIndex(idx)
    // }
    const handleNextClick = () => {
        if (activeIndex === catalogs.length - 1) {
            setActiveIndex(0);
        } else {
            setActiveIndex(prevIdx => prevIdx + 1);
        }
    }

    useEffect(() => {
        if (isSliding) {
          const interval = setInterval(() => handleNextClick(), slideDuration);
          return () => clearInterval(interval)
        }
      }, [isSliding, activeIndex])

    return (
        <div className='carousel-container'>
            <Viewer catalogImage={ catalogs[activeIndex].image } />
        </div>
    )
}

export default Carousel
