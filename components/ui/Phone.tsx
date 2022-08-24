import { useContact } from 'lib/providers/ContactProvider'
import React, { useState } from 'react'
import { stringNumber } from 'utils/helper'


const Phone = () => {
    const { setPhoneNumber } = useContact()

    const [state, setState] = useState('')

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = stringNumber(e.target.value)
        
        setState(value)
    }

    const onSubmit = () => {
        // check if the state is empty
        if (state === '') return

        // set the phone number for the contact component
        setPhoneNumber(state)

        // reset the state
        setState('')
    }

    return (
        <div className='w-full flex flex-col items-start md:items-center text-zinc-900 md:px-8'>
            <label className='text-sm font-semibold mb-1'>
                No Telp
            </label>
            <input
                type="text"
                value={state}
                onChange={onInputChange}
                className="border border-gray-400 rounded px-2 py-1 focus:border-teal-800 color-transition mb-2"
            />
            <button
                onClick={onSubmit}
                className='bg-teal-600 text-white color-transition md:hover:bg-teal-700 text-xs font-semibold uppercase px-2 py-1 rounded'
            >
                Go
            </button>
        </div>
    )
}

export default Phone
