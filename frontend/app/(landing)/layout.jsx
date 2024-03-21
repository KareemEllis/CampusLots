import Header from './Header'
import Footer from './Footer'

export default async function LandingLayout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}
