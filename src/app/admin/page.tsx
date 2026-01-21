"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { HeaderSidePages } from "@/components/sidePagesElements/header";
import { MainSidePages } from "@/components/sidePagesElements/main";
import { FooterSidePages } from "@/components/sidePagesElements/footer";
import { ButtonSidePages } from "@/components/sidePagesElements/button";
import { InputSidePages } from "@/components/sidePagesElements/inputSidePages";

export default function AdminPage() {
  const [token, setToken] = useState("");
  const router = useRouter();

  const handleVerify = async () => {
    try {
      await axios.post("/api/admin/verify", { token });
      router.push("/admin/home");
    } catch {
      alert("Token inválido");
    }
  };

  return (
          <div className="w-full">
           <HeaderSidePages />
           <MainSidePages>
              <div className="flex flex-col justify-center items-center w-180 rounded-lg p-10">
                    <h1 className="inline-block text-3xl font-medium font-sans">Verifique seu token</h1>
                    <div className="w-150">
                       <InputSidePages content={token} setContent={setToken} placeholder="Digite seu token" type="password" />
                    </div>
                    <ButtonSidePages title="Continuar" onClick={handleVerify} />
              </div>
           </MainSidePages>
           <FooterSidePages />
          </div>
       );
}
