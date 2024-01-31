import React from 'react'
import { BookData } from '../lib/interfaces/bookData'

function CardBook({bookData, index} : {bookData: BookData, index: number}) {
  return (
      <div key={index} className="pb-10">
          <div  className="w-[325px] h-[500px] p-9 bg-complementary mx-8 items-center justify-center">
              <div className="w-full flex justify-center items-center">
                  <img src={bookData.imageUrl} alt="" className="w-[225px] h-[350px]"/>
              </div>
              <p className="text-center mt-4 font-semibold text-xl">
                  {bookData.title}
              </p>
              <p className="text-center mb-4 text-lg">
                  {bookData.author}
              </p>
          </div>
      </div>
  )
}

export default CardBook