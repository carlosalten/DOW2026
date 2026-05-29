-- CreateTable
CREATE TABLE `Arriendo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `marca` VARCHAR(50) NOT NULL,
    `modelo` VARCHAR(50) NOT NULL,
    `patente` VARCHAR(6) NOT NULL,
    `monto` INTEGER NOT NULL,
    `inicio` DATETIME(3) NOT NULL,
    `termino` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
