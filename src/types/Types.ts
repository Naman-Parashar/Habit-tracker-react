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
    complition?: Date[];
    visibleDates?: Date[];
    deleteHabit?: (id:number)=>void;
    toggleHabit?: (id:number, date:Date)=>void;
}

export interface HabitItemProps{
    habit: HabitType[];
    deleteHabit?: (id:number)=>void;
    toggleHabit?: (id:number, date:Date)=>void;
}

export interface HeaderProps {
  visibleDates: Date[]
  onPrev: () => void
  onNext: () => void
}

export interface  HabitListProps {
  visibleDates: Date[]
}


