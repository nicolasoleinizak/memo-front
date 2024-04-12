interface IconButtonProps {
    children: React.ReactNode,
    onClick: () => void,
    className: string
}

export default function IconButton({children, onClick, className}: IconButtonProps) {
    return (
        <button
            className={`w-[42px] h-[42px] ${className} text-primary-50 p-[10px] rounded-full hover:bg-primary-800`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}