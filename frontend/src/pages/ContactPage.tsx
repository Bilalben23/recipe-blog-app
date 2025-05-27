import { ChangeEvent, FormEvent, useState } from 'react';

import {
    MdEmail,
    MdLocationOn,
    MdPhone
} from 'react-icons/md';


type FormData = {
    first_name: string,
    last_name: string,
    email: string,
    message: string
}

const INITIAL_STATE: FormData = {
    first_name: "",
    last_name: "",
    email: "",
    message: ""
}

export default function ContactPage() {
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // TODO: Add your form submission logic here (API call, validation, etc.)

        console.log("Form submitted: ", formData);

        setFormData(INITIAL_STATE);
    }

    return (
        <section className="bg-white container mx-auto mt-12 mb-24">
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

                <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
                    {/* Contact Cards */}
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                        {/* Email */}
                        <div>
                            <span className="inline-block p-3 text-btnColor rounded-full bg-btnColor/10">
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
                            <span className="inline-block p-3 text-btnColor rounded-full bg-btnColor/10">
                                <MdLocationOn className="w-5 h-5" />
                            </span>
                            <h2 className="mt-4 text-base font-medium text-gray-800">Headquarters</h2>
                            <p className="mt-2 text-sm text-gray-500">Come visit us at our office.</p>
                            <p className="mt-2 text-sm text-btnColor">123 Dev Avenue, San Francisco, CA</p>
                        </div>

                        {/* Phone */}
                        <div>
                            <span className="inline-block p-3 text-btnColor rounded-full bg-btnColor/10">
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
                            <div className="-mx-2 md:flex md:items-center">
                                <div className="flex-1 px-2">
                                    <label className="block mb-2 text-sm text-gray-600">First Name</label>
                                    <input
                                        type="text"
                                        placeholder="John"
                                        name="first_name"
                                        value={formData.first_name}
                                        onChange={handleInputChange}
                                        className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-btnColor focus:ring-btnColor focus:outline-none focus:ring focus:ring-opacity-40"
                                        required
                                    />
                                </div>

                                <div className="flex-1 px-2 mt-4 md:mt-0">
                                    <label className="block mb-2 text-sm text-gray-600">Last Name</label>
                                    <input
                                        type="text"
                                        placeholder="Doe"
                                        name="last_name"
                                        value={formData.last_name}
                                        onChange={handleInputChange}
                                        className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-btnColor focus:ring-btnColor focus:outline-none focus:ring focus:ring-opacity-40"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="mt-4">
                                <label className="block mb-2 text-sm text-gray-600">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-btnColor focus:ring-btnColor focus:outline-none focus:ring focus:ring-opacity-40"
                                    required
                                />
                            </div>

                            <div className="mt-4">
                                <label className="block mb-2 text-sm text-gray-600">Message</label>
                                <textarea
                                    placeholder="Your message here..."
                                    rows={4}
                                    className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-btnColor focus:ring-btnColor focus:outline-none focus:ring focus:ring-opacity-40 max-h-[400px]"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                >{formData.message}</textarea>
                            </div>

                            <button
                                type="submit"
                                className="mt-6 w-full px-6 py-2.5 cursor-pointer text-white bg-btnColor rounded-lg hover:bg-btnColor/90 transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
