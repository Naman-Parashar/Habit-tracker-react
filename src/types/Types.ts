import { type ComponentProps } from "react"

export interface ButtonPropsStringType{
    text:string
}

// export interface ButtonPropsChildrenType{
//     children:ReactNode;
//     disabled?: boolean;
// }

export interface ButtonPropsChildrenType extends ComponentProps<"button">{
    varient?: VarientType ;
}

export type VarientType = "primary" | "secondary" | "ghost-destructive";

export interface HabitType{
    id: number;
    name:string;
}

export interface HabitItemProps{
    habit: HabitType[];
}

