type Props = {
    title: string,
    onClick: () => void
}

export const ButtonSidePages = ({ title, onClick }: Props) => {
    return (
        <button 
            className="inline-block my-4 w-150 h-15 rounded-md text-xl text-white text-center bg-[#705656]"
            onClick={onClick}>
                {title}
        </button>    
    )
};