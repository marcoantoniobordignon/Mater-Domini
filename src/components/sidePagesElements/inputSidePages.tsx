type Props = {
    content: string;
    setContent: (content: string) => void;
    placeholder?: string;
    type: string;
}

export const InputSidePages = ({ content, setContent, placeholder, type }: Props) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className="my-5 w-full py-4 pl-5 rounded-md text-lg border border-black/30"
            value={content}
            onChange={e => setContent(e.target.value)}/>
    )
};
