import { useContact } from 'lib/providers/ContactProvider'
import React from 'react'


const Contact = () => {
    const { phoneNumber } = useContact()

    return (
        <div className='md:px-8 text-zinc-900 font-medium text-sm md:text-base'>
            <p>
                PT. ABC
            </p>
            <p>
                Jl. Setiabudi No.33
            </p>
            <p>
                {phoneNumber}
            </p>
        </div>
    )
}

export default Contact
