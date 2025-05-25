import { useNewsletterSubscribe } from '@hooks/useNewsletterSubscribe';
import { AxiosError } from 'axios';
import { ChangeEvent, FormEvent, useState } from 'react'
import toast from 'react-hot-toast';

export default function Newsletter() {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });
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

        if (!formData.email) {
            toast.error("Email is required.");
            return;
        }

        subscribe({
            name: formData.name ? formData.name : undefined,
            email: formData.email
        }, {
            onSuccess: () => {
                setFormData({
                    name: '',
                    email: ''
                });
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
        <div className='flex flex-col items-center w-full p-4 mx-auto md:p-8 md:w-2/3'>
            <h3 className='text-2xl font-semibold text-center sm:text-3xl md:text-4xl text-secondary'>
                Sign up for my weekly newsletter!
            </h3>
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
                    className='p-4 font-medium text-white transition-colors duration-300 rounded-md shadow-xs cursor-pointer hover:opacity-90 text-nowrap bg-btnColor disabled:opacity-50'
                >
                    {isPending ? 'Submitting...' : 'Get Started'}
                </button>
            </form>
        </div>
    )
}
