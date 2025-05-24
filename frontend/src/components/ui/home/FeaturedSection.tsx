import pizza from '@assets/pizza.jpeg'

export default function FeaturedSection() {
    return (
        <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:px-5 my-10 sm:my-15 md:gap-20 lg:px-10">
            <div className="flex-1">
                <h2 className="text-3xl font-bold text-secondary sm:text-5xl sm:leading-snug">
                    Pineapple & Smoked Jackfruit Pizza
                </h2>
                <p className="mt-4 text-lg text-secondary/80">
                    A bold twist on a classic favorite—this tropical delight combines smoky jackfruit and tangy pineapple on a crispy crust. Perfect for plant-based foodies and pizza lovers alike.
                </p>

                <div className="mt-10">
                    <button
                        type='button'
                        className="cursor-pointer px-8 py-3 font-medium border border-[#9c702a] text-secondary hover:text-white hover:bg-btnColor transition-colors duration-300"
                    //  aria-label="View Pineapple & Smoked Jackfruit Pizza recipe"
                    >
                        View Recipe
                    </button>
                </div>
            </div>

            <div className="flex-1 relative w-full">
                <img
                    src={pizza}
                    alt="Pineapple and Smoked Jackfruit Pizza"
                    className="w-full object-cover rounded-md"
                />
                <span className="absolute top-4 left-5 bg-white text-secondary px-3 py-1.5 rounded-md text-xs md:text-sm lg:text-base font-semibold uppercase tracking-widest shadow-sm">
                    Featured Recipe
                </span>
            </div>
        </section>
    )
}
