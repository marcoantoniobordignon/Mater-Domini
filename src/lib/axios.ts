import axios from 'axios';
import { addProductType, productType, updateProductType } from '@/types/productTypes';


export const api = axios.create({
    baseURL: 'http://localhost:3000/api'
});

export const getAllProducts = async (): Promise<productType[]> => {
    const response = await api.get('/produtos')
    return response.data
};

export const getProductsByFilter = async (filter: string): Promise<productType[]> => {
    const response = await api.get(`/produtos?${filter}`)
    return response.data
};

export const getProductById = async (id: string): Promise<productType> => {
    const response = await api.get(`/produtos?id=${id}`)
    return response.data
};

export const addProducts = async (data: addProductType[]) => {
    const response = await api.post('/produtos', data)
    return response.data
};

export const updateProductById = async (id: string, data: updateProductType) => {
    const response = await api.put(`/produtos?id=${id}`, data)
    return response.data
};

export const updateProductsByFilter = async (filter: string, data: updateProductType) => {
    const response = await api.put(`/produtos?${filter}`, data)
    return response.data
};

export const deleteProductById = async (id: string) => {
    const response = await api.delete(`/produtos?id=${id}`)
    return response.data
};

export const getAllCategories = async (): Promise<string[]> => {
    const response = await api.get('/produtos/categorias')
    return response.data
}

export const getTotalVendasPorAno = async (ano: number): Promise<{ total: number }> => {
    const response = await api.get(`/admin/report?ano=${ano}`)
    return response.data
};

export const getTotalVendasPorMesPorAno = async (ano: number): Promise<{ mes: number, total: number }[]> => {
    const response = await api.get(`/admin/report/monthly?ano=${ano}`)
    return response.data
};