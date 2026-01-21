"use client"

import { useQuery } from "@tanstack/react-query"
import { getAllCategories, getAllProducts, getProductById, getProductsByFilter, getTotalVendasPorAno } from "./axios"
import { getTotalVendasPorMesPorAno } from "@/lib/axios"


export const useAllProductsQuery = ()=> {
    const query = useQuery({
        queryKey: ['all-products'],
        queryFn: getAllProducts
    })

    return query
}

export const useProductsByFilterQuery = (filter: any)=> {
    const params = new URLSearchParams(filter).toString();

    const query = useQuery({
        queryKey: ['filtered-products', filter],
        queryFn: () => getProductsByFilter(params)
    })

    return query
}

export const useProductByIdQuery = (id: string) => {
    const query = useQuery({
        queryKey: ['product', id],
        queryFn: () => getProductById(id)
    })

    return query
}

export const useTotalSalesByYearQuery = (ano: number) => {
    const query = useQuery({
        queryKey: ['sales-by-year', ano],
        queryFn: () => getTotalVendasPorAno(ano)
    })

    return query
}

export const useSalesByMonthQuery = (ano: number) => {
    const query = useQuery({
        queryKey: ['sales-by-month', ano],
        queryFn: () => getTotalVendasPorMesPorAno(ano)
    })

    return query
}

export const useAllCategoriesQuery = () => {
    const query = useQuery({
        queryKey: ['all-categories'],
        queryFn: () => getAllCategories()
    })

    return query
}