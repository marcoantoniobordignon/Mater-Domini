import { createClientSchema } from "@/lib/zod";
import { createClient, getAllClients } from "@/services/cliente";
import { NextResponse } from "next/server";

export async function GET() {
    const allClients = await getAllClients();

    return NextResponse.json(allClients, { status: 200 });
}

export async function POST(request: Request) {
    const body = await request.json();

    const parsed = createClientSchema.safeParse(body);

    if(!parsed.success) {
        let erro_formatado = ''
        const messagem_erro = parsed.error.message.split('\"')
        for (let i = 0; i < messagem_erro.length; i++) {
            if (messagem_erro[i] === 'message') {
                erro_formatado = erro_formatado + messagem_erro[i + 2] + '. '
            }
        }
        return NextResponse.json({ err: erro_formatado.slice(0, -2) }, { status: 400 });
    }

    const data = parsed.data

    try {
        const client = await createClient(data);
        return NextResponse.json(client, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { err: "Erro interno do servidor." },
            { status: 500 }
        );
    }
}
