export type productType = {
    id: number,
    nome: string,
    preco: number,
    descricao: string,
    codigo_fornecedor: number,
    categoria: string,
    quantidade_estoque: number,
    rating: number,
    promocao: boolean,
    porcentagem_desconto: number,
    imageURL: string
}

export type addProductType = {
    name: string,
    price: number,
    description: string,
    codigo_fornecedor: number,
    category: string,
    quantidade_estoque: number,
    rating: number,
    promocao: boolean,
    porcentagem_desconto: number,
    imageURL: string
}

export type updateProductType = {
    id: number,
    name?: string,
    price?: number,
    description?: string,
    codigo_fornecedor?: string,
    category?: string,
    quantidade_estoque?: number,
    rating?: number,
    promocao?: boolean,
    porcentagem_desconto?: number,
    imageURL?: string
}

export type deleteProductType = {
    id: number
}