import { navLinks } from '@/app/utils/utils';
import { link } from 'fs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

function HeroSection() {
    const arr = Array(4).fill(0);
  return (
     <section className="relative h-full w-full">
        <div className="absolute w-full h-[100vh] top-0 flex justify-evenly z-[-1]">
      {arr.map((_, i) =>{
        return (
          <div key={i} className="relative w-[1px] h-full bg-2">
            <span className="absolute bottom-0 w-2 h-2 bg-colour-2 left-0 translate-x-[-50%] rounded-full"></span>
          </div>
        );
      })}
    </div>

    <nav className="px-[18rem] fixed md:relative top-0 z-50 w-full shadow-md md:shadow-none flex justify-between bg-1
      border-b border-colour-1">
        <div className="flex items-center gap-2 py-5 lg:py-0">
             <Image src="/mobile-logo.png"
               alt="logo"
               width={30} 
               height={30}
              />
              <h1>Marginal Records</h1> 
        </div>
        <ul className="hidden lg:flex items-center gap-9 text-white font-medium">
          {navLinks.map((link, i) => {
            return (
            <li key={i}>
              <Link href={link.url} className="py-4">
              {link.name}
              </Link>
            </li>
            );
          })}
        </ul>
        <button className="hidden lg:inline-block py-6 px-10 text-2 text-gray-400 border-x border-colour-1 hover:bg-2 transition-all duration-200 ease-in-out"></button>
      </nav>
    </section>
  );
}

export default HeroSection;