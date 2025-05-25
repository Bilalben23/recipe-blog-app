import CategoryWrapper from '@components/ui/category/CategoryWrapper'
import AboutSection from '@components/ui/home/AboutSection'
import CompaniesLogos from '@components/ui/home/CompaniesLogos'
import FeaturedSection from '@components/ui/home/FeaturedSection'
import Hero from '@components/ui/home/Hero'
import LatestRecipes from '@components/ui/home/LatestRecipes'
import Newsletter from '@components/ui/home/Newsletter'
import Subscription from '@components/ui/home/Subscription'
import { useEffect } from 'react'

export default function HomePage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='container mx-auto'>
            <Hero />
            <CategoryWrapper />
            <FeaturedSection />
            <LatestRecipes />
            <Newsletter />
            <AboutSection />
            <CompaniesLogos />
            <Subscription />
        </div>
    )
}
