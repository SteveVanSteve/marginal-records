import { search } from "@/app/utils/icons";
import { navLinks } from "@/app/utils/utils";
import { link } from "fs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function HeroSection() {
  const arr = Array(4).fill(0);
  return (
    <section className="relative h-full w-full">
      <div className="absolute w-full h-[100vh] top-0 flex justify-evenly z-[-1]">
        {arr.map((_, i) => {
          return (
            <div key={i} className="relative w-[1px] h-full bg-2">
              <span className="absolute bottom-0 w-2 h-2 bg-colour-2 left-0 translate-x-[-50%] rounded-full"></span>
            </div>
          );
        })}
      </div>

      <nav
        className="px-[18rem] fixed md:relative top-0 z-50 w-full shadow-md md:shadow-none flex justify-between bg-1
      border-b border-colour-1"
      >
        <div className="flex items-center gap-2 py-5 lg:py-0">
          <Image
            src="/images/marginal-mawn-trimmed.png"
            alt="logo 1"
            width={30}
            height={30}
            className="rounded-lg"
          />
          <h1>Marginal Records</h1>
        </div>
        <ul className="hidden lg:flex items-center gap-9 text-white font-medium">
          {navLinks.map((link, i) => {
            return (
              <li key={i}>
                <Link href={link.url} className="p-4">
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <button className="hidden lg:inline-block py-6 px-10 text-2xl text-gray-400 border-x border-colour-1 hover:bg-2 transition-all duration-200 ease-in-out">
          {search}
        </button>
      </nav>

      <div>
        <div>
          <h1>Welcome to the Marginal Records website.</h1>
        </div>
        <div>
          <p className="font-medium text-white">
            Marginal Records is small and organic music record label with its
            roots growing from the North East of Ireland. Hopefully you see
            something interesting while you're here.
          </p>
        </div>
        <div>
          <Image
            src="/images/old-marginal-records-logo.png"
            alt="logo 2"
            width={250}
            height={250}
            className="rounded-lg"
          />
          <div>
            <div>
              <h3 className="text-white text-2xl font-semibold">
                No Compromises.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
