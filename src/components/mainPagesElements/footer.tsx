import { container_config } from "@/utils/container_config";

export const Footer = () => {
  return (
    <div>
      <div className={`${container_config} flex justify-between`}>
        <div className="atendimento flex flex-col">
          <div className="text-secundary font-semibold text-[22px] mb-4">Central de atendimento</div>
          <div className="mb-3 text-xl text-[#281B1B]">Telefone</div>
          <div className="mb-3 text-xl text-[#281B1B]">
            <span>Whatsapp</span>
            <span className="font-bold text-2xl">(65) 99335-6858</span>
          </div>
          <div className="mb-3 text-xl text-[#281B1B]">
            <span>Email</span>
            <span className="font-bold text-xl"><a href="mailto:materdomini.atendimento@gmail.com">materdomini.atendimento@gmail.com</a></span>
          </div>
          <div className="mb-3 text-xl text-[#281B1B]">Seg a sab das 9h-12h / 14h-18h</div>
        </div>
        <div className="institucional flex flex-col">
          <div className="text-secundary font-semibold text-[22px] mb-4">Institucional</div>
          <div className="mb-3 text-xl text-[#281B1B]">Contato</div>
          <div className="mb-3 text-xl text-[#281B1B]">Quem somos</div>
          <div className="mb-3 text-xl text-[#281B1B]">Política de privacidade</div>
          <div className="mb-3 text-xl text-[#281B1B]">Rastrear</div>
          <div className="text-xl text-[#281B1B]">Trocas e devoluções</div>
        </div>
        <div className="pagameto-seguranca flex flex-col">
          <div>
            <div className="text-secundary font-semibold text-[22px] mb-4">Pagamentos</div>
            <div className="flex">
              <div><img src="" alt="Visa" /></div>
              <div><img src="" alt="Mastercard" /></div>
              <div><img src="" alt="Amex" /></div>
              <div><img src="" alt="Elo" /></div>
              <div><img src="" alt="" /></div>
              <div><img src="" alt="Boleto" /></div>
              <div><img src="" alt="Mercado Pago" /></div>
            </div>
          </div>
          <div>
            <div className="mt-10 text-secundary font-semibold text-[22px] mb-4">Segurança</div>
            <div className="flex">
              <div><img src="" alt="SSL" /></div>
              <div><img src="" alt="Safe Google" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
