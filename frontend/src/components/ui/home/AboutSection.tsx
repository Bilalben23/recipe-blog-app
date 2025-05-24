import man_cooking from '@assets/man_cooking.jpg';


export default function AboutSection() {
    return (
        <section className="flex flex-col-reverse items-center justify-between my-10 md:flex-row gap-7 md:px-5 sm:my-15 md:my-20 md:gap-20 lg:px-10">
            <div className="flex-1">
                <h5 className="text-3xl font-bold text-secondary sm:text-5xl sm:leading-snug">
                    Passionate Vegan Chef on a Flavorful Mission
                </h5>
                <p className="mt-4 text-lg text-secondary/80">
                    Hi, I'm Bilal — a plant-based home chef dedicated to transforming everyday ingredients into mouthwatering vegan meals. From reinventing comfort food to exploring bold global flavors, I love showing that eating compassionately doesn't mean sacrificing taste. Whether you're a seasoned vegan or just curious, you're in the right place!
                </p>

                <div className="mt-7 md:mt-10">
                    <button
                        type='button'
                        className="cursor-pointer rounded-md px-8 py-3 hover:opacity-90 font-medium text-white bg-btnColor transition-colors duration-300"
                    //  aria-label="View Pineapple & Smoked Jackfruit Pizza recipe"
                    >
                        View Recipe
                    </button>
                </div>
            </div>

            <div className="flex-1 w-full">
                <img
                    src={man_cooking}
                    alt="Man cooking a meal"
                    loading='lazy'
                    className="object-cover w-full rounded-md shadow-xs aspect-[12/9] md:aspect-[11/9]"
                />
            </div>
        </section>
    )
}
