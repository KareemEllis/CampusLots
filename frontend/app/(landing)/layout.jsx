import Header from './Header'

export default async function LandingLayout({ children }) {
    return (
        <>
            <Header />
            {children}
        </>
    )
}
