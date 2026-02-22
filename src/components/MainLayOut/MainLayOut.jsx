import ScrollToTop from "../layout/ScrollToTop"
import Header from "../layout/Header"
import Footer from "../layout/Footer"
import { Outlet } from "react-router-dom"

export default function MainLayOut() {
    return (
        <>
            <ScrollToTop />
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}