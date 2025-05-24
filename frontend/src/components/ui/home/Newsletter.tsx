import { useNewsletterSubscribe } from '@hooks/useNewsletterSubscribe';
import { AxiosError } from 'axios';
import { ChangeEvent, FormEvent, useState } from 'react'
import toast from 'react-hot-toast';

export default function Newsletter() {

    const [formData, setFormData] = useState({ name: '', email: '' });
    const { mutate: subscribe, isPending } = useNewsletterSubscribe();


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };



    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        subscribe(formData, {
            onSuccess: () => {
                setFormData({ name: '', email: '' });
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
        <div className='flex flex-col items-center w-full p-2 mx-auto sm:p-4 md:p-8 md:w-2/3'>
            <h4 className='text-2xl font-semibold text-center sm:text-3xl md:text-4xl text-secondary'>
                Sign up for my weekly newsletter!
            </h4>
            <p className='mt-6 text-lg font-light leading-normal text-center text-gray-600'>
                Weekly emails with my latest recipes, cooking tips and tricks and product recommendations!
                <br />
                You'll be set up in minutes.
            </p>

            <form onSubmit={handleSubmit} className='flex flex-col w-full gap-4 mt-6 md:flex-row'>
                <input
                    name='name'
                    type='text'
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='Name...'
                    required
                    className='p-4 bg-white rounded shadow-xs outline-none md:min-w-xs'
                    readOnly={isPending}
                />
                <input
                    name='email'
                    type='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Email Address...'
                    required
                    className='p-4 bg-white rounded shadow-xs outline-none md:min-w-xs'
                    readOnly={isPending}
                />
                <button
                    type='submit'
                    disabled={isPending}
                    className='cursor-pointer rounded-md p-4 font-medium border border-[#9c702a] text-secondary hover:text-white text-nowrap hover:bg-btnColor transition-colors duration-300 shadow-xs disabled:opacity-50'
                >
                    {isPending ? 'Submitting...' : 'Get Started'}
                </button>
            </form>
        </div>
    )
}
