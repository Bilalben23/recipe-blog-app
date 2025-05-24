import CategoryWrapper from '@components/ui/category/CategoryWrapper'
import FeaturedSection from '@components/ui/home/FeaturedSection'
import Hero from '@components/ui/home/Hero'

export default function HomePage() {

    return (
        <div className='container mx-auto'>
            <Hero />
            <CategoryWrapper />
            <FeaturedSection />
        </div>
    )
}
