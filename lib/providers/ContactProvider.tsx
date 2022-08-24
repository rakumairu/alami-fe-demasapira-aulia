import React, { createContext, useContext, useState } from 'react'

interface IProps {
    children: React.ReactNode
}

interface ContactProviderState {
    phoneNumber: string
    setPhoneNumber: React.Dispatch<React.SetStateAction<string>>
}

/**
 * Provide the phone number as a state in app scope
 */
export const ContactProvider = ({children}: IProps) => {
    const [phoneNumber, setPhoneNumber] = useState('021-12345678')

    return (
        <Context.Provider value={{phoneNumber, setPhoneNumber}}>
            { children }
        </Context.Provider>
    )
}

const Context = createContext<ContactProviderState>({
    phoneNumber: '',
    setPhoneNumber: () => {
        // do nothing
    },
})

export const ContactConsumer = Context.Consumer
export const ContactContext = Context
export const useContact = () => useContext(Context)
