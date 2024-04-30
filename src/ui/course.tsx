type ProjectProps = {
  name?: string;
  company?: string;
  time?: string;
  role?: string;
  description?: any;
};


export default function Course({ name, company, description, time, role }: ProjectProps) {
  return (
    <article className="rounded-md backdrop-blur-sm bg-slate-400/15 p-6 border-[.5px] border-slate-200/15">
      <header className="flex items-center gap-2">
        <h3 className={`text-xl font-bold bg-gradient-to-r from-indigo-300 to-slate-300 text-transparent bg-clip-text`}>
          {name}
        </h3>
        <span className="rounded-full px-3 py-1 bg-indigo-600/15">
          {role}
        </span>
      </header>
      <span className="text-slate-400 text-sm flex">{time} | {company}</span>
      <div className="mt-5 text-start">
        {description}
      </div>
    </article>
  )
}