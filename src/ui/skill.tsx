type SkillsProps = {
  title: string;
  children?: React.ReactNode;
}

export default function Skill({ title, children }: SkillsProps) {
  return (
    <div className="text-center rounded-md backdrop-blur-sm bg-slate-400/15 p-6 border-[.5px] border-slate-200/15 min-w-96 hover:scale-105 transition-all duration-200">
      <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-300 to-slate-300 text-transparent bg-clip-text">{title}</h3>
      {children}
    </div>
  )
}