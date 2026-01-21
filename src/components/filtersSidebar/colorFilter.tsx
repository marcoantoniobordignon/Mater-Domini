import { FilterSection } from "./filterSection";

const colors = [
  "#FFFFFF",
  "#F5E6C8",
  "#F4C2C2",
  "#D32F2F",
  "#388E3C",
  "#1C1C1C",
  "#3F5C8A"
];

export const ColorFilter = () => {
  return (
    <FilterSection title="Cor">
      <div className="flex gap-3 flex-wrap">
        {colors.map(color => (
          <button
            key={color}
            style={{ backgroundColor: color }}
            className="w-7 h-7 rounded-full border border-gray-400 hover:outline-3 hover:outline-[#8B6B2E] hover:cursor-pointer"
          />
        ))}
      </div>
    </FilterSection>
  );
};
