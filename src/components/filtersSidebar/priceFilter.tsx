import { FilterSection } from "./filterSection";

export const PriceFilter = () => {
  return (
    <FilterSection title="Faixa de Preço">
      <div className="flex flex-col gap-4">
        <input
          type="range"
          min={50}
          max={300}
          className="accent-(var(--primary)) outline-none"
        />

        <div className="flex justify-between text-xl">
          <span>R$ 50</span>
          <span>R$ 300</span>
        </div>

        <button className="border border-gray-400/50 shadow-sm text-xl py-1 rounded hover:bg-gray-100 hover:cursor-pointer">
          Aplicar
        </button>
      </div>
    </FilterSection>
  );
};
