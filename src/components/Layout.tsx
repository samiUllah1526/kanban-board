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
            <div className='flex'>
                <nav className='grow-0 shrink-0 basis-80'>{nav}</nav>
                <div className='flex-1'>
                    <header>{header}</header>
                    {children}
                </div>
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