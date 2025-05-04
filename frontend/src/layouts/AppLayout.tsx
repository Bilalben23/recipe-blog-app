import Header from '@components/ui/Header'
import { Outlet } from 'react-router-dom'

export default function AppLayout() {
    return (
        <>
            <Header />
            <main className='p-5'>
                <Outlet />
            </main>
        </>
    )
}
