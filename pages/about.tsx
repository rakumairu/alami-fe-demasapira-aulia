import Layout from 'components/layout/Layout'
import About from 'components/ui/About'
import React from 'react'


const AboutPage = () => {
    return (
        <Layout
            meta={{
                title: 'About',
                description: 'This is about page'
            }}
        >
            <div className="container px-5">
                <About />
            </div>
        </Layout>
    )
}

export default AboutPage
