-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-12-2018 a las 06:48:15
-- Versión del servidor: 10.1.31-MariaDB
-- Versión de PHP: 7.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mydb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_archivos`
--

CREATE TABLE `tbl_archivos` (
  `id_archivos` int(11) NOT NULL,
  `nombre_archivo` varchar(45) NOT NULL,
  `id_lenguajes` int(11) NOT NULL,
  `id_carpetas` int(11) NOT NULL,
  `id_usuarios` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_carpetas`
--

CREATE TABLE `tbl_carpetas` (
  `id_carpetas` int(11) NOT NULL,
  `nombre_carpeta` varchar(45) NOT NULL,
  `id_usuarios` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_compartir_archivos`
--

CREATE TABLE `tbl_compartir_archivos` (
  `id_archivos` int(11) NOT NULL,
  `id_usuarios` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_compartir_carpeta`
--

CREATE TABLE `tbl_compartir_carpeta` (
  `id_carpetas` int(11) NOT NULL,
  `id_usuarios` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_compartir_proyectos`
--

CREATE TABLE `tbl_compartir_proyectos` (
  `id_usuarios` int(11) NOT NULL,
  `id_proyectos` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_grupo_trabajo`
--

CREATE TABLE `tbl_grupo_trabajo` (
  `id_grupo_trabajo` int(11) NOT NULL,
  `nombre_grupo` varchar(45) NOT NULL,
  `id_usuarios` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_lenguajes`
--

CREATE TABLE `tbl_lenguajes` (
  `id_lenguajes` int(11) NOT NULL,
  `lenguaje` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_planes`
--

CREATE TABLE `tbl_planes` (
  `id_planes` int(11) NOT NULL,
  `nombre_plan` varchar(45) NOT NULL,
  `monto` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tbl_planes`
--

INSERT INTO `tbl_planes` (`id_planes`, `nombre_plan`, `monto`) VALUES
(1, 'Gratis', 0),
(2, 'Profesional', 15),
(3, 'Enterprise', 29);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_proyectos`
--

CREATE TABLE `tbl_proyectos` (
  `id_proyectos` int(11) NOT NULL,
  `nombre_proyecto` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_snippets`
--

CREATE TABLE `tbl_snippets` (
  `id_snippets` int(11) NOT NULL,
  `nombre_snippet` varchar(500) NOT NULL,
  `contenido` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_snippets_carpetas`
--

CREATE TABLE `tbl_snippets_carpetas` (
  `id_snippets` int(11) NOT NULL,
  `id_carpetas` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_usuarios`
--

CREATE TABLE `tbl_usuarios` (
  `id_usuarios` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `correo` varchar(45) NOT NULL,
  `nombre_usuario` varchar(45) NOT NULL,
  `contrasena` varchar(45) NOT NULL,
  `imagen_perfil` varchar(400) NOT NULL,
  `id_planes` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tbl_usuarios`
--

INSERT INTO `tbl_usuarios` (`id_usuarios`, `nombre`, `apellido`, `correo`, `nombre_usuario`, `contrasena`, `imagen_perfil`, `id_planes`) VALUES
(18, 'Josue', 'Bonilla', 'xixojabm@gmail.com', 'Josue Bonilla', 'bcdcb29ed2aab16d48c11485264df665e906bdd9', 'img/usuarios/avatar.png', 1),
(19, 'Stan', 'Marsh', 'stan@gmail.com', 'stan_marsh', 'bcdcb29ed2aab16d48c11485264df665e906bdd9', 'img/usuarios/avatar.png', 1),
(22, 'Josue', 'Bonilla', 'xixojabm@gmail.com', 'Josue Bonilla', 'bcdcb29ed2aab16d48c11485264df665e906bdd9', 'img/usuarios/avatar.png', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tbl_archivos`
--
ALTER TABLE `tbl_archivos`
  ADD PRIMARY KEY (`id_archivos`),
  ADD KEY `fk_tbl_archivos_tbl_lenguajes1` (`id_lenguajes`),
  ADD KEY `fk_tbl_archivos_tbl_carpetas1` (`id_carpetas`),
  ADD KEY `fk_tbl_archivos_tbl_usuarios1` (`id_usuarios`);

--
-- Indices de la tabla `tbl_carpetas`
--
ALTER TABLE `tbl_carpetas`
  ADD PRIMARY KEY (`id_carpetas`),
  ADD KEY `fk_tbl_carpetas_tbl_usuarios1` (`id_usuarios`);

--
-- Indices de la tabla `tbl_compartir_archivos`
--
ALTER TABLE `tbl_compartir_archivos`
  ADD KEY `fk_tbl_archivos_has_tbl_usuarios_tbl_usuarios1` (`id_usuarios`),
  ADD KEY `fk_tbl_archivos_has_tbl_usuarios_tbl_archivos1` (`id_archivos`);

--
-- Indices de la tabla `tbl_compartir_carpeta`
--
ALTER TABLE `tbl_compartir_carpeta`
  ADD KEY `fk_tbl_carpetas_has_tbl_usuarios_tbl_usuarios1` (`id_usuarios`),
  ADD KEY `fk_tbl_carpetas_has_tbl_usuarios_tbl_carpetas1` (`id_carpetas`);

--
-- Indices de la tabla `tbl_compartir_proyectos`
--
ALTER TABLE `tbl_compartir_proyectos`
  ADD KEY `fk_tbl_usuarios_has_tbl_proyectos_tbl_proyectos1` (`id_proyectos`),
  ADD KEY `fk_tbl_usuarios_has_tbl_proyectos_tbl_usuarios1` (`id_usuarios`);

--
-- Indices de la tabla `tbl_grupo_trabajo`
--
ALTER TABLE `tbl_grupo_trabajo`
  ADD PRIMARY KEY (`id_grupo_trabajo`),
  ADD KEY `fk_tbl_grupo_trabajo_tbl_usuarios1` (`id_usuarios`);

--
-- Indices de la tabla `tbl_lenguajes`
--
ALTER TABLE `tbl_lenguajes`
  ADD PRIMARY KEY (`id_lenguajes`);

--
-- Indices de la tabla `tbl_planes`
--
ALTER TABLE `tbl_planes`
  ADD PRIMARY KEY (`id_planes`);

--
-- Indices de la tabla `tbl_proyectos`
--
ALTER TABLE `tbl_proyectos`
  ADD PRIMARY KEY (`id_proyectos`);

--
-- Indices de la tabla `tbl_snippets`
--
ALTER TABLE `tbl_snippets`
  ADD PRIMARY KEY (`id_snippets`);

--
-- Indices de la tabla `tbl_snippets_carpetas`
--
ALTER TABLE `tbl_snippets_carpetas`
  ADD KEY `fk_tbl_snippets_has_tbl_carpetas_tbl_carpetas1` (`id_carpetas`),
  ADD KEY `fk_tbl_snippets_has_tbl_carpetas_tbl_snippets1` (`id_snippets`);

--
-- Indices de la tabla `tbl_usuarios`
--
ALTER TABLE `tbl_usuarios`
  ADD PRIMARY KEY (`id_usuarios`),
  ADD KEY `fk_tbl_usuarios_tbl_planes` (`id_planes`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tbl_archivos`
--
ALTER TABLE `tbl_archivos`
  MODIFY `id_archivos` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tbl_carpetas`
--
ALTER TABLE `tbl_carpetas`
  MODIFY `id_carpetas` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tbl_grupo_trabajo`
--
ALTER TABLE `tbl_grupo_trabajo`
  MODIFY `id_grupo_trabajo` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tbl_lenguajes`
--
ALTER TABLE `tbl_lenguajes`
  MODIFY `id_lenguajes` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tbl_planes`
--
ALTER TABLE `tbl_planes`
  MODIFY `id_planes` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `tbl_proyectos`
--
ALTER TABLE `tbl_proyectos`
  MODIFY `id_proyectos` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tbl_snippets`
--
ALTER TABLE `tbl_snippets`
  MODIFY `id_snippets` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tbl_usuarios`
--
ALTER TABLE `tbl_usuarios`
  MODIFY `id_usuarios` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `tbl_archivos`
--
ALTER TABLE `tbl_archivos`
  ADD CONSTRAINT `fk_tbl_archivos_tbl_carpetas1` FOREIGN KEY (`id_carpetas`) REFERENCES `tbl_carpetas` (`id_carpetas`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_tbl_archivos_tbl_lenguajes1` FOREIGN KEY (`id_lenguajes`) REFERENCES `tbl_lenguajes` (`id_lenguajes`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_tbl_archivos_tbl_usuarios1` FOREIGN KEY (`id_usuarios`) REFERENCES `tbl_usuarios` (`id_usuarios`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `tbl_carpetas`
--
ALTER TABLE `tbl_carpetas`
  ADD CONSTRAINT `fk_tbl_carpetas_tbl_usuarios1` FOREIGN KEY (`id_usuarios`) REFERENCES `tbl_usuarios` (`id_usuarios`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `tbl_compartir_archivos`
--
ALTER TABLE `tbl_compartir_archivos`
  ADD CONSTRAINT `fk_tbl_archivos_has_tbl_usuarios_tbl_archivos1` FOREIGN KEY (`id_archivos`) REFERENCES `tbl_archivos` (`id_archivos`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_tbl_archivos_has_tbl_usuarios_tbl_usuarios1` FOREIGN KEY (`id_usuarios`) REFERENCES `tbl_usuarios` (`id_usuarios`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `tbl_compartir_carpeta`
--
ALTER TABLE `tbl_compartir_carpeta`
  ADD CONSTRAINT `fk_tbl_carpetas_has_tbl_usuarios_tbl_carpetas1` FOREIGN KEY (`id_carpetas`) REFERENCES `tbl_carpetas` (`id_carpetas`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_tbl_carpetas_has_tbl_usuarios_tbl_usuarios1` FOREIGN KEY (`id_usuarios`) REFERENCES `tbl_usuarios` (`id_usuarios`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `tbl_compartir_proyectos`
--
ALTER TABLE `tbl_compartir_proyectos`
  ADD CONSTRAINT `fk_tbl_usuarios_has_tbl_proyectos_tbl_proyectos1` FOREIGN KEY (`id_proyectos`) REFERENCES `tbl_proyectos` (`id_proyectos`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_tbl_usuarios_has_tbl_proyectos_tbl_usuarios1` FOREIGN KEY (`id_usuarios`) REFERENCES `tbl_usuarios` (`id_usuarios`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `tbl_grupo_trabajo`
--
ALTER TABLE `tbl_grupo_trabajo`
  ADD CONSTRAINT `fk_tbl_grupo_trabajo_tbl_usuarios1` FOREIGN KEY (`id_usuarios`) REFERENCES `tbl_usuarios` (`id_usuarios`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `tbl_snippets_carpetas`
--
ALTER TABLE `tbl_snippets_carpetas`
  ADD CONSTRAINT `fk_tbl_snippets_has_tbl_carpetas_tbl_carpetas1` FOREIGN KEY (`id_carpetas`) REFERENCES `tbl_carpetas` (`id_carpetas`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_tbl_snippets_has_tbl_carpetas_tbl_snippets1` FOREIGN KEY (`id_snippets`) REFERENCES `tbl_snippets` (`id_snippets`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `tbl_usuarios`
--
ALTER TABLE `tbl_usuarios`
  ADD CONSTRAINT `fk_tbl_usuarios_tbl_planes` FOREIGN KEY (`id_planes`) REFERENCES `tbl_planes` (`id_planes`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
