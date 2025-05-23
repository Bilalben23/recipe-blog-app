import CategoryWrapper from '@components/ui/category/CategoryWrapper'
import FeaturedSection from '@components/ui/FeaturedSection'
import Hero from '@components/ui/Hero'

export default function HomePage() {

    return (
        <div className='container mx-auto'>
            <Hero />
            <CategoryWrapper />
            <FeaturedSection />
        </div>
    )
}
