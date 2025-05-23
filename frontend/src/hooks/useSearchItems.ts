import axiosInstance from "@api/axios";
import { useQuery } from "@tanstack/react-query"


export const useSearchItems = (query: string) => {

    return useQuery({
        queryKey: ['searchItems', query],
        queryFn: async () => {
            const { data } = await axiosInstance.get(`v1/items/search?q=${query}`)
            return data;
        },
        enabled: !!query,
    })
}
