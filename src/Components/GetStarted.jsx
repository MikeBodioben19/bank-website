import React from 'react'
import {BiRightArrowAlt} from 'react-icons/bi'
import styles from '../style'


const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className='font-poppins font-semibold text-[18px] leading-[23.4px}'>
            <span className='text-gradient'>Get</span>
          </p>
          <BiRightArrowAlt className='w-[23px] h-[23px] text-white' />
        </div>

        <p className='font-poppins font-medium text-[18px] leading-[23.4px]'>
          <span className='text-gradient'>Started</span>
        </p>
      </div>
    </div>
  )
}

export default GetStarted