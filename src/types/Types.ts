import { type ComponentProps } from "react"

export interface ButtonPropsStringType{
    text:string
}

// export interface ButtonPropsChildrenType{
//     children:ReactNode;
//     disabled?: boolean;
// }

export interface ButtonPropsChildrenType extends ComponentProps<"button">{
}

export interface HabitType{
    id: number;
    name:string;
}

export interface HabitItemProps{
    habit: HabitType;
}

