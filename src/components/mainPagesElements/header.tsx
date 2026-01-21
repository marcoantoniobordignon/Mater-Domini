"use client"

import { useState } from "react";
import { container_config, item_nav_config } from "@/utils/container_config";
import { useAvatar } from "@/contexts/avatarCtx";
import { AvatarElement } from "./avatar";

import { useRouter } from "next/navigation";

export const Header = () => {
    const [showText1, setShowText1] = useState(true);
    const [showText2, setShowText2] = useState(false);

    const { avatar } = useAvatar();

    const router = useRouter();

    const handleArrow = () => {
        setShowText1(!showText1);
        setShowText2(!showText2);
    }

  return (
    <div className="header font-serif">
      <div className="header-top bg-primary h-14 w-full">
        <div className="carrousel flex items-center w-8/10 max-w-400 h-full mx-auto">
            <div className="left-arrow w-3.5 cursor-pointer" onClick={handleArrow}><img src="svg/arrow.png" alt="seta para a esquerda" className="w-full h-auto rotate-180"/></div>
            <div className={`text-1 ${showText1 ? "" : "hidden"} mx-auto text-white`}><span className="font-bold">Pague parcelado</span> no cartão de crédito</div>
            <div className={`text-2 ${showText2 ? "" : "hidden"} mx-auto text-white`}><span className="font-bold">Entrega garantida</span> para todo o Brasil</div>
            <div className="right-arrow w-3.5 cursor-pointer" onClick={handleArrow}><img src="svg/arrow.png" alt="seta para a direita" className="w-full h-auto"/></div>
        </div>
      </div>
      <div className="header-mid w-full h-30 px-3">
        <div className={`${container_config} mx-auto flex h-full items-center`}>
            <div className="flex flex-4"></div>
            <div className="logo flex flex-4 h-9/10 "><a href="/"><img src="https://cdn.dooca.store/162084/files/logo-mater-domini-fundo-transparente-1.png?v=1760241684&webp=0" alt="logo" /></a></div>
            <nav className="flex flex-4 h-8 justify-end items-center">
                <img src="svg/lupa.png" alt="lupa" className="w-auto h-full mr-5"/>
                {avatar ? <div onClick={() => router.push('/conta')}><AvatarElement /></div> : <img src="svg/perfil.png" alt="perfil" className="w-auto h-full mr-5" onClick={() => router.push("/login")}/>}
                <img src="svg/sacolas-de-compras.png" alt="carrinho" className="w-auto h-full mr-5" onClick={() => router.push("/carrinho")}/>
            </nav>
        </div>
        </div>
      <div className="header-bottom bg-white h-12 my-1 w-full">
          <div className={`header-bottom-container ${container_config} h-full`}>
            <ul className="flex justify-around items-center mt-5 text-primary text-[16px]">
                <li className={item_nav_config}><a href="/promocao">PROMOÇÃO</a></li>
                <li className={item_nav_config}><a href="/blusas">PARTE DE CIMA</a></li>
                <li className={item_nav_config}><a href="/vestidos">VESTIDOS</a></li>
                <li className={item_nav_config}><a href="/saias">PARTE DE BAIXO</a></li>
                <li className={item_nav_config}><a href="/conjuntos">CONJUNTOS</a></li>
                <li className={item_nav_config}><a href="/pre-venda">PRÉ-VENDA</a></li>
                <li className="py-1 w-full font-main font-semibold tracking-widest text-center"><a href="/mais-vendidos">MAIS VENDIDOS</a></li>
            </ul>
          </div>
      </div>
    </div>
  );
};