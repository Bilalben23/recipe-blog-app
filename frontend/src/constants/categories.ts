
export type CategoryName = "breakfast" | "entrees" | "lunch" | "desserts" | "sides" | "drinks";;

export type Category = {
    name: CategoryName,
    bgColor: string,
    color: string
}


export const categories: Category[] = [
    {
        name: 'breakfast',
        bgColor: '#efedfa',
        color: '#59871f',
    },
    {
        name: 'entrees',
        bgColor: '#f0f5c4',
        color: '#59871f',
    },
    {
        name: 'lunch',
        bgColor: '#e5f7f3',
        color: '#1f8787'
    },
    {
        name: 'desserts',
        bgColor: '#e8f5fa',
        color: '#397a9e',
    },
    {
        name: 'sides',
        bgColor: '#feefc9',
        color: '#d16400',
    },
    {
        name: 'drinks',
        bgColor: '#ffeae3',
        color: '#f0493e',
    },
] as const;
