import { createProductSchema, deleteProductSchema, updateProductSchema } from "@/lib/zod";
import { deleteProductService, getProductsService, postProductService, putProductService } from "@/services/produtos";
import { NextResponse } from "next/server";


export async function GET(request: Request) {

    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id');
    const name = searchParams.get('name');
    const price = searchParams.get('price');
    const id_categoria = Number(searchParams.get('id_categoria'));
    const rating = searchParams.get('rating');

    const response = await getProductsService({id, name, price, rating, id_categoria});

    if(response) {
        return NextResponse.json(response, { status: 200 });
    }

    return NextResponse.error();
}

export async function POST(request: Request) {

    const body = await request.json();

    const result = createProductSchema.safeParse(body);

    if(!result.success) {
        return NextResponse.json({ err: "Os dados enviados estão incorretos." });
    }

    const data = result.data

    const response = await postProductService(data);

    if(response) {
        return NextResponse.json(response, { status: 200 });
    }

    return NextResponse.error();
}

export async function PUT(request: Request) {

    const body = await request.json();

    const result = updateProductSchema.safeParse(body);

    if(!result.success) {
        return NextResponse.json({ err: "Os dados enviados estão incorretos." });
    }

    const { id, ...data } = result.data

    const response = await putProductService(data, id)

    if(response) {
        return NextResponse.json(response, { status: 200 });
    }

    return NextResponse.error();
}

export async function DELETE(request: Request) {

    const { searchParams } = new URL(request.url)
    const id = Number(searchParams.get('id'));

    const response = await deleteProductService(id);

    if(response) {
        return NextResponse.json(response, { status: 200 });
    }

    return NextResponse.error();
}