import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='flex justify-center  items-center mt-20 '>
      <nav className="flex items-center justify-between w-[1027px] h-[84px] border-2 border-white rounded-[20px] bg-black px-6">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <span className="text-white ">ROBOTIKA</span>
          <span className="text-robotika"> UTY</span>
        </div>

        {/* Menu */}
        <ul className="flex space-x-8 text-white text-lg">
          <li className="relative">
            <Link href="#" className="flex flex-col items-center">
              Home
              <span className="w-6 h-[3px] bg-orange-500 rounded-full mt-1"></span>
            </Link>
          </li>
          <li className="relative group">
            <Link href="#" className="flex items-center">
              Lomba
              <span className="ml-1">▼</span>
            </Link>
            {/* Dropdown */}
            <ul className="absolute left-0 mt-2 w-32 bg-black border border-white rounded-md hidden group-hover:block">
              <li className="p-2 hover:bg-gray-800">
                <Link href="#">Event 1</Link>
              </li>
              <li className="p-2 hover:bg-gray-800">
                <a href="#">Event 2</a>
              </li>
            </ul>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar