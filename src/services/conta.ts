import { prisma } from "@/lib/prisma"
import crypto from "crypto";

export const findUserByEmailAndPassword = async (email: string) => {
    try {
        const res = await prisma.cliente.findFirst({
        where: {
            email: email
        }
    })

    if(res) {
        return res
    }

    return null

    } catch (error) {
        return null
    }  
}

export function generateUserToken(length = 32): string {
  return crypto.randomBytes(length).toString("hex");
}


