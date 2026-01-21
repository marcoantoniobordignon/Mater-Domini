import { Card } from "@/components/mainPagesElements/card";

export const ProductsGrid = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-4 gap-x-6 gap-y-10">
        {[...Array(12)].map((_, i) => (
          <Card
          key={i}
          id={i}
          categoria=""
          codigo_fornecedor={1}
          descricao=""
          imageURL=""
          nome="Vestido qualquer"
          porcentagem_desconto={1}
          preco={12}
          promocao={true}
          quantidade_estoque={12}
          rating={5.0}
          width={300}/>
        ))}
      </div>
    </div>
  );
};