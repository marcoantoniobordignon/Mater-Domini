"use client"

import { Card } from "./card";
import { useEffect, useRef } from "react";
import { productType } from "@/types/productTypes";

type Props = {
  data: productType[],
  cardsPerRow: number,
  widthCarrousel: number;
}

export const Carrousel = ({ data, cardsPerRow, widthCarrousel }: Props)  => {
    const carrouselRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const el = carrouselRef.current
        
        const interval = setInterval(() => {
            if(!el) return;

            const reachedEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 5;

            if (reachedEnd) {
                el.scrollTo({
                    left: 0,
                    behavior: 'auto'
                })
            } else {
                el.scrollBy({
                    left: 320,
                    behavior: 'smooth'
                });
            }
        }, 3000);

        return () => clearInterval(interval)
    }, []);

    const handleRightArrow = () => {
        const el = carrouselRef.current

        if(!el) return;

        const reachedEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 5;

        if (reachedEnd) {
            el.scrollTo({
                left: 0,
                behavior: 'auto'
            })
        } else {
            el.scrollBy({
                left: 320,
                behavior: 'smooth'
            });
        }
    }

    const handleLeftArrow = () => {
        const el = carrouselRef.current

        if(!el) return;

        const reachedEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 5;

        if (reachedEnd) {
            el.scrollTo({
                left: 0,
                behavior: 'auto'
            })
        } else {
            el.scrollBy({
                left: -320,
                behavior: 'smooth'
            });
        }
    }

  return (
    <div className="flex w-full h-full items-center justify-between">
      <img src="svg/arrow.png" alt="seta para a esquerda"
      className="rotate-180 w-5 h-5 mr-5"
      onClick={handleLeftArrow}/>
      <div ref={carrouselRef}
        className="w-full mt-10 h-full flex gap-7 overflow-x-hidden scroll-smooth snap-x snap-mandatory">
          {data?.map(card => (
            <Card
              key={card.id}
              id={card.id}
              nome={card.nome}
              preco={card.preco}
              promocao={card.promocao}
              porcentagem_desconto={10}
              imageURL={card.imageURL}
              categoria="categoria 1"
              codigo_fornecedor={1}
              descricao="1231"
              quantidade_estoque={12}
              rating={5.0}
              width={((widthCarrousel - (28 * (cardsPerRow - 1))) / cardsPerRow)}
            />
          ))}
      </div>
      <img src="svg/arrow.png" alt="seta para a direita"
      className="w-5 h-5 ml-5"
      onClick={handleRightArrow}/>
    </div>
  );
};