-- CreateTable
CREATE TABLE `client` (
    `identification` INTEGER NOT NULL,
    `dv` INTEGER NULL,
    `company` VARCHAR(191) NULL,
    `trade_name` VARCHAR(191) NULL,
    `names` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `legal_organization_id` VARCHAR(191) NOT NULL,
    `tribute_id` VARCHAR(191) NOT NULL,
    `identification_document_id` VARCHAR(191) NOT NULL,
    `municipality_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`identification`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
