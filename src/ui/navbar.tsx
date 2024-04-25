import Image from "next/image"

export const NavBar = () => {
  return (
    <nav className="flex items-center justify-around px-24 py-12">
      <Image src={''}  alt="FD logo" />
      <ul className="[&>li]:capitalize flex gap-12">
        <li>inicio</li>
        <li>conocimientos</li>
        <li>proyectos</li>
        <li>contacto</li>
      </ul>
    </nav>
  )
}