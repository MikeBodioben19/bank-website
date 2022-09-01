import React,{useState} from 'react'
import { navLinks } from '../Constants'
import {logo} from '../assets'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'

const Navbar = () => {
  const [active, setActive] = useState('home')
  const [toggle, setToggle] = useState(false)
  return (
    <nav className='navbar w-full flex py-6 justify-between items-center z-20'>
      <div className="navbar__logo">
        <img src={logo} alt="logo" className=' w-[100px] h-[32px]'/>
      </div>

      <ul className='hidden sm:flex items-center justify-center flex-1'>
        {navLinks.map((nav,index) => (
          <li key={nav.id} className= {`cursor-pointer font-normal font-poppins text-[16px] 
          ${
            active === nav.title ? "text-white" : "text-dimWhite"
          } ${index === navLinks.length -1 ? "mr-0" :"mr-10"}`} onClick ={() => setActive(nav.title)}>
              <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
          <span>
            {toggle ? <RiCloseLine className='w-[28px] h[28px] text-white' onClick={() =>setToggle(!toggle)}/> :  <RiMenu3Line className='w-[28px] h[28px] text-white' onClick={() =>setToggle(!toggle)}/>}
          </span>
      </div>

      <div className={`${
        !toggle ? "hidden" : " flex"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[1400px] rounded-xl sidebar`}>
           <ul className='flex items-start justify-end flex-1'>
        {navLinks.map((nav,index) => (
            <li key={nav.id} className= {`cursor-pointer font-normal font-poppins text-[16px] 
              ${
                active === nav.title ? "text-white" : "text-dimWhite"
              } ${index === navLinks.length -1 ? "mr-0" :"mr-10"}`} onClick ={() => setActive(nav.title)}>
                  <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
            ))}
          </ul>
      </div>
    </nav>
  )
}

export default Navbar