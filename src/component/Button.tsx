import type { ButtonPropsChildrenType } from "../types/Types"

// function Button({text}: ButtonPropsType) {
//   return (
//     <button>{text}</button>
//   )
// }

function Button({...props}: ButtonPropsChildrenType & { disabled?: boolean }) {
  return (
    <button 
    {...props}
    className="
    bg-violet-600 
    hover:bg-violet-400
    transition-colors
    rounded
    px-2
    py-1
    disabled:opacity-30
    disabled:cursor-not-allowed
    "
    />
  )
}

export default Button