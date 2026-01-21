"use client";

import { FooterSidePages } from "@/components/sidePagesElements/footer";
import { HeaderSidePages } from "@/components/sidePagesElements/header";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();

    return (
        <div>
            <HeaderSidePages />
            <main className="min-h-[calc(100vh-240px)] bg-gray-500 my-7 py-3">
                <div id="container" className="max-w-400 mx-auto px-5">
                    <nav className="flex justify-center">
                        <ul className="flex gap-x-20 text-4xl text-white font-medium">
                            <li 
                            className="p-3 rounded-md hover:cursor-pointer hover:opacity-60"
                            onClick={() => router.push('/admin/estoque')}
                            >Estoque
                            </li>
                            <li 
                            className="p-3 rounded-md hover:cursor-pointer hover:opacity-60"
                            onClick={() => router.push('/admin/dashboard')}
                            >Financeiro
                            </li>
                        </ul>
                    </nav>
                    <div id="info-gerais" className="mt-20">
                        <p className="text-4xl text-white font-medium text-shadow-accent">Informações Gerais</p>
                        <div className="mt-3 flex flex-col gap-y-5 text-2xl text-white font-thin">
                            <div>Que produto mais vendemos:</div>
                            <div>Para onde mais vendemos:</div>
                            <div>Para qual gênero mais vendemos:</div>
                            <div>Para que faixa etária mais vendemos:</div>
                            <div>Em que período do ano mais vendemos:</div>
                        </div>
                    </div>
                </div>
            </main>
            <FooterSidePages />
        </div>
    );
} 