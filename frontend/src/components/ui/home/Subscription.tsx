import { useNewsletterSubscribe } from '@hooks/useNewsletterSubscribe';
import { AxiosError } from 'axios';
import { useState } from 'react'
import toast from 'react-hot-toast';

export default function Subscription() {
    const [email, setEmail] = useState<string>('');
    const { mutate: subscribe, isPending } = useNewsletterSubscribe();


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) {
            toast.error("Email is required.");
            return;
        };

        subscribe({ email }, {
            onSuccess: () => {
                setEmail('');
                toast.success("Thank you! You've successfully subscribed. 🎉");
            },
            onError: (err) => {
                console.error(err);

                if (err instanceof AxiosError) {
                    const errorMessage = err.response?.data?.message || "Oops! Something went wrong. Please try again.";
                    toast.error(errorMessage);
                } else {
                    toast.error("Oops! Something went wrong. Please try again.");
                }
            }
        });
    };


    return (
        <>
            <section className='px-6 py-10 bg-white md:px-8 lg:px-12 rounded-t-md md:py-16'>

                <div className='mx-auto max-w-screen'>
                    <div className='flex flex-col items-center justify-between gap-10 md:gap-20 md:flex-row'>
                        <div className='md:flex-1'>
                            <h6 className='text-2xl font-semibold sm:text-3xl md:text-4xl text-secondary'>Subscribe to our Newsletter</h6>
                            <p className='mt-6 text-lg font-light leading-normal text-gray-600'>
                                Get delicious vegan recipes, cooking tips, and seasonal meal ideas delivered straight to your inbox every week. Join our food-loving community today!
                            </p>
                        </div>

                        <div className='w-full md:flex-1'>
                            <form className='flex flex-col items-center gap-3 md:flex-row' onSubmit={handleSubmit}>
                                <input
                                    type="email"
                                    name="email"
                                    className='w-full p-4 border rounded shadow-xs outline-none md:max-w-sm md:min-w-xs border-btnColor bg-btnColor/3'
                                    placeholder="Enter your email..."
                                    onChange={(e) => setEmail(e.target.value.trim())}
                                    value={email}
                                    required
                                    readOnly={isPending}
                                />
                                <button
                                    type='submit'
                                    className='w-full p-4 font-medium text-white transition-colors duration-300 rounded-md shadow-xs cursor-pointer hover:opacity-90 text-nowrap bg-btnColor disabled:opacity-50 md:w-auto'
                                    disabled={isPending}
                                >
                                    {isPending ? 'Subscribing...' : 'Subscribe'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

            </section>
            <hr className='text-secondary/10' />
        </>
    )
}
