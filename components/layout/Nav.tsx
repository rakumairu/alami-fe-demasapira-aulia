import Link from 'next/link'
import React from 'react'


const Nav = () => {
    return (
        <div className="w-full bg-white h-[64px] md:h-[80px] shadow">
            <div className="container px-5 h-full flex flex-col md:flex-row items-start justify-between text-zinc-900 py-2 md:py-4">
                <p className='text-xl md:text-3xl font-semibold md:self-center tracking-tight'>
                    Website Test
                </p>
                <div className="self-end divide-zinc-900 divide-x > *">
                    <Link href="/">
                        <a className='text-sm md:text-base px-3 font-semibold color-transition md:hover:text-teal-800'>
                            Homepage
                        </a>
                    </Link>
                    <Link href="/about">
                        <a className='text-sm md:text-base px-3 font-semibold color-transition md:hover:text-teal-800'>
                            About
                        </a>
                    </Link>
                    <Link href="/contact">
                        <a className='text-sm md:text-base px-3 font-semibold color-transition md:hover:text-teal-800'>
                            Contact
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Nav
