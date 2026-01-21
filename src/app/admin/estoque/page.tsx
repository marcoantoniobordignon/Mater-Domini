"use client";

import axios from "axios";
import { useState } from "react";

function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-gray-100 flex flex-col">
      <div className="text-3xl p-4 font-semibold border-b border-gray-700">
        ChatGPT Clone
      </div>
      <nav className="flex-1 p-4 space-y-2 text-lg">
        <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-800">
          Novo Chat
        </button>
        <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-800">
          Conversa 1
        </button>
        <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-800">
          Conversa 2
        </button>
      </nav>
    </aside>
  );
}

type Message = {
  role: string;
  content: string;
};

function Message({ role, content }: Message) {
  const isUser = role === "user";
  return (
    <div
      className={`w-full flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-2xl px-4 py-3 rounded-lg text-sm leading-relaxed \
          ${isUser ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-900"}`}
      >
        {content}
      </div>
    </div>
  );
}

type PropsChatWindow = {
  messages: Message[];
};

function ChatWindow({ messages }: PropsChatWindow) {
  return (
    <main className="flex-1 bg-gray-100 p-6 overflow-y-auto space-y-4">
      {messages.map((msg, idx) => (
        <Message key={idx} role={msg.role} content={msg.content}/>
      ))}
    </main>
  );
}

function ChatInput({ onSend }: { onSend: (msg: string) => void }) {
  const [value, setValue] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();
    if (!value.trim()) return;
    onSend(value);
    setValue("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border-t border-gray-300 bg-white p-4"
    >
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Envie uma mensagem"
          className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          Enviar
        </button>
      </div>
    </form>
  );
}

export default function Chat() {
  const [resposta, setResposta] = useState("");
  const [erro, setErro] = useState("");

  const [messages, setMessages] = useState<Message[]>([
  { role: "assistant", content: "Olá, como posso ajudar?"},
  ]);

  const getPergunta = async (pergunta: string) => {
    setErro("");
    setResposta("");

    try {
      const response = await axios.post(
        "http://localhost:8000/question",
        {
          pergunta: pergunta
        },
        {
          timeout: 10000 // 10 segundos
        }
      );

      setResposta(response.data.message);
      return response.data.message;
    } catch (err: any) {
      if (err.code === "ECONNABORTED") {
        setErro("Tempo limite excedido (backend demorou demais).");
      } else if (err.response) {
        setErro(`Erro do servidor: ${err.response.status}`);
      } else {
        setErro("Erro de conexão com o backend.");
      }
      throw err;
    }
  };

  async function handleSend(pergunta: string) {
    setMessages((prev) => [
      ...prev,
      { role: "user", content: pergunta},
    ]);

    try {

      const resposta = await getPergunta(pergunta);

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: resposta },
      ]);

    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Erro:" + err },
      ]);
    }
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <ChatWindow messages={messages} />
        <ChatInput onSend={handleSend} />
      </div>
    </div>
  );
}


