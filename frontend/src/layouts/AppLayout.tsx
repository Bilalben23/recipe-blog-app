import Footer from '@components/ui/Footer'
import Header from '@components/ui/Header'
import { Outlet } from 'react-router-dom'

export default function AppLayout() {
    return (
        <>
            <Header />
            <main className='mb-12'>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
