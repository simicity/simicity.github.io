import './../index.css'
import { projectData } from './projectData.ts'
import { CodeIcon } from '../icons/CodeIcon.tsx'
import { LinkIcon } from '../icons/LinkIcon.tsx'
// Attribute: http://www.freepik.com">Designed by rawpixel.com / Freepik

const tagTextColor = {
  'JavaScript': 'text-yellow-300',
  'TypeScript': 'text-blue-400',
  'React': 'text-cyan-300',
  'Node.js': 'text-green-600',
  'Next.js': 'text-zinc-300',
  'Python': 'text-purple-400'
}

export default function Projects() {
  return (
    <main className='mt-4 p-10 pt-20'>
      <div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2">
        <div className='w-full col-span-full text-center'>
          <h1 className='font-black text-4xl text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-orange-500'>{"<Projects />"}</h1>
        </div>
        {projectData.map(({title, description, image, tags, repo, url}) => (
          <a target="_blank" href={url ? url : repo} key={title} className="project-item flex flex-col justify-between max-w-[360px] rounded-3xl p-5 shadow-lg bg-white dark:bg-slate-900 text-black dark:text-white font-medium">
            <div>
              <div className='flex justify-center md:justify-between mb-1'>
                <h2 className={`text-xl font-bold my-auto`}>
                  {title}
                </h2>
                <div>
                  <ul className='flex justify-center lg:justify-start'>
                    <li className='ml-2'>
                      <div className='has-tooltip'>
                        <button onClick={() => window.open(repo, "_blank")} className='rounded-full p-2 shadow-sm bg-slate-300 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600'>
                          <CodeIcon size={"20px"} />
                        </button>
                        <span className='tooltip rounded shadow-sm px-2 py-1 my-auto bg-gray-100 dark:bg-gray-800 text-xs mt-10 -translate-x-14'>
                          Source Code
                        </span>
                      </div>
                    </li>
                    {url && (
                      <li className='ml-2'>
                        <div className='has-tooltip'>
                          <button onClick={() => window.open(url, "_blank")} className='rounded-full p-2 shadow-sm bg-slate-300 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600'>
                            <LinkIcon size={"20px"} />
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
              <div className='flex justify-center lg:justify-start mb-1'>
                {tags?.map(tag => (
                  <p key={title + " " + tag} className={`text-xs rounded-md bg-slate-900 dark:bg-sky-900 ${(tagTextColor as any)[tag]} mr-1.5 mb-1 px-1.5 py-0.5`}>{tag}</p>
                ))}
              </div>
              <p className={`mb-3 max-w-[400px] text-sm font-light`}>
                {description}
              </p>
            </div>
            <div className='overflow-hidden rounded-lg max-w-[360px] h-[140px]'>
              <img src={image} alt={title} className='object-cover' />
            </div>
          </a>
        ))}
      </div>
    </main>
  )
}