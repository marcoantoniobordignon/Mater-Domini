"use client"

import { useAllProductsQuery } from "@/lib/queries"
import { Carrousel } from "./carrousel"
import { TitleandSubtitle } from "./title"
import { container_config } from "@/utils/container_config"

export const PromotionSection = () => {

    const allProducts = useAllProductsQuery()

    const data = allProducts.data? allProducts.data : [] 

    return (
        <div className="w-full">
            <div className={container_config}>
                <TitleandSubtitle title="Peças selecionadas" subtitle="Peças limitadas"
                sizeTitle="34px" sizeSubtitle="18px"/>
                <Carrousel data={data} widthCarrousel={1500} cardsPerRow={5}/>
            </div>
        </div>
    )
}