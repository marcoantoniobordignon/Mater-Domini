import { FilterSection } from "./filterSection";

const sizes = ["PP", "P", "M", "G", "GG", "XGG"];

export const SizeFilter = () => {
  return (
    <FilterSection title="Tamanho">
      <div className="grid grid-cols-3 gap-3">
        {sizes.map(size => (
          <label
            key={size}
            className="flex items-center gap-2 text-xl cursor-pointer"
          >
            <input type="checkbox" className="accent-[#8B6B2E] size-5" />
            {size}
          </label>
        ))}
      </div>
    </FilterSection>
  );
};
