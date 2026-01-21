import { prisma } from "@/lib/prisma";

type GetProductsServiceType = {
    id: string | null,
    name: string | null,
    price: string | null,
    id_categoria: number | null,
    rating: string | null
}

export const getCategoriesService = async () => {
    try {
        const categories = await prisma.categoria.findMany({
            select: {
                nome: true
            }
        });
        return categories;
    } catch(err) {
        return new Error("Erro ao buscar categorias.");
    }
};

export const getProductsService = async ({ id, name, price, id_categoria, rating }: GetProductsServiceType) => {
    if(id) {
        try {
            const product = await prisma.produto.findUnique({
                where: {
                    id: parseInt(id)
                }
            });
            return product;
        } catch(err) {
            return new Error("Produto não encontrado.");
        }
    }

    try {
        const allProducts = await prisma.produto.findMany({
            where: {
                nome: name? name : undefined,
                preco: price? Number(price) : undefined,
                id_categoria: id_categoria? Number(id_categoria) : undefined,
                rating: rating? Number(rating) : undefined,
            }
        });
        return allProducts;
    } catch(err) {
        return new Error("Erro ao buscar produtos.");
    }
};

export const postProductService = async (data: any) => {
    try {
        const newProduct = await prisma.produto.create({
            data: data
        });
        return newProduct;
    } catch(err) {
        return new Error("Erro ao criar produto.");
    }
};

export const putProductService = async (data: any, id: number) => {
    try {
        const updatedProduct = await prisma.produto.update({
            where: {
                id
            },
            data: data
        });
        return updatedProduct;
    } catch(err) {
        return new Error("Erro ao atualizar produto.");
    }
};

export const deleteProductService = async (id: number) => {
    try {
        const deletedProduct = await prisma.produto.delete({
            where: {
                id
            }
        });
        return deletedProduct;
    } catch(err) {
        return new Error("Erro ao deletar produto.");
    }
};
