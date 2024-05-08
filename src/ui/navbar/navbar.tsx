import NavbarItem from "./item";
import MeLogo from "../icons/me";

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
    <nav className="sticky top-0 min-w-full backdrop-blur-sm flex items-center justify-between py-4 z-50">
      <MeLogo />
      <ul className="[&>li]:capitalize [&>li]:cursor-pointer flex gap-12 relative">
        {navbarItems.map((item, index) => (
          <NavbarItem key={index} name={item.name} />
        ))}
      </ul>
    </nav>
  )
}