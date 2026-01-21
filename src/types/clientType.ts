import { cliente } from "@prisma/client"

export type LocalStrategyResponse = {
    auth: { token: string },
    cliente: cliente
}