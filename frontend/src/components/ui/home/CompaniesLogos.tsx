import food_network from '@assets/food-network-seeklogo.svg';
import tasty from '@assets/tasty-food-seeklogo.png';
import master_chef from '@assets/masterchef-seeklogo.png';
import bon_appetit from '@assets/bon-appetit-seeklogo.svg';
import serious_eats from '@assets/serious-eats-seeklogo.png';


export default function CompaniesLogos() {
    return (
        <div className="py-12 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h6 className="text-center text-lg font-semibold text-gray-900">
                    Trusted by the world's leading food and culinary brands
                </h6>
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    <img
                        alt="Food Network"
                        src={food_network}
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                    />
                    <img
                        alt="Tasty"
                        src={tasty}
                        className="col-span-2 max-h-17 w-full object-contain p-1 rounded lg:col-span-1"
                    />
                    <img
                        alt="MasterChef"
                        src={master_chef}
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                    />
                    <img
                        alt="Bon Appétit"
                        src={bon_appetit}
                        className="col-span-2 max-h-10 w-full object-contain sm:col-start-2 lg:col-span-1"
                    />
                    <img
                        alt="Serious Eats"
                        src={serious_eats}
                        className="col-span-2 col-start-2 max-h-10 w-full object-contain sm:col-start-auto lg:col-span-1"
                    />
                </div>
            </div>
        </div>
    );
}
