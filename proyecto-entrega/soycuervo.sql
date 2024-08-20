# Host: localhost  (Version 5.5.5-10.4.32-MariaDB)
# Date: 2024-08-20 19:47:00
# Generator: MySQL-Front 6.1  (Build 1.26)


#
# Structure for table "cuenta"
#

DROP TABLE IF EXISTS `cuenta`;
CREATE TABLE `cuenta` (
  `id` int(250) NOT NULL AUTO_INCREMENT,
  `titulo` int(11) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `precio` varchar(150) NOT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

#
# Data for table "cuenta"
#

INSERT INTO `cuenta` VALUES (2,0,'123','100','');

#
# Structure for table "usuarios"
#

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(250) NOT NULL,
  `telefono` int(20) NOT NULL,
  `n_socio` int(15) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

#
# Data for table "usuarios"
#

INSERT INTO `usuarios` VALUES (4,'thiago','borrothiago@gmail.com','0c55035086af02b6ed8865fc34e15dfa',12345678,13411);
