import Image from "next/image"

export function GitHubIcon() {
  return (
    <Image src="github.svg" alt="" width={35} height={35} />
  )
}

export function LinkedinIcon() {
  return (
    <Image src="linkedin.svg" alt="" width={35} height={35} />
  )
}

export function PaperIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 -rotate-45">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
    </svg>
  )
}