import { useMutation } from "@tanstack/react-query"
import { addProducts, deleteProductById, updateProductById, updateProductsByFilter } from "./axios"
import { updateProductType } from "@/types/productTypes"


export const useAddProducts = () => {
    return useMutation({
        mutationFn: addProducts
    })
}

export const useUpdateProductsByFilter = (filter: string, data: updateProductType) => {
    return useMutation({
        mutationFn: () => updateProductsByFilter(filter, data)
    })
}

export const useUpdateProductById = (id: string, data: updateProductType) => {
    return useMutation({
        mutationFn: () => updateProductById(id, data)
    })
}

export const useDeleteProductById = (id: string) => {
    return useMutation({
        mutationFn: () => deleteProductById(id)
    })
}