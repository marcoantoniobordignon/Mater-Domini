"use client"

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { HeaderSidePages } from "@/components/sidePagesElements/header";
import { FooterSidePages } from "@/components/sidePagesElements/footer";
import { MainSidePages } from "@/components/sidePagesElements/main";
import { InputSidePages } from "@/components/sidePagesElements/inputSidePages";
import { ButtonSidePages } from "@/components/sidePagesElements/button";
import { useAvatar } from "@/contexts/avatarCtx";

const PageConta = () => {
   const router = useRouter();
   const { setAvatar } = useAvatar();

   const [email, setEmail] = useState('');
   const [senha, setSenha] = useState('');
   const [error, setError] = useState('');

   const handleSubmit = async () => {
      try {
         const response = await axios.post("/api/login", { email, senha });

         if(response.status >= 200 && response.status < 300) {
            setAvatar("https://static.vecteezy.com/system/resources/previews/024/983/914/original/simple-user-default-icon-free-png.png");

            if(response.data.role === "admin") {
               router.push('/admin');
            } else {
               router.push('/');
            }

         }
      } catch (err: any) {
         if(axios.isAxiosError(err)) {
            if(err.response?.status === 401) {
               setError("E-mail ou senha incorretos.");
            }
         }
      }
   };

     return (
        <div className="w-full">
         <HeaderSidePages />
         <MainSidePages>
            <div className="flex flex-col justify-center items-center w-180 rounded-lg p-10">
                  <h1 className="inline-block text-3xl font-medium font-sans">Fazer login</h1>
                  <div className="w-150">
                     <InputSidePages content={email} setContent={setEmail} placeholder="E-MAIL ou CPF/CNPJ" type="email" />
                  </div>
                  <div className="w-150">
                     <InputSidePages content={senha} setContent={setSenha} placeholder="Senha" type="password" />
                  </div>
                  {error && <p className="text-md text-red-500">{error}</p>}
                  <ButtonSidePages title="Continuar" onClick={handleSubmit} />
                  <div className="text-lg">Não tem uma conta? <a href="/cadastro" className="text-[#684B4B] hover:underline">Cadastre-se</a></div>
            </div>
         </MainSidePages>
         <FooterSidePages />
        </div>
     );

};

export default PageConta;