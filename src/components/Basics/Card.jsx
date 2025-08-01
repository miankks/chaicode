import React from 'react'

const Card = ({src, alt, heading, para, btnText="Read more"}) => {
  return (
    <div className="rounded-md shadow-md bg-black text-gray-100 m-4">
        <img
          src={src}
          alt={alt}
          className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{heading}</h2>
            <p className="text-gray-400">
              {para}
            </p>
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
          >
            {btnText}
          </button>
        </div>
      </div>
  )
}

export default Card