import axiosInstance from "@api/axios";
import { useQuery } from "@tanstack/react-query"


export const useItems = () => {

    return useQuery({
        queryKey: ['items'],
        queryFn: async () => {
            const { data } = await axiosInstance.get('v1/items')
            return data;
        }
    })
}
