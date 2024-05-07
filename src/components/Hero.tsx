import './../index.css'

export default function Hero() {

  return (
    <>
      <div className="my-10 sm:text-sm text-xs text-center w-4/5 md:w-4/5">
        <p className='sm:text-5xl text-sm hero-style text-[#FF0D9C] dark:text-[#5897A6] mb-5'>{"Welcome to my project showcase!"}</p>
        <p>
          {"I'm Miho, a software engineer who finds joy in building applications that bring ideas to life. 👩🏻‍💻 "}
        </p>
        <p>{"Explore my portfolio to discover a collection of projects that showcase my skills and love for all things code. ✨"}</p>
      </div>
    </>
  )
}
