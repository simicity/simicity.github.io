import './../index.css'
import { workExperienceData } from '../utils/data/workExperienceData.ts'
import { tagTextColor } from '../utils/tagTextColor.ts'
import { ArrowUpRightIcon } from "../icons/ArrowUpRightIcon"

export default function WorkExperience() {
  return (
    <main className='mb-10'>
      <h1 className='hero-style text-lg font-bold mb-5'>Experience</h1>
      <div className="">
        {workExperienceData.map(({title, description, period, url, tags}) => (
          <div className="sm:flex items-start" key={title}>
            <div className="text-sm text-gray-500 w-40">
              {period}
            </div>
            <div className="max-w-[300px] md:max-w-[450px]">
              <a target="_blank" href={url} className="group inline-flex items-center space-x-2">
                <span className='text-sm font-bold'>{title}</span>
                <ArrowUpRightIcon size={"11px"} />
              </a>
              <p className='mb-2 text-xs'>
                {description}
              </p>
              <div className='flex justify-start mb-5'>
                {tags?.map(tag => (
                  <p key={title + " " + tag} className={`text-xs font-semibold rounded-full bg-slate-900 dark:bg-sky-900 ${(tagTextColor as any)[tag]} mr-1.5 px-2 py-0.5`}>{tag}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}