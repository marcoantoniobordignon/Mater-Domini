"use client";

import { SizeFilter } from "./sizeFilter";
import { PriceFilter } from "./priceFilter";
import { ColorFilter } from "./colorFilter";
import { SortFilter } from "./sortFilter";
import { ClearFiltersButton } from "./clearFilterButton";
import { AplyFiltersButton } from "./aplyFilterButton";

export const FiltersSidebar = () => {
  return (
    <aside className="w-full max-w-90 bg-[#faf9f7] p-5 border border-gray-200">
      <h2 className="text-center text-primary font-serif text-4xl mb-6">
        Filtros
      </h2>

      <SizeFilter />
      <PriceFilter />
      <ColorFilter />
      <SortFilter />

      <AplyFiltersButton />
      <ClearFiltersButton />
    </aside>
  );
};
