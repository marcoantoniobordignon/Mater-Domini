import { prisma } from "@/lib/prisma"
import { Prisma } from "@prisma/client";
import { CreateClientDTO } from "@/lib/zod";
import bcrypt from "bcryptjs";
import crypto from "crypto";

export const mapClientToPrisma = async (
  data: CreateClientDTO
): Promise<Prisma.clienteCreateInput> => {
  return {
    nome: data.nome,
    sobrenome: data.sobrenome,
    email: data.email,
    cpf: data.cpf,
    sexo: data.sexo,
    telefone: data.telefone,
    tipoPessoa: data.tipoPessoa,
    senha: await bcrypt.hash(data.senha, 10),
    token: crypto.randomBytes(32).toString("hex"),
    data_de_nascimento: new Date(data.data_de_nascimento),
  };
};

export const getAllClients = async () => {
  const res = await prisma.cliente.findMany();
  return res
}

export const createClient = async (data: CreateClientDTO) => {
  const prismaData = await mapClientToPrisma(data);

  return prisma.cliente.create({
    data: prismaData,
  });
};

export const updateClient = async (id: number, dataUser: Prisma.clienteCreateInput) => {
    const res = await prisma.cliente.update({ where: { id }, data: dataUser });
    return res
}

export const deleteClient = async (id: number) => {
    const res = await prisma.cliente.delete({ where: { id } });
    return res
}