import { ArrowRight } from "lucide-react";

interface ButtonProps {
    arrow: boolean;
    text: string;
    width?: number | string;
  }

function Button(props : ButtonProps) {
  return (
    <div>
        <button className={`bg-neutral-900 text-white px-8 py-3 rounded-md flex items-center gap-2 justify-center h-12 ${props.width? 'w-' + props.width : 'w-auto'}`}>
        <span>{props.text}</span>
        {props.arrow && <ArrowRight />}
        </button>
    </div>
  )
}

export default Button