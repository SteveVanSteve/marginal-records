import Image from 'next/image';
import React from 'react'

function HeroSection() {
    const arr = Array(4).fill(0);
  return (
     <section className="relative h-full w-full">
        <div className="absolute w-full h-[100vh] top-0 flex justify-evenly z-[-1]">
      {arr.map((_, i) =>{
        return (
          <div key={i} className="relative w-[1px] h-full bg-orange-500">
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
              <h1>Logo</h1> 
        </div>
      </nav>
    </section>
  );
}

export default HeroSection;