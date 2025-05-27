import { type ContactMessageInput, useCreateContactMessage } from '@hooks/useCreateContactMessage';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import {
    MdEmail,
    MdLocationOn,
    MdPhone
} from 'react-icons/md';


const INITIAL_STATE: ContactMessageInput = {
    firstName: "",
    lastName: "",
    email: "",
    message: ""
}

export default function ContactPage() {
    const [formData, setFormData] = useState(INITIAL_STATE);
    const { mutate: createContactMessage, isPending } = useCreateContactMessage();
    const [formErrors, setFormErrors] = useState<Partial<Record<keyof ContactMessageInput, string>>>({});


    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        createContactMessage(formData, {
            onSuccess: () => {
                toast.success("Your message has been sent successfully!");
                setFormData(INITIAL_STATE);

            },
            onError(err: any) {
                const errorData = err?.response?.data;

                if (errorData?.errors && Array.isArray(errorData.errors)) {
                    const errorMap: Record<string, string> = {};
                    errorData.errors.forEach((item: { field: string; err: string }) => {
                        errorMap[item.field] = item.err;
                    });
                    setFormErrors(errorMap);
                } else {
                    toast.error(errorData?.message || "Something went wrong. Please try again.");
                }
            }

        })
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <section className="container mx-auto mt-12 mb-24 bg-white">
            <div className="container px-6 py-12 mx-auto">
                <div>
                    <p className="font-medium text-btnColor">Contact us</p>
                    <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl">
                        Let's Talk - We're Here for You
                    </h1>
                    <p className="mt-3 text-gray-500">
                        Whether you have a question about features, pricing, or anything else — our team is ready to answer.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-10 mt-10 lg:grid-cols-2">
                    {/* Contact Cards */}
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                        {/* Email */}
                        <div>
                            <span className="inline-block p-3 rounded-full text-btnColor bg-btnColor/10">
                                <MdEmail className="w-5 h-5" />
                            </span>
                            <h2 className="mt-4 text-base font-medium text-gray-800">Email</h2>
                            <p className="mt-2 text-sm text-gray-500">Support and inquiries.</p>
                            <a
                                href='mailto:support@bilaldev.com'
                                className="mt-2 text-sm text-btnColor"
                            >
                                support@bilaldev.com
                            </a>
                        </div>


                        {/* Office */}
                        <div>
                            <span className="inline-block p-3 rounded-full text-btnColor bg-btnColor/10">
                                <MdLocationOn className="w-5 h-5" />
                            </span>
                            <h2 className="mt-4 text-base font-medium text-gray-800">Headquarters</h2>
                            <p className="mt-2 text-sm text-gray-500">Come visit us at our office.</p>
                            <p className="mt-2 text-sm text-btnColor">123 Dev Avenue, San Francisco, CA</p>
                        </div>

                        {/* Phone */}
                        <div>
                            <span className="inline-block p-3 rounded-full text-btnColor bg-btnColor/10">
                                <MdPhone className="w-5 h-5" />
                            </span>
                            <h2 className="mt-4 text-base font-medium text-gray-800">Phone</h2>
                            <p className="mt-2 text-sm text-gray-500">Mon-Fri, 9AM to 6PM.</p>
                            <a href='tel:+15550000000' className="mt-2 text-sm text-btnColor">
                                +1 (415) 123-4567
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="p-4 py-6 rounded-lg bg-gray-50 md:p-8">
                        <form onSubmit={handleFormSubmit}>
                            <div className="">
                                <label className="block mb-2 text-sm text-gray-600">First Name</label>
                                <input
                                    type="text"
                                    placeholder="John"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    className={`block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border ${formErrors.firstName ? "border-red-500" : "border-gray-200"} rounded-lg focus:border-btnColor focus:ring-btnColor focus:outline-none focus:ring focus:ring-opacity-40`}
                                    required
                                    minLength={3}
                                    maxLength={25}
                                />
                                {formErrors.firstName && <p className="mt-1 text-sm text-red-500">{formErrors.firstName}</p>}
                            </div>

                            <div className="mt-4">
                                <label className="block mb-2 text-sm text-gray-600">Last Name</label>
                                <input
                                    type="text"
                                    placeholder="Doe"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    className={`block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border ${formErrors.lastName ? "border-red-500" : "border-gray-200"} rounded-lg focus:border-btnColor focus:ring-btnColor focus:outline-none focus:ring focus:ring-opacity-40`}
                                    required
                                    maxLength={25}
                                />
                                {formErrors.lastName && <p className="mt-1 text-sm text-red-500">{formErrors.lastName}</p>}

                            </div>

                            <div className="mt-4">
                                <label className="block mb-2 text-sm text-gray-600">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className={`block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border ${formErrors.email ? "border-red-500" : "border-gray-200"} rounded-lg focus:border-btnColor focus:ring-btnColor focus:outline-none focus:ring focus:ring-opacity-40`}
                                    required
                                />
                                {formErrors.email && <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>}

                            </div>

                            <div className="mt-4">
                                <label className="block mb-2 text-sm text-gray-600">Message</label>
                                <textarea
                                    placeholder="Your message here..."
                                    rows={4}
                                    className={`block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border ${formErrors.message ? 'border-red-500' : 'border-gray-200'} rounded-lg focus:border-btnColor focus:ring-btnColor focus:outline-none focus:ring focus:ring-opacity-40 max-h-[400px]`}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    minLength={10}
                                    maxLength={500}
                                ></textarea>
                                {formErrors.message && <p className="mt-1 text-sm text-red-500">{formErrors.message}</p>}

                            </div>

                            <button
                                type="submit"
                                disabled={isPending}
                                className="mt-6 w-full px-6 py-2.5 cursor-pointer text-white bg-btnColor rounded-lg hover:bg-btnColor/90 transition"
                            >
                                {isPending ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
