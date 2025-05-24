import CategoryWrapper from '@components/ui/category/CategoryWrapper'
import AboutSection from '@components/ui/home/AboutSection'
import FeaturedSection from '@components/ui/home/FeaturedSection'
import Hero from '@components/ui/home/Hero'
import LatestRecipes from '@components/ui/home/LatestRecipes'
import Newsletter from '@components/ui/home/Newsletter'

export default function HomePage() {

    return (
        <div className='container mx-auto'>
            <Hero />
            <CategoryWrapper />
            <FeaturedSection />
            <LatestRecipes />
            <Newsletter />
            <AboutSection />
        </div>
    )
}
