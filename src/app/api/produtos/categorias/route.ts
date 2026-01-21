import { NextResponse } from "next/server";

export function GET() {
    try {
        
    } catch (error) {
        return NextResponse.json({ err: "Erro interno do servidor." }, { status: 500 });   
    }
}