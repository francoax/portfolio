import { PaperIcon } from "./icons/icons";
import MeLogo from "./icons/me";
import { Highlight } from "./minors";

export default function Footer() {
  return (
    <footer className="backdrop-blur-sm h-[55vh] mt-[50vh] text-slate-400 relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-b from-transparent to-slate-400/25"></div>
      <div className="flex flex-col gap-y-14 p-12">
        <div className="space-y-5">
          <p className="uppercase text-sm tracking-wider">Cualquier consulta es bienvenida</p>
          <h3 className="text-5xl font-bold bg-gradient-to-r from-indigo-400 to-indigo-700 text-transparent bg-clip-text">
            Empieza a trabajar conmigo
          </h3>
          <div className="flex items-center gap-2 text-2xl tracking-wider">
            <p>Contactar</p>
            <PaperIcon />
          </div>
        </div>
        <div className="flex gap-5">
          <div>
            <MeLogo />
            <p>Enfoque en el valor de la solucion del problema.</p>
            <div className="self-end">
              <p>© {new Date().getFullYear()} Franco Duarte</p>
              <p className="opacity-45">Desarrollado con <Highlight>Next.js 14</Highlight></p>
            </div>
          </div>
          <div className="flex-1 flex items-center px-5">
            <ul className="w-full flex justify-end gap-5">
              <li>
                Inicio
              </li>
              <li>
                Experiencia
              </li>
              <li>
                Conocimientos
              </li>
              <li>
                Contacto
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}