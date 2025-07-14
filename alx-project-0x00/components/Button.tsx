import ButtonProps from "@/interfaces"

const Button: React.FC<ButtonProps> = ({title, styles}) => {
    return (
        <button className={`bg-blue text-white text-xl ${styles}`}>{title}</button>
    )
}

export default Button;