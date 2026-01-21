import { productType } from "@/types/productTypes";

type Card = productType & {
  width: number
}

export const Card = ({ nome, preco, imageURL, promocao, porcentagem_desconto, width }: Card) => {

  const preco_com_desconto = preco - (preco * (porcentagem_desconto / 100));
  const parcelas = 3;
  const preco_parcelado = promocao ? preco_com_desconto / parcelas : preco / parcelas;

  return (
    <div 
    style={{ width: `${width}px` }}
    className={`h-full shrink-0 snap-start`}>
        <div className={`card relative h-110 bg-red-500`}>
            <div className="ticket-desconto absolute top-5 left-5 flex items-center justify-center size-15 rounded-full bg-[#281B1B] text-white text-[14px] font-medium">10% <br />OFF</div>
        </div>
        <div className="nome text-secundary text-xl font-medium mt-3">{nome}</div>
        <div className="inline-block bg-gray-100 my-2 p-3 rounded-md">
            <div className="preco-sem-desconto line-through text-[18px] text-primary opacity-60">R${preco}</div>
            <div className="preco-com-desconto text-primary"><span className="text-xl font-bold">R${preco_com_desconto.toFixed(2)}</span> no pix</div>
        </div>
        <div className="preco-parcelado text-secundary text-[18px]">R${preco_parcelado.toFixed(2)}  x 3 parcelas sem juros</div>
    </div>
  );
};