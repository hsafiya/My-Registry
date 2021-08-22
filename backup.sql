-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: my_registry_db
-- ------------------------------------------------------
-- Server version	8.0.25

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
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category_name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `category_name` (`category_name`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (3,'baby-shower'),(2,'birthday'),(1,'wedding'),(4,'xmas');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item`
--

DROP TABLE IF EXISTS `item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `item` (
  `id` int NOT NULL AUTO_INCREMENT,
  `item_name` varchar(255) NOT NULL,
  `item_url` text NOT NULL,
  `bought` tinyint(1) NOT NULL DEFAULT '0',
  `registry_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `registry_id` (`registry_id`),
  CONSTRAINT `item_ibfk_1` FOREIGN KEY (`registry_id`) REFERENCES `registry` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item`
--

LOCK TABLES `item` WRITE;
/*!40000 ALTER TABLE `item` DISABLE KEYS */;
INSERT INTO `item` VALUES (1,'Shirts','https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',0,1),(2,'Shorts','https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',0,1),(3,'Music','https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',1,2),(4,'Hats','https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',0,2),(5,'Shoes','https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',1,1);
/*!40000 ALTER TABLE `item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `registry`
--

DROP TABLE IF EXISTS `registry`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registry` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `event_date` date DEFAULT NULL,
  `publish` tinyint(1) DEFAULT '0',
  `registry_icon` varchar(255) DEFAULT '/images/giftsicon.jpg',
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `registry_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registry`
--

LOCK TABLES `registry` WRITE;
/*!40000 ALTER TABLE `registry` DISABLE KEYS */;
INSERT INTO `registry` VALUES (1,'victor and co','123 add str, city st',NULL,1,'/images/giftsicon.jpg',1),(2,'2nd','123 add str, city st',NULL,1,'/images/giftsicon.jpg',2),(3,'3rd','123 add str, city st',NULL,1,'/images/giftsicon.jpg',1),(4,'4th','123 add str, city st',NULL,1,'/images/giftsicon.jpg',2);
/*!40000 ALTER TABLE `registry` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `registry_categories`
--

DROP TABLE IF EXISTS `registry_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registry_categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category_id` int DEFAULT NULL,
  `registry_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `registry_categories_registry_id_categoryId_unique` (`registry_id`,`category_id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `registry_categories_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `registry_categories_ibfk_2` FOREIGN KEY (`registry_id`) REFERENCES `registry` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registry_categories`
--

LOCK TABLES `registry_categories` WRITE;
/*!40000 ALTER TABLE `registry_categories` DISABLE KEYS */;
INSERT INTO `registry_categories` VALUES (1,4,1),(2,1,2),(3,2,3),(4,3,4);
/*!40000 ALTER TABLE `registry_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `session`
--

DROP TABLE IF EXISTS `session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `session` (
  `sid` varchar(36) NOT NULL,
  `expires` datetime DEFAULT NULL,
  `data` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `session`
--

LOCK TABLES `session` WRITE;
/*!40000 ALTER TABLE `session` DISABLE KEYS */;
INSERT INTO `session` VALUES ('brFvmEuw7zYwG-qOl6_gUnE6kkV1ByTg','2021-08-20 18:07:04','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2021-08-19 18:07:04','2021-08-19 18:07:04'),('Pr0Vp4-NjWEuyd9BlW_7NHx7Ob6Rfk7E','2021-08-20 06:03:34','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2021-08-16 20:48:29','2021-08-19 06:03:34');
/*!40000 ALTER TABLE `session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `profile_img` varchar(255) DEFAULT 'https://image.flaticon.com/icons/png/512/552/552848.png',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'vic','vic@email.com','$2b$10$kmx0Q.Rrf5SgJclbmn0ZteJDH6hnfk1KE7nWt4NOrmpN62BGU2/nu','https://image.flaticon.com/icons/png/512/552/552848.png','2021-08-19 18:06:57','2021-08-19 18:06:57'),(2,'meht','meht@last.fm','$2b$10$ueRYLrJKgmOXlTnffR/FueN/Vl3X9k1.NE0FwUgnn8GLUXyW1fx3W','https://image.flaticon.com/icons/png/512/552/552848.png','2021-08-19 18:06:57','2021-08-19 18:06:57'),(3,'darn','darn@goo.ne.jp','$2b$10$M/KxWyTOATMEFXjQ64sXR.KfF7bfh6zoQps3Ol9n6fGzQUkrE4yQ.','https://image.flaticon.com/icons/png/512/552/552848.png','2021-08-19 18:06:57','2021-08-19 18:06:57'),(4,'nath','nath@email.com','$2b$10$MyDzHNceUNSkty9zNm74dOj14I0RqBR0buSEZoOjI6R6PcCqZtAL6','https://image.flaticon.com/icons/png/512/552/552848.png','2021-08-19 18:06:57','2021-08-19 18:06:57'),(5,'boo','boo@weather.com','$2b$10$euInW5G7pdshsu811o7lOefAEmq4T2ITE2StOYwY5jk8p3DurGNxK','https://image.flaticon.com/icons/png/512/552/552848.png','2021-08-19 18:06:57','2021-08-19 18:06:57');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-19 15:12:04
