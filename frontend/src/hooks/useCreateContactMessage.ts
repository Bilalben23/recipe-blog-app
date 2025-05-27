import axiosInstance from '@api/axios';
import { useMutation } from '@tanstack/react-query';


export interface ContactMessageInput {
    firstName: string;
    lastName: string;
    email: string;
    message: string
}


export function useCreateContactMessage() {
    return useMutation({
        mutationKey: [""],
        mutationFn: async (contactData: ContactMessageInput) => {
            const { data } = await axiosInstance.post("/v1/contact", contactData);
            return data;
        }
    })
}
