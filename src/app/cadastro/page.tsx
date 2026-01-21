"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { HeaderSidePages } from "@/components/sidePagesElements/header";
import { FooterSidePages } from "@/components/sidePagesElements/footer";
import { MainSidePages } from "@/components/sidePagesElements/main";
import { InputSidePages } from "@/components/sidePagesElements/inputSidePages";
import { ButtonSidePages } from "@/components/sidePagesElements/button";
import axios from "axios";

const PageCadastro = () => {
   const [nome, setNome] = useState('');
   const [sobrenome, setSobrenome] = useState('');
   const [cpf, setCpf] = useState('');
   const [sexo, setSexo] = useState('');
   const [dataDeNascimento, setDataDeNascimento] = useState('');
   const [telefone, setTelefone] = useState('');
   const [email, setEmail] = useState('');
   const [senha, setSenha] = useState('');
   const [confirmarSenha, setConfirmarSenha] = useState('');
   const [error, setError] = useState('');
   const [tipoPessoa, setTipoPessoa] = useState('');

   const router = useRouter();

   const handleSubmit = async () => {
      const data = {
          nome,
          sobrenome,
          cpf,
          sexo,
          data_de_nascimento: dataDeNascimento,
          telefone,
          email,
          senha,
          confirmarSenha,
          tipoPessoa  
      }

      setError('');

      try {
         const response = await axios.post("/api/conta", data);
         if (response.status === 201) {
            router.push('/conta');
         }
      } catch (err: any) {
         const status = err?.response?.status;
         const apiError = err?.response?.data?.err ?? err?.response?.data?.message;

         if (status === 400) {
            setError(apiError ?? 'Dados inválidos. Verifique o formulário e tente novamente.');
         } else if (status) {
            setError(apiError ?? `Erro do servidor (${status}). Tente novamente mais tarde.`);
         } else {
            setError('Erro de rede. Verifique sua conexão e tente novamente.');
         }
      }

   };

     return (
        <div className="w-full">
         <HeaderSidePages />
         <MainSidePages>
            <select name="pj/pf" id="" value={tipoPessoa} onChange={e => setTipoPessoa(e.target.value)}
            className="my-5 w-150 py-4 pl-5 rounded-md text-lg border border-black/30">
               <option value="pf">Pessoa Física</option>
               <option value="pj">Pessoa Jurídica</option>
            </select>
            <div className="flex gap-x-3 w-full">
               <InputSidePages content={nome} setContent={setNome} placeholder="Nome" type="text" />
               <InputSidePages content={sobrenome} setContent={setSobrenome} placeholder="Sobrenome" type="text" />
            </div>
            <InputSidePages content={email} setContent={setEmail} placeholder="E-mail" type="email" />
            <div className="flex gap-x-3 w-full">
               <InputSidePages content={dataDeNascimento} setContent={setDataDeNascimento} placeholder="Data de Nascimento" type="date" />
               <select name="genero" id="genero" value={sexo} onChange={e => setSexo(e.target.value)}
                  className="my-5 w-full py-4 pl-5 rounded-md text-lg border border-black/30">
                  <option value="F">Feminino</option>
                  <option value="M">Masculino</option>
               </select>
            </div>
            <div className="flex gap-x-3 w-full">
               <InputSidePages content={cpf} setContent={setCpf} placeholder="CPF" type="text" />
               <InputSidePages content={telefone} setContent={setTelefone} placeholder="Telefone" type="tel" />
            </div>
            <div className="flex gap-x-3 w-full">
               <InputSidePages content={senha} setContent={setSenha} placeholder="Senha" type="password" />
               <InputSidePages content={confirmarSenha} setContent={setConfirmarSenha} placeholder="Confirmar Senha" type="password" />
            </div>

            <div className="w-full mb-2 bg-[#FFFFFF] text-red-500 font-medium"> {error}</div>

            <div className="flex w-full justify-start items-center">
               <input type="checkbox" name="novidadesCheckbox" id="novidadesCheckbox" 
                  className="size-5 border-2 border-[#705656]"/>
               <label
                  htmlFor="novidadesCheckbox"
                  className="ml-2 text-lg text-gray-500">
                     Inscreva-se para receber novidades e promoções da Mater Domini.
               </label>
            </div>

            <ButtonSidePages title="Cadastrar" onClick={handleSubmit} />
            <aside className="my-5 text-md text-gray-500">Ao criar uma conta você está de acordo com nossa <a href="" className="text-black font-bold">política de privacidade</a>.</aside>

            <a href="/login" className="text-lg font-medium">Voltar para o login.</a>
         </MainSidePages>
         <FooterSidePages />
        </div>
     );

};

export default PageCadastro;