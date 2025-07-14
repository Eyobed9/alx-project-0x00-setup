import ButtonProps from "@/interfaces"

const Button: React.FC<ButtonProps> = ({title, size, shape}) => {
    return (
        <button className={`bg-blue text-white text-xl ${size} ${shape}`}>{title}</button>
    )
}

export default Button;