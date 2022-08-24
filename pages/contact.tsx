import Layout from 'components/layout/Layout'
import Contact from 'components/ui/Contact'
import React from 'react'


const ContactPage = () => {
    return (
        <Layout
            meta={{
                title: 'Contact',
                description: 'This is contact page',
            }}
        >
            <div className="container px-5">
                <Contact />
            </div>
        </Layout>
    )
}

export default ContactPage
