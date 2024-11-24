import React from 'react'
import ab from './photos/66.jpg';
import bd from './photos/88.jpg';
import cr from './photos/678.jpg';
import de from './photos/4.jpg';





const Plan = () => {
  return (


    
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4' >
{/* Left Side  */}
<div className='grid grid-cols-2 grid-rows-6 h-[80vh]' >

<img className='row-span-3 object-cover w-full h-full p-2'src={ab} alt="My Image" /> 
<img className='row-span-3 object-cover w-full h-full p-2'src={bd} alt="you Image" /> 
<img className='row-span-3 object-cover w-full h-full p-2'src={cr} alt="ro Image" />
<img className='row-span-3 object-cover w-full h-full p-2'src={de} alt="ru Image" />
    

</div>
{/* Right Side */}
    <div className='flex flex-col h-full justify-center' >
    <h3 className=' text-5xl md:text-6xl font-bold'>Buy Your Next Scent</h3>
    <p className='text-2xl py-6' >
"Enhance your allure with our exquisite perfume oils. Crafted for confidence, each drop promises a lasting impression. Elevate your essence and captivate with personalized, premium fragrances."</p>
    <div>
        <button className='border-black mr-4 hover:shadow-xl' >Learn More</button>
        <button className='bg-black text text-white border-black hover:shadow-xl ' >See All Fragrances</button>
    </div>
    </div>
    </div>
  )
}

export default Plan