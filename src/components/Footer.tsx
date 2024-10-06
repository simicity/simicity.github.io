import { ArrowUpRightIcon } from "../icons/ArrowUpRightIcon"
import { GithubIcon } from "../icons/GithubIcon"
import { LinkedInIcon } from "../icons/LinkedInIcon"
// import { ResumeIcon } from "../icons/ResumeIcon"
import './../index.css'

export default function Footer() {
  return (
    <div className="mt-20 mb-10 w-full hero-style">
      <hr className="w-16 mx-auto border-1 border-slate-600"/>
      <ul className='text-sm font-bold dark:text-[#5897A6] space-y-4 my-10'>
          <li>
            <a target="_blank" href="https://github.com/simicity" className="group inline-flex items-center space-x-2">
              <GithubIcon width="18px" height="18px" className="group-hover:fill-purple-600 transition-colors duration-300" />
              <span>GitHub</span>
              <ArrowUpRightIcon size={"11px"} />
            </a>
          </li>

          <li>
            <a target="_blank" href="https://www.linkedin.com/in/mihoshimizu/" className="group inline-flex items-center space-x-2">
              <LinkedInIcon width="18px" height="18px" className="group-hover:fill-blue-600 transition-colors duration-300" />
              <span>LinkedIn</span>
              <ArrowUpRightIcon size={"11px"} />
            </a>
          </li>

          {/* <li>
            <a target="_blank" href="" className="group inline-flex items-center space-x-2">
              <ResumeIcon width="18px" height="18px" className="group-hover:fill-green-600 transition-colors duration-300" />
              <span>Resume</span>
              <ArrowUpRightIcon size={"11px"} />
            </a>
          </li> */}
      </ul>
      <p className="quote-style sm:text-2xl text-gray-500 text-center mt-20">{"Truth can only be found in one place: the code. – Robert C. Martin"}</p>
    </div>
  )
}