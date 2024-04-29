'use client';

import Image from "next/image"
import NavbarItem from "./item";

const navbarItems : {name: string, href?: string}[] = [
  {
    name: 'experiencia'
  },
  {
    name: 'conocimientos'
  },
  {
    name: 'contacto'
  }
]

export const NavBar = () => {
  
  return (
    <nav className="sticky top-0 min-w-full backdrop-blur-sm flex items-center justify-between py-8 z-50">
      <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' }) } className="flex items-center gap-1 cursor-pointer">
        <Image src="next.svg" width={40} height={40}  alt="FD logo" />
        <span className="font-thin italic font-mono">fd</span>
      </div>
      <ul className="[&>li]:capitalize [&>li]:cursor-pointer flex gap-12 relative">
        {navbarItems.map((item, index) => (
          <NavbarItem key={index} name={item.name} />
        ))}
      </ul>
    </nav>
  )
}