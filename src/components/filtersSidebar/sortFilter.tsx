import { FilterSection } from "./filterSection";

export const SortFilter = () => {
  return (
    <FilterSection title="Ordenar por">
      <select className="w-full border border-gray-300 p-2 text-xl rounded outline-none">
        <option>Mais recentes</option>
        <option>Menor preço</option>
        <option>Maior preço</option>
        <option>Mais vendidos</option>
      </select>
    </FilterSection>
  );
};
