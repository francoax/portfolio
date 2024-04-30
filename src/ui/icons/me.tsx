"use client";

import Image from "next/image"

export default function MeLogo() {
  return (
    <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' }) } className="flex items-center gap-1 cursor-pointer">
      <Image src="next.svg" width={40} height={40}  alt="FD logo" />
      <span className="font-thin italic font-mono">fd</span>
    </div>
  )
}