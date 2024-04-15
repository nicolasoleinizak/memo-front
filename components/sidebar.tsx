import Link from "next/link"

export const Sidebar = ({ onClick, className }: { onClick: () => void, className?: string }) => {
    return (
        <div className={`absolute h-[100%] ${className}`}>
            <div className="absolute w-[200px] h-[100%] top-0">
                <ul className="flex flex-col items-center bg-primary-950 py-2">
                    <Link href="/" className="w-full p-2 hover:bg-primary-800 text-center text-primary-50" onClick={onClick}>Home</Link>
                    <Link href="/stats" className="w-full p-2 hover:bg-primary-800 text-center text-primary-50" onClick={onClick}>Statistics</Link>
                </ul>
            </div>
        </div>
    )
}