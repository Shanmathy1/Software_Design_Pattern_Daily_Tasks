import React from 'react'

const Value = () => {
  return (
    <div className='mb-[4rem] mt-[6rem]'>
      <h1 className='text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block'>
        The Value that holds us true and to account
      </h1>

      <div className="grid gap-[10rem] grid-cols-3 items-center">
        <div className="singleGrid rounded-[10px] hover:bg-[#E7F5FF] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img src='https://cdn.icon-icons.com/icons2/1826/PNG/512/4202069logosimplesocialsocialmedia-115619_115682.png' alt='Simplicity' className='w-[90%]'/>
            </div>
            <span className='font-semibold text-textColor text-[18px]'>
              Simplicity
            </span>
          </div>
          <p className='text-[13px] text-textColor opacity-[0.7] py-[1rem] font-semibold'>
            Things being made beautifully simple are at the heart of everything we do.
          </p>
        </div>

        <div className="singleGrid rounded-[10px] hover:bg-[#f7edf5] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#F4C2E0] h-[40px] w-[40px] flex items-center justify-center">
              <img src='https://cdn.pixabay.com/photo/2017/03/19/20/19/ball-2157465_1280.png' alt='Kindness' className='w-[90%]'/>
            </div>
            <span className='font-semibold text-textColor text-[18px]'>
              Kindness
            </span>
          </div>
          <p className='text-[13px] text-textColor opacity-[0.7] py-[1rem] font-semibold'>
            We believe in making things better for everyone, even if just by a little bit!
          </p>
        </div>

        <div className="singleGrid rounded-[10px] hover:bg-[#fcfae3] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#FFE8A7] h-[40px] w-[40px] flex items-center justify-center">
              <img src='https://assets-global.website-files.com/650ac79396ed334e196159e8/650b33379686b685479415d2_Image.png' alt='Trust' className='w-[90%]'/>
            </div>
            <span className='font-semibold text-textColor text-[18px]'>
              Trust
            </span>
          </div>
          <p className='text-[13px] text-textColor opacity-[0.7] py-[1rem] font-semibold'>
            We work on the basis of creating trust which can be nurtured through authenticity.
          </p>
        </div>
      </div>

      <div className="card mt-[2rem] flex justify-between bg-blueColor p-[5rem] rounded-[10px]">
        <div>
          <h1 className='text-blueColor text-[30px] font-bold'>
            Ready to switch a career
          </h1>
          <h2 className='text-textColor text-[20px] font-bold'>
            Let's get started!
          </h2>
        </div>
        <button className='border-[2px] rounded-[10px] py-[4px] px-[50px] text-[18px] font-semibold text-blueColor hover:bg-slate-400 border-blueColor'>
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Value


