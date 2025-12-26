
import LogoSm from "@/public/assets/images/logo-small.svg"
import LogoLg from "@/public/assets/images/logo-large.svg"
import Image from "next/image"
import Link from "next/link"

import TrophyIcon from "@/public/assets/images/icon-personal-best.svg"

const Navbar = () => {
  return (
    <nav className='w-full flex items-center justify-between'>
      <Link href={"/"}>
        <Image className="md:hidden" src={LogoSm} alt="logo" width={32} height={32}/>

        <Image className="hidden md:block" src={LogoLg} alt="logo" width={266} height={40}/>
      </Link>

      <div className="flex items-center gap-2">
        <Image src={TrophyIcon} width={18} alt="" height={18}/>

        <p className="text-neutral-400 flex gap-1">
          <span className="hidden md:block">Personal</span> 

          <span className="capitalize md:lowercase">best:</span>

          <span className="text-neutral-0">92 WPM</span>
          </p>
      </div>
    </nav>
  )
}

export default Navbar