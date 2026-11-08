import { twMerge } from "tailwind-merge";
import type { ButtonPropsChildrenType, VarientType } from "../types/Types"

// function Button({text}: ButtonPropsType) {
//   return (
//     <button>{text}</button>
//   )
// }

function Button({varient="primary",className,...props}: ButtonPropsChildrenType & { disabled?: boolean }) {
  return (
    <button 
    {...props}
    className={twMerge(
    "transition-colors rounded px-2 py-1 disabled:opacity-30 disabled:cursor-not-allowed",
    getVarientstyle(varient),
    className
    )}
    />
  )
}

function getVarientstyle(varient: VarientType) {
  switch (varient) {
   
    case "primary":
      return "bg-violet-600 hover:bg-violet-400";
   
      case "secondary":
      return "bg-zinc-800 hover:bg-zinc-700 text-zinc-500";
   
      case "ghost-destructive":
      return "bg-red-800 hover:bg-red-400 text-red-200";

    default:
      throw new Error(`Unknown varient: ${varient}`);
    }
  }

export default Button