"use client"
import { useState } from "react"
import HumburgerMenu from '../images/more.png'
import Link from "next/link"
import Image from "next/image"

const Menulinks = () => {
    const [open, setOpen] = useState(false);
    

    return (
        <div className="">
            <Image src={HumburgerMenu}
            alt=""
            width={28}
            height={28}
            className="cursor-pointer"
            onClick={() => setOpen((prev) => !prev)}
            />
            {
                open && (
                    <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
                        <Link className='ml-10' href="/">Home</Link>
                        <Link className='ml-10' href="/About">About</Link>
                        <Link className='ml-10' href="/Opportunities">Opportunities</Link>
                        <Link className='ml-10' href="/Lifestyle">Lifestyle</Link>
                        <Link className='ml-10' href="/Stories">Stories</Link>
                        <Link className='ml-10' href="/Guide">Guide</Link>
                        <Link className='ml-10' href="/Connect">Connect</Link>
                        <Link className='ml-10' href="/Connect">Resources</Link>
                    </div>
                )
            }
        </div>
    )
}

export default Menulinks;