"use client";

import { FaGithub, FaReddit } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="bg-[#0D1117] text-gray-400 text-xs py-2 border-t border-gray-800 px-4 py-2 flex justify-between">
      <div className="flex gap-2">
        <div>Find me in: </div>
        <div className="flex gap-3">
          <a href='https://github.com/ShibamDas007' target='_blank' className='cursor-pointer'>
            <FaGithub/>
          </a>
          <a href='https://www.reddit.com/' target='_blank' className='cursor-pointer'>
            <FaReddit/>
          </a>
        </div>
      </div>
      <div className=''>© {new Date().getFullYear()}</div>
    </div>
  );
}