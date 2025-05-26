import { Schema } from "mongoose";


export interface IInstructions {
    stepTitle: string;
    stepDescription: string
}


export interface IIngredient {
    name: string;
    quantity: string
}

export interface IComment {
    user: string;
    comment: string;
}

export interface IMore {
    prep_time: string;
    cook_time: string;
    servings: string;
    difficulty: string;
    source: string
}

export interface IItem {
    menuId: number;
    name: string;
    thumbnail_image: string;
    category: Schema.Types.ObjectId;
    instructions: IInstructions[];
    description: string;
    tags: string[];
    ingredients: IIngredient[];
    comments: IComment[];
    more: IMore
}
