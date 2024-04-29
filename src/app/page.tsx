import Section from "@/ui/section";
import { Highlight } from "@/ui/minors";
import { GitHubIcon, LinkedinIcon } from "@/ui/icons/icons";
import Project from "@/ui/project";
import Skill from "@/ui/skill";
import Image from "next/image";
import ContactForm from "@/ui/contact-form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Section name="inicio" className="py-20 space-y-8">
        <div className="flex flex-col items-center">
          <h1 className="text-8xl font-bold bg-gradient-to-r from-indigo-400 to-indigo-700 text-transparent bg-clip-text">Franco Duarte</h1>
          <p className="font-light text-lg border-b-2 border-slate-200/10">
            <Highlight>Estudiante</Highlight> Ingenieria en Sistemas de Informacion || <Highlight>Desarrollador</Highlight> Web Full Stack, preferencia backend.
          </p>
        </div>
        <div className="max-w-2xl rounded-md backdrop-blur-sm bg-slate-400/15 p-6 border-[.5px] border-slate-200/15">
          <p className="text-pretty font-light">
            Hola, soy Franco A. Duarte, estudiante de 4to año y desarrollador web con <Highlight>+1 año</Highlight> de experiencia construyendo aplicaciones web.
            De lo que va mi trayecto, tuve la oportunidad de atravesar diversas areas, desde el desarrollo de aplicaciones web, hasta la <Highlight>administracion</Highlight> de bases de datos.
            <Highlight>Continuamente exploro</Highlight> nuevas tecnologias y practicas de desarrollo para mejorar mis habilidades y conocimientos.
            <br />
            <br />
            Mi <Highlight>objetivo</Highlight> es el crecimiento personal y profesional, y la creacion de soluciones que aporten un valor unico.
          </p>
        </div>
        <div className="flex items-center gap-5">
          <GitHubIcon />
          <LinkedinIcon />
        </div>
      </Section>
      <Section name="experiencia">
        <h2 className="text-7xl font-bold bg-gradient-to-r from-indigo-400 to-indigo-700 text-transparent bg-clip-text">
          Experiencia
        </h2>
        <div className="grid grid-cols-2 gap-5 w-full mt-12">
          <Project
            company="T&T S.H."
            name="TyTSys - Gestion de Stock"
            time="2023 - 2024"
            role="Frontend - Backend Developer"
            description={
              <ul className="list-disc my-5 ml-10">
                <li>
                  <Highlight>Desarrollo</Highlight> de la aplicacion web
                </li>
                <li>
                  <Highlight>Implementacion</Highlight> de la base de datos
                </li>
                <li>
                  Mantenimiento y soporte
                </li>
                <li>
                  Capacitacion de usuarios
                </li>
              </ul>
            }
            technologies={["Tecnologia 1", "Tecnologia 2", "Tecnologia 3"]}
            github="https://github.com"
            website="https://website.com"
          />
          <Project
            name="VerboTranslations"
            company="Truware"
            time="2024 - Actualidad"
            role="Backend Developer"
            description={
              <ul className="list-disc my-5 ml-10">
                <li>
                  <Highlight>Desarrollo</Highlight> de nuevas funcionalidades
                </li>
                <li>
                  <Highlight>Correccion</Highlight> de bugs
                </li>
                <li>
                  <Highlight>Migracion</Highlight> de tecnologias
                </li>
                <li>
                  <Highlight>Optimizacion</Highlight> de la aplicacion
                </li>
              </ul>
            }
            technologies={["Tecnologia 1", "Tecnologia 2", "Tecnologia 3"]}
            github="https://github.com"
            website="https://website.com"
          />
          <Project
            company="Proximamente..."
          />
        </div>
      </Section>
      <Section name="conocimientos">
        <h2 className="text-7xl font-bold bg-gradient-to-r from-indigo-400 to-indigo-700 text-transparent bg-clip-text">
            Conocimientos
        </h2>
        <div className="grid grid-cols-3 gap-12 w-full mt-12">
          <Skill title="Frontend">
            <div className="flex flex-wrap gap-5 justify-evenly [&>div]:flex [&>div]:items-center [&>div]:gap-2 [&>div]:my-2">
              <div>
                <Image src="html.svg" alt="Sass" width={50} height={50} />
                <span>HTML5</span>
              </div>
              <div>
                <Image src="css.svg" alt="CSS" width={50} height={50} />
                <span>CSS3</span>
              </div>
              <div>
                <Image src="javascript.svg" alt="JavaScript" width={50} height={50} />
                <span>JavaScript</span>
              </div>
              <div>
                <Image src="typescript.svg" alt="TypeScript" width={50} height={50} />
                <span>TypeScript</span>
              </div>
              <div>
                <Image src="tailwindcss.svg" alt="Tailwind CSS" width={50} height={50} />
                <span>Tailwind CSS</span>
              </div>
              <div>
                <Image src="react.svg" alt="React" width={50} height={50} />
                <span>React</span>
              </div>
              <div>
                <Image src="angular.svg" alt="Angular" width={50} height={50} />
                <span>Angular</span>
              </div>
            </div>
          </Skill>
          <Skill title="Backend">
          <div className="flex flex-wrap gap-5 justify-evenly [&>div]:flex [&>div]:items-center [&>div]:gap-2 [&>div]:my-2">
            <div>
              <Image src="net.svg" alt=".NET" width={50} height={50} />
              <span>.NET</span>
            </div>
            <div>
              <Image src="express.svg" alt="Express" width={50} height={50} />
              <span>Express</span>
            </div>
            <div>
              <Image src="nextjs.svg" alt="Next.js" width={50} height={50} />
              <span>Next.js 14</span>
            </div>
            <div>
              <Image src="docker.svg" alt="Docker" width={50} height={50} />
              <span>Docker</span>
            </div>
          </div>
          </Skill>
          <Skill title="Base de datos">
            <div className="flex flex-wrap gap-5 justify-evenly [&>div]:flex [&>div]:items-center [&>div]:gap-2 [&>div]:my-2">
              <div>
                <Image src="mysql.svg" alt="MySQL" width={50} height={50} />
                <span>MySQL</span>
              </div>
              <div>
                <Image src="sqlserver.svg" alt="SQL Server" width={50} height={50} />
                <span>SQL Server</span>
              </div>
              <div>
                <Image src="postgresql.svg" alt="PostgreSQL" width={50} height={50} />
                <span>PostgreSQL</span>
              </div>
              <div>
                <Image src="mongodb.svg" alt="MongoDB" width={50} height={50} />
                <span>MongoDB</span>
              </div>
            </div>
          </Skill>
          <Skill title="Herramientas">
            <div className="flex flex-wrap gap-5 justify-evenly [&>div]:flex [&>div]:items-center [&>div]:gap-2 [&>div]:my-2">
              <div>
                <Image src="git.svg" alt="Git" width={50} height={50} />
                <span>Git</span>
              </div>
              <div>
                <Image src="postman.svg" alt="Postman" width={50} height={50} />
                <span>Postman</span>
              </div>
              <div>
                <Image src="slack.svg" alt="Slack" width={50} height={50} />
                <span>Slack</span>
              </div>
              <div>
                <Image src="jira.svg" alt="Jira" width={50} height={50} />
                <span>Jira</span>
              </div>
            </div>
          </Skill>
          <Skill title="Metodologias">
            <div className="flex flex-wrap gap-5 justify-evenly [&>div]:flex [&>div]:items-center [&>div]:gap-2 [&>div]:my-2">
              <div>
                <Image src="scrum.svg" alt="Scrum" width={50} height={50} />
                <span>Scrum</span>
              </div>
            </div>
          </Skill>
          <Skill title="Habilidades">
            <div className="flex flex-wrap gap-5 justify-evenly [&>div]:flex [&>div]:items-center [&>div]:gap-2 [&>div]:my-2">
              <div>
                <span>Capacidad analitica</span>
              </div>
              <div>
                <span>Resolucion de problemas</span>
              </div>
              <div>
                <span>Creatividad</span>
              </div>
              <div>
                <span>Adaptacion rapida</span>
              </div>
              <div>
                <span>Trabajo en equipo</span>
              </div>
            </div>
          </Skill>
        </div>
      </Section>
      <Section name="contacto">
        <h2 className="text-7xl font-bold bg-gradient-to-r from-indigo-400 to-indigo-700 text-transparent bg-clip-text">
          Contacto
        </h2>
        <div className="flex flex-col mt-12">
          <p className="font-light text-lg mb-5">
            Si estas interesado en mi perfil, no dudes en contactarme.
          </p>
          <ContactForm />
        </div>
      </Section>
    </main>
  );
}
