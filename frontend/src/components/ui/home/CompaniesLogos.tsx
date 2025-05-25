import food_network from '@assets/food-network-seeklogo.svg';
import tasty from '@assets/tasty-food-seeklogo.png';
import master_chef from '@assets/masterchef-seeklogo.png';
import bon_appetit from '@assets/bon-appetit-seeklogo.svg';
import serious_eats from '@assets/serious-eats-seeklogo.png';


export default function CompaniesLogos() {
    return (
        <div className="px-2 py-12 sm:py-32">
            <div className="px-6 mx-auto max-w-7xl lg:px-8">
                <h5 className="max-w-2xl mx-auto text-2xl font-semibold text-center text-gray-900 sm:text-3xl md:text-4xl">
                    Trusted by the world's leading food and culinary brands
                </h5>
                <div className="grid items-center max-w-lg grid-cols-4 mx-auto mt-10 gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    <img
                        alt="Food Network"
                        src={food_network}
                        className="object-contain w-full col-span-2 max-h-12 lg:col-span-1"
                    />
                    <img
                        alt="Tasty"
                        src={tasty}
                        className="object-contain w-full col-span-2 p-1 rounded max-h-17 lg:col-span-1"
                    />
                    <img
                        alt="MasterChef"
                        src={master_chef}
                        className="object-contain w-full col-span-2 max-h-12 lg:col-span-1"
                    />
                    <img
                        alt="Bon Appétit"
                        src={bon_appetit}
                        className="object-contain w-full col-span-2 max-h-10 sm:col-start-2 lg:col-span-1"
                    />
                    <img
                        alt="Serious Eats"
                        src={serious_eats}
                        className="object-contain w-full col-span-2 col-start-2 max-h-10 sm:col-start-auto lg:col-span-1"
                    />
                </div>
            </div>
        </div>
    );
}
