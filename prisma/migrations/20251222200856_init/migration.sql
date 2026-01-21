-- CreateTable
CREATE TABLE `cliente` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(20) NOT NULL,
    `sobrenome` VARCHAR(20) NOT NULL,
    `sexo` CHAR(1) NOT NULL,
    `data_de_nascimento` DATE NULL,
    `email` VARCHAR(50) NOT NULL,
    `cashback` DECIMAL(5, 2) NULL,
    `funcao` VARCHAR(5) NULL DEFAULT 'user',
    `data_primeira_compra` DATE NULL DEFAULT (now()),
    `quantidade_compras` INTEGER NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
