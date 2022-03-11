import React, { } from "react";
import Topbar from "./components/topbar/Topbar";

interface Ilayout {
    children: React.ReactNode;
}

const Layout = ({ children }: Ilayout): JSX.Element => {
    return (
        <>
            <Topbar />
            <main>{children}</main>
        </>
    )
}
export default Layout;

