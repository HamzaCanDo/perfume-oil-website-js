import React, {Component, useState} from 'react'
import aaa from './photos/1.jpg';
import bbb from './photos/2.jpg';
import ccc from './photos/3.jpg';
import ddd from './photos/4.jpg';
import eee from './photos/5.jpg';
import fff from './photos/6.jpg';
import ggg from './photos/7.jpg';
import iii from './photos/8.jpg';
import jjj from './photos/9.jpg';
import kkk from './photos/10.jpg';
import lll from './photos/66.jpg';
import mmm from './photos/90.jpg';
import nnn from './photos/123.jpg';
import ooo from './photos/678.jpg';
import ppp from './photos/4560.jpg';
import qqq from './photos/9088.jpg';
import rrr from './photos/Front.jpg';
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

const ImageSlider = () => {
    const slides = [
      {
        url: aaa,
        
      },
      {
        url: bbb,

      },
      {
        url: ccc,
 
      },
      {
        url: ddd,
        
      },
      {
        url: eee,
        
      },
      {
        url: fff,
        
      },
      {
        url: ggg,
        
      },
      {
        url: iii,
        
      },
      {
        url: jjj,
        
      },
      {
        url: kkk,
        
      },
      {
        url: lll,
        
      },
      {
        url: mmm,
        
      },
      {
        url: nnn,
        
      },
      {
        url: ooo,
        
      },
      {
        url: ppp,
        
      },
      {
        url: qqq,
        
      },
      {
        url: rrr,
        
      },
    ];

    const[currentIndex, setCurrentIndex] = useState(0)

const prevSlide = () => {
  const isFirstSlide = currentIndex ===0
  const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
  setCurrentIndex(newIndex)
}

const nextSlide = () => {
  const isLastSlide = currentIndex === slides.length - 1
  const newIndex = isLastSlide ? 0 : currentIndex + 1
  setCurrentIndex(newIndex)
}
const goToSlide = (slideIndex) => {
  setCurrentIndex(slideIndex)
}


    return ( 
    <div className='max-w-[1400px] h-[580px] w-full m-auto py-16 px-4 relative group'>  
<div
 className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
 style={{ backgroundImage: `url(${slides[currentIndex].url})` }} 
 ></div>

<div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl
 rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer ' >
<BsChevronCompactLeft onClick={prevSlide} size={30} />
</div>

<div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl
 rounded-full p-2  group-hover:bg-black/20 text-white cursor-pointer ' >
<BsChevronCompactRight onClick={nextSlide} size={30} />
</div>

<div className='flex top-4 justify-center py-2'>
  {slides.map((slide, slideIndex) =>(

<div className='text-2xl cursor-pointer'
 key={slideIndex}
 onClick={() =>goToSlide(slideIndex) }
 >
<RxDotFilled />
</div>
    
  ))}
</div>

</div>
    )
}

export default ImageSlider;