import React from 'react'
import Card from './Card'

const TailwindProps = () => {
  return (
    <div className='bg-green-100 text-black-500 rounded-lg m-5 p-4 max-w-100 h-auto flex justify-center absolute'>
        <div className='relative'>
            <Card 
                src="https://images.pexels.com/photos/32296411/pexels-photo-32296411.jpeg"
                alt="deer"
                heading="Lorem"
                para='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum
              soluta amet corporis accusantium aliquid consectetur eaque!'
              btnText="Click me"
            />
            <Card 
                src="https://images.pexels.com/photos/31718809/pexels-photo-31718809.jpeg"
                alt="deer"
                heading="Lorem"
                para='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum
              soluta amet corporis accusantium aliquid consectetur eaque!'
                btnText="Visit me"
            />
        </div>
    </div>
  )
}

export default TailwindProps