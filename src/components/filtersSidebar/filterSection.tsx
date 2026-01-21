"use client";

import { ReactNode, useState } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

export const FilterSection = ({ title, children }: Props) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="border-b border-gray-300 py-4 font-serif my-5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-2xl text-secundary font-medium outline-none"
      >
        {title}
        <span className="text-[#8B6B2E] size-3">
          {open ? 
            <img src="/svg/arrow.png" alt="seta para cima"
            className="-rotate-90"/>
            : 
            <img src="/svg/arrow.png" alt="seta para baixo"
            className="rotate-90"/>}
        
        </span>
      </button>

      {open && <div className="mt-4">{children}</div>}
    </div>
  );
};
