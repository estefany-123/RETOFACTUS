-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: brostyarroz
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES ('386fd875-cf75-457c-a46c-36e92df0c7af','d0dc1f1a3aa0b84ab488d37ce8e213d2ae6d57559058b9aff350d1322b259c5d','2025-04-18 03:56:36.765','20250418035636_identification',NULL,NULL,'2025-04-18 03:56:36.743',1),('7e3850fa-f2bb-4065-a013-5e6b3558131f','6480c5edc85d9dec8b12292db4d14cfabdb767c8b9a906f3052b872db5800620','2025-04-17 23:41:40.838','20250417234140_init',NULL,NULL,'2025-04-17 23:41:40.823',1),('81dafdde-32aa-4c07-946e-86fecb179ede','4604fbfaa28e8ba54948d9815f51f1feb5114621f28789b07e874131e90a4eef','2025-04-17 23:53:05.220','20250417235305_quantity_deleted',NULL,NULL,'2025-04-17 23:53:05.206',1),('ea85b8f5-4dfd-44b1-98c8-bec669d980a3','77591b19fd60ce5fb2640bc0910471c1cfad8e3673142f21bff088ca4d99dc6c','2025-04-17 23:51:15.859','20250417235115_product',NULL,NULL,'2025-04-17 23:51:15.848',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `client`
--

DROP TABLE IF EXISTS `client`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `client` (
  `identification` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dv` int DEFAULT NULL,
  `company` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `trade_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `names` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `legal_organization_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tribute_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `identification_document_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `municipality_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`identification`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client`
--

LOCK TABLES `client` WRITE;
/*!40000 ALTER TABLE `client` DISABLE KEYS */;
INSERT INTO `client` VALUES ('107025478',3,'','','Stefanny Parada','Calle 15 # 5-82','stefanny@enigmasas.com','1234567890','2','21','3','90'),('123456589',3,'','','Perez Lopez','Carrera 5 # 1-21','perezlopes@enigmasas.com','1234567890','2','21','3','80'),('123456789',3,'','','Alan Turing','Calle 1 # 2-68','alanturing@enigmasas.com','1234567890','2','21','3','980');
/*!40000 ALTER TABLE `client` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `code_reference` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `discount_rate` int NOT NULL,
  `price` int NOT NULL,
  `tax_rate` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `unit_measure_id` int NOT NULL,
  `standard_code_id` int NOT NULL,
  `is_excluded` int NOT NULL,
  `tribute_id` int NOT NULL,
  PRIMARY KEY (`code_reference`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES ('CC-005','Coca-Cola Personal',0,4000,'19.00',70,1,1,1),('HIT-006','Hit Personal',0,3500,'19.00',70,1,1,1),('P1-001','P1',0,9500,'19.00',70,1,1,1),('P2-002','P2',0,10000,'19.00',70,1,1,1),('P3-003','P3',0,11000,'19.00',70,1,1,1),('P4-004','P4',0,11500,'19.00',70,1,1,1);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-17 23:13:37
