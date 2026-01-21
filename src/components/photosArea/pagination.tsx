export const Pagination = () => {
    return (
        <div className="flex justify-between items-center mb-6">
        <p className="text-xl text-gray-600">
          24 produtos encontrados
        </p>

        <select className="border border-gray-300 px-3 py-2 text-xl">
          <option>Ordenar por</option>
          <option>Mais recentes</option>
          <option>Menor preço</option>
          <option>Maior preço</option>
        </select>
      </div>
    )
}