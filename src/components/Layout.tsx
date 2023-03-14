import React, { Children } from 'react'
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
            <div >
                <nav>{nav}</nav>
                {/* <div>
                    <header className='h-16'>{header}</header>
                    {children}
                </div> */}
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