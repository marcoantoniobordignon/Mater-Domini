import z from 'zod'

export const createProductSchema = z.object({
  nome: z.string(),
  categoria: z.string(),
  Promocao: z.boolean().default(false),
  Porcentagem_promocao: z.number().default(0),
  preco: z.number(),
  quantidade_em_estoque: z.number(),
  codigo_fornecedor: z.number(),
  descricao: z.string().optional(),
  rating: z.number().optional(),
  imgURL: z.string().default("")
});


export const updateProductSchema = z.object({
  id: z.number(),
  nome: z.string().optional(),
  categoria: z.string().optional(),
  Promocao: z.boolean().optional(),
  Porcentagem_promocao: z.number().optional(),
  preco: z.number().optional(),
  quantidade_em_estoque: z.number().optional(),
  codigo_fornecedor: z.number().optional(),
  descricao: z.string().optional(),
  rating: z.number().optional(),
  imgURL: z.string().optional()
});


export const deleteProductSchema = z.object({
    id: z.number()
})

export const getProductSchema = z.object({
    id: z.number()
})

export const createClientSchema = z
  .object({
    tipoPessoa: z.enum(["pf", "pj"]),

    nome: z
      .string()
      .trim()
      .min(3, "Nome deve ter no mínimo 3 caracteres")
      .max(30, "Nome deve ter no máximo 30 caracteres"),

    sobrenome: z
      .string()
      .trim()
      .min(3, "Sobrenome deve ter no mínimo 3 caracteres")
      .max(20, "Sobrenome deve ter no máximo 20 caracteres"),

    email: z
      .string()
      .trim()
      .email("Email inválido")
      .toLowerCase(),

    data_de_nascimento: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/, "Data deve estar no formato YYYY-MM-DD"),

    cpf: z
      .string()
      .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "CPF inválido"),

    sexo: z.enum(["M", "F"]),

    telefone: z
      .string()
      .regex(
        /^\(\d{2}\)\s\d{4,5}-\d{4}$/,
        "Telefone inválido"
      ),

    senha: z
      .string()
      .min(8, "Senha deve ter no mínimo 8 caracteres")
      .regex(/[A-Z]/, "Senha deve conter letra maiúscula")
      .regex(/[a-z]/, "Senha deve conter letra minúscula")
      .regex(/\d/, "Senha deve conter número"),

    confirmarSenha: z.string(),
  })
  .refine((data) => data.senha === data.confirmarSenha, {
    path: ["confirmarSenha"],
    message: "As senhas não coincidem",
  });

export type CreateClientDTO = z.infer<typeof createClientSchema>;


export const loginSchema = z.object({
  email: z.string().email(),
  senha: z.string(),
});
