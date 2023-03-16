import React from 'react'
import SideBar from './sidebar'
import Header from "./Header";


type Props = {
    nav: JSX.Element
    header: JSX.Element
    children: JSX.Element | JSX.Element[]
}


const Layout = ({ nav, header, children }: Props) => {
    return (
        <>
            <header>{header}</header>
            <div className='flex relative overflow-x-auto'>
                <nav className='fixed z-[1] min-w-[320px]'>{nav}</nav>
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