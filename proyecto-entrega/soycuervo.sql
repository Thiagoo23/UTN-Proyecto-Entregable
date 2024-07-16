# Host: localhost  (Version 5.5.5-10.4.28-MariaDB)
# Date: 2024-07-16 19:48:33
# Generator: MySQL-Front 6.1  (Build 1.26)


#
# Structure for table "cuentas"
#

DROP TABLE IF EXISTS `cuentas`;
CREATE TABLE `cuentas` (
  `id_emp` int(255) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(80) NOT NULL,
  `apellido` varchar(80) NOT NULL,
  `email` varchar(100) NOT NULL,
  `contraseña` varchar(20) NOT NULL,
  `telefono` int(20) NOT NULL,
  `n°socio` int(15) NOT NULL,
  PRIMARY KEY (`id_emp`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

#
# Data for table "cuentas"
#

