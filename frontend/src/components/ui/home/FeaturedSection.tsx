import pizza from '@assets/pizza.jpeg'

export default function FeaturedSection() {
    return (
        <section className="flex flex-col items-center justify-between my-10 md:flex-row gap-7 md:px-5 sm:my-15 md:my-20 md:gap-20 lg:px-10">
            <div className="relative flex-1 w-full">
                <img
                    src={pizza}
                    loading='lazy'
                    alt="Pineapple and Smoked Jackfruit Pizza"
                    className="object-cover w-full rounded-md"
                />
                <span className="absolute top-2 md:top-4  left-3 md:left-5 bg-white text-secondary px-3 py-1.5 rounded-md text-xs md:text-sm lg:text-base font-semibold uppercase tracking-widest shadow-sm">
                    Featured Recipe
                </span>
            </div>

            <div className="flex-1">
                <h1 className="text-3xl font-bold text-secondary sm:text-5xl sm:leading-snug">
                    Pineapple & Smoked Jackfruit Pizza
                </h1>
                <p className="mt-4 text-lg text-secondary/80">
                    A bold twist on a classic favorite—this tropical delight combines smoky jackfruit and tangy pineapple on a crispy crust. Perfect for plant-based foodies and pizza lovers alike.
                </p>

                <div className="mt-7 md:mt-10">
                    <button
                        type='button'
                        className="cursor-pointer rounded-md px-8 py-3 font-medium border border-[#9c702a] text-secondary hover:text-white hover:bg-btnColor transition-colors duration-300"
                    //  aria-label="View Pineapple & Smoked Jackfruit Pizza recipe"
                    >
                        View Recipe
                    </button>
                </div>
            </div>
        </section>
    )
}
