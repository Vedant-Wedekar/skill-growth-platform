import React from 'react'

const header = () => {
  return (
    <div className="w-full h-[200px] mt-3">

      <div className="header flex justify-around items-center">
        <div className="logo mr-[150px]">
          <img src=".png" alt="Logo" />
        </div>

        <div className="hn flex justify-around  w-[180px] h-[30px] rounded-3xl bg-gray-200">
          <div className="io">Home</div>
          <div className="io">New Course</div>
        </div>

        <div className="hcma flex justify-around w-[400px] mr-[-80px]">
          <div className="w-[80px] h-[30px] flex justify-center items-center bg-gray-100 rounded-3xl border-black border-[1px] font-Roboto">Home</div>
          <div className="w-[80px] h-[30px] flex justify-center items-center bg-gray-100 rounded-3xl border-black border-[1px]">Course</div>
          <div className="w-[100px] h-[30px] flex justify-center items-center bg-gray-100 rounded-3xl border-black border-[1px]">Mentorship</div>
          <div className="w-[80px] h-[30px] flex justify-center items-center bg-gray-100 rounded-3xl border-black border-[1px]">Help</div>

        </div>
      </div>
     
    </div>
  )
}

export default header
