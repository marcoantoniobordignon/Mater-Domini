import { Button } from "@/components/ui/button"
import { SelectDemo } from "@/components/ui/usageSelect"

type Props = {
    onClickButtonYear: (ano: number) => void
}

export const Header = ({ onClickButtonYear }: Props) => {

    const items: { value: string, content: string }[] = 
    [{
        value: "value",
        content: "content"
    },]

    const anos = [2024, 2025, 2026]

    return (
        <div className="flex w-full bg-black text-white items-center pl-7 py-5 rounded-br-[40px] rounded-bl-[40px]">
            <div id="logo" className="w-50 h-auto"> <img src="https://cdn.dooca.store/162084/files/logo-mater-domini-fundo-transparente-1.png?v=1760241684&webp=0" alt="logo" /> </div>
            <div id="filtro" className="flex flex-col gap-y-2 ml-30">
                <p className="text-lg font-medium">Filtros:</p>
                <p className="text-md font-normal">Ano</p>
                <div id="anos" className="flex gap-x-1">
                    { anos.map((ano, index) => (
                        <Button variant="default" className="bg-white" key={index} onClick={() => onClickButtonYear(ano)}>{ano}</Button>
                    )) }
                </div>
            </div>
            <div id="categoria" className="mx-25">
                <p className="-mt-2 mb-9 font-medium text-lg">Categoria</p>
                <SelectDemo items={items} key={1} label="categorias" placeholder="Selecione as categorias"/>
            </div>
            <div className="flex flex-1 justify-center items-center text-4xl font-bold">VENDAS ANO X ANO</div>
        </div>
    )
}