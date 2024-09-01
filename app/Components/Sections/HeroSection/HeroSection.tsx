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
    </section>
  );
}

export default HeroSection;