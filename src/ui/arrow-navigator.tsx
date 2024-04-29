import { ArrowDown, ArrowUp} from "./icons/arrows";

export default function ArrowNavigator() {

  return (
    <>
      <div className="fixed bottom-5 left-[50%] z-50 animate-bounce bg-slate-100/15 rounded-[100%] p-2 cursor-pointer">
        <ArrowDown className="text-white" />
      </div>
    </>
  )
}