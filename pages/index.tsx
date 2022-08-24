import Layout from "components/layout/Layout"
import About from "components/ui/About"
import Contact from "components/ui/Contact"
import Phone from "components/ui/Phone"
import React from "react"

const HomePage = () => {
    return (
        <Layout
            meta={{
                title: 'Homepage',
                description: 'This is the homepage',
            }}
        >
            <div className="container text-zinc-900 px-5">
                <h1 className="text-2xl md:text-3xl font-semibold text-center tracking-tight mb-5 md:mb-10">This is Homepage</h1>
                <About />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <Phone />
                    <Contact />
                </div>
            </div>
        </Layout>
    )
}

export default HomePage