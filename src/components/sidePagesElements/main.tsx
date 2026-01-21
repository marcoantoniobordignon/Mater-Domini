import { ReactNode } from "react"

export const MainSidePages = ({ children }: { children: ReactNode }) => {
    return (
        <main className="flex justify-center items-center my-10 min-h-[calc(100vh-270px)]">
            <div className="flex flex-col justify-center items-center w-170 p-5 rounded-lg border border-black/15">
                {children}
            </div>
        </main>
    )
}