import React, { Children } from 'react'
import SideBar from './SideBar'
import Header from "./Header";


type Props = {
    nav: JSX.Element
    header: JSX.Element
    children: JSX.Element | JSX.Element[]
}


const Layout = ({ nav, header, children }: Props) => {
    return (
        <>
            <div className='bg-color-bg-dark'>
                <header className='h-16'>{header}</header>
                <nav>{nav}</nav>
                {children}
            </div>
        </>
    )
}


const Main = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    return (
        <>
            <Layout nav={<SideBar />} header={<Header />}>
                {children}
            </Layout>
        </>
    )
}



export default Main