import './../index.css'
import profile from '/profile.png'

export default function Hero() {

  return (
    <>
      <div className="flex flex-col items-center my-10">
        <img
          className="w-24 h-24 object-cover rounded-full"
          src={profile}
          alt="profile picture"
        />
        <p className='hero-style font-semibold text-2xl mt-5'>Miho Peña</p>
        <p className='hero-style font-extralight'>Software Engineer / Firmware Engineer</p>
      </div>
    </>
  )
}
