import axiosInstance from "@api/axios"
import { CategoryName } from "@constants/categories"
import { useQuery } from "@tanstack/react-query"


export const useCategoryItems = (category: CategoryName) => {

    return useQuery({
        queryKey: ['categoryItems', category],
        queryFn: async () => {
            const { data } = await axiosInstance.get(`/v1/categories/${category}`)
            return data;
        }
    })
}