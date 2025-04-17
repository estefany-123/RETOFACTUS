-- CreateTable
CREATE TABLE `product` (
    `code_reference` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `quantity` INTEGER NOT NULL,
    `discount_rate` INTEGER NOT NULL,
    `price` INTEGER NOT NULL,
    `tax_rate` VARCHAR(191) NOT NULL,
    `unit_measure_id` INTEGER NOT NULL,
    `standard_code_id` INTEGER NOT NULL,
    `is_excluded` INTEGER NOT NULL,
    `tribute_id` INTEGER NOT NULL,

    PRIMARY KEY (`code_reference`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
