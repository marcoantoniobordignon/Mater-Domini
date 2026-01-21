import { container_config } from "@/utils/container_config";

export const InfoArea = () => {
  return (
    <div className="my-5  ">
      <div className={`${container_config} flex items-center justify-between`}>
        <div className="flex-1 text-[#281B1B]">
            <img src="https://cdn.dooca.store/162084/files/credit-card-02-33.svg?v=1732065622&webp=0" alt="cartão para pagamento" 
            className="mx-auto w-14 h-auto"/>
            <div className="text text-center text-xl "><span className="text-secundary font-medium">Pague parcelado</span> <br /> no cartão de crédito</div>
        </div>
        <div className="flex-1 text-[#281B1B]">
            <img src="https://cdn.dooca.store/162084/files/truck-01-31.svg?v=1732065634&webp=0" alt="Caminhão de frete" 
            className="mx-auto w-14 h-auto"/>
            <div className="text text-center text-xl"><span className="text-secundary font-medium">Entrega garantida</span> <br /> para todo Brasil</div>
        </div>
        <div className="flex-1 text-[#281B1B]">
            <img src="https://cdn.dooca.store/162084/files/shield-tick-27.svg?v=1732065646&webp=0" alt="escudo simbolizando garantia" 
            className="mx-auto w-14 h-auto"/>
            <div className="text text-center text-xl"><span className="text-secundary font-medium">Compra 100% segura</span> <br /> seus dados protegidos</div>
        </div>
        <div className="flex-1 text-[#281B1B]">
            <img src="https://cdn.dooca.store/162084/files/sale-01-5.svg?v=1732906900&webp=0" alt="porcentagem"
            className="mx-auto w-14 h-auto"/>
            <div className="text text-center text-xl"><span className="text-secundary font-medium">Ganhe 5% OFF</span> <br /> pagando via PIX</div>
        </div>
      </div>
    </div>
  );
};