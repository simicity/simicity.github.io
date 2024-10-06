import { useState } from 'react'
import './../index.css'
import { projectData } from '../utils/data/projectData.ts'
import { tagTextColor } from '../utils/tagTextColor.ts'
import { CodeIcon } from '../icons/CodeIcon.tsx'
import { LinkIcon } from '../icons/LinkIcon.tsx'
// Attribute: http://www.freepik.com">Designed by rawpixel.com / Freepik

export default function Projects() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSeeMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <main>
      <h1 className='hero-style text-lg font-bold mb-5'>Side Projects</h1>
      <div className="grid gap-5 md:grid-cols-2">
        {projectData.slice(0, !isExpanded ? 4 : projectData.length).map(({title, description, image, tags, repo, url}) => (
          <div key={title} className="project-item flex flex-col justify-between rounded-3xl p-6 shadow-sm bg-white dark:bg-[#012340] text-black dark:text-white">
            <div>
              <div className='flex justify-center md:justify-between'>
                <h2 className='text-sm font-bold'>{title}</h2>
                <div>
                  <ul className='flex justify-center lg:justify-start'>
                    <li className='ml-2'>
                      <div className='has-tooltip'>
                        <button onClick={() => window.open(repo, "_blank")} className='rounded-full p-1.5 shadow-sm bg-slate-300 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600'>
                          <CodeIcon size={"10px"} />
                        </button>
                        <span className='tooltip rounded shadow-sm p-1 my-auto bg-gray-100 dark:bg-gray-800 text-xs mt-10 -translate-x-14'>
                          Source Code
                        </span>
                      </div>
                    </li>
                    {url && (
                      <li className='ml-2'>
                        <div className='has-tooltip'>
                          <button onClick={() => window.open(url, "_blank")} className='rounded-full p-1.5 shadow-sm bg-slate-300 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600'>
                            <LinkIcon size={"10px"} />
                          </button>
                          <span className='tooltip rounded shadow-sm px-2 py-1 my-auto bg-gray-100 dark:bg-gray-800 text-xs mt-10 -translate-x-12'>
                            Live Demo
                          </span>
                        </div>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
              <div className='flex justify-center md:justify-start mb-1'>
                {tags?.map(tag => (
                  <p key={title + " " + tag} className={`text-xs font-semibold rounded-full bg-slate-900 dark:bg-sky-900 ${(tagTextColor as any)[tag]} mr-1.5 px-2 py-0.5`}>{tag}</p>
                ))}
              </div>
              <p className='mb-3 text-xs text-gray-500'>
                {description}
              </p>
            </div>
            <div className='overflow-hidden rounded-lg h-[110px]'>
              <img src={image} alt={title} className='object-cover' />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button
          onClick={toggleSeeMore}
          className="text-sm text-gray-400 dark:text-gray-700 hover:text-gray-500 focus:outline-none"
        >
          {isExpanded ? 'See Less' : 'See More'}
        </button>
      </div>
    </main>
  )
}