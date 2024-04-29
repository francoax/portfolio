"use client";

import React, { useState } from 'react';

function NavbarItem({ name } : { name: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      onClick={() => {
        const section = document.querySelector(`#${name}`);
        if (section) {
          window.scrollBy({
            top: section.getBoundingClientRect().top - 100,
            behavior: 'smooth'
          })
        }
      }}
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <span className="absolute top-6 bottom-6 font-thin italic font-mono text-slate-500 lowercase">
          {`>fd --go ${name}`}
        </span>
      )}
      <p
        className="text-lg hover:bg-gradient-to-r hover:from-indigo-500 hover:to-indigo-600 hover:font-bold hover:scale-110 hover:text-transparent hover:bg-clip-text transition duration-300"
      >
        {name}
      </p>
    </li>
  );
}

export default NavbarItem;