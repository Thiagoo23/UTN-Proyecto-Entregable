# Host: localhost  (Version 5.5.5-10.4.28-MariaDB)
# Date: 2024-07-25 20:56:39
# Generator: MySQL-Front 6.1  (Build 1.26)


#
# Structure for table "usuarios"
#

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios` (
  `id_emp` int(255) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(250) NOT NULL,
  `telefono` int(20) NOT NULL,
  `n_socio` int(15) NOT NULL,
  PRIMARY KEY (`id_emp`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

#
# Data for table "usuarios"
#

INSERT INTO `usuarios` VALUES (12,'thiagoborro','borrothiago@gmail.com','21f6f6a3238819e436724fe2a508ecde',12345678,13411);
