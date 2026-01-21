"use client"

import { OnlyTitle } from "./title"
import { Carrousel } from "./carrousel"
import { useProductsByFilterQuery } from "@/lib/queries"

export const VitrineHome = () => {

    const filter = {
        promocao: true     
    }

    const vitrineProducts = useProductsByFilterQuery(filter)

    const data = vitrineProducts.data ? vitrineProducts.data : []

    return (
        <div className="w-full">
            <div className="my-10 w-95/100 mx-auto ">
                <OnlyTitle title="Renove seu guarda roupa aqui" sizeTitle="32px" />
                <Carrousel data={data} widthCarrousel={1850} cardsPerRow={4} />
            </div>
        </div>
    )
}