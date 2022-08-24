import Head from 'next/head'
import React from 'react'
import Nav from './Nav'

interface LayoutProps {
    meta: {
        title: string
        description: string
    }
    children: React.ReactNode
}

const Layout = ({ meta, children }: LayoutProps) => {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>{meta.title}</title>
                <meta name="title" content={meta.title} />
                <meta name="description" content={meta.description} />
                <meta property="og:site_name" content="Female Daily" />
                <meta property="og:url" content="femaledaily.com" />
                <meta property="og:title" content={meta.title} />
                <meta property="og:description" content={meta.description} />
                <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
            
                <link rel="canonical" href="/" />
            </Head>
            <Nav />
            <div className="w-full py-4 md:py-8">
                { children }
            </div>
        </>
    )
}

export default Layout
