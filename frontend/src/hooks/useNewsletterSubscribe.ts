import axiosInstance from "@api/axios"
import { useMutation } from "@tanstack/react-query"

interface NewsletterPayload {
    name?: string;
    email: string;
}

export const useNewsletterSubscribe = () => {
    return useMutation({
        mutationKey: ["subscribeNewsletter"],
        mutationFn: async (payload: NewsletterPayload) => {
            const { data } = await axiosInstance.post("/v1/newsletter/subscribe", payload)
            return data;
        }
    })
}
