import type { ReactNode } from "react"

export interface ButtonPropsStringType{
    text:string
}

export interface ButtonPropsChildrenType{
    children:ReactNode
}

export interface HabitType{
    id: number;
    name:string;
}

export interface HabitItemProps{
    habit: HabitType;
}

