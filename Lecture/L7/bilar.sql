-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Värd: 127.0.0.1
-- Tid vid skapande: 27 okt 2026 kl 08:25
-- Serverversion: 10.11.16-MariaDB
-- PHP-version: 8.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Databas: `bilar`
--

-- --------------------------------------------------------

--
-- Tabellstruktur `cars`
--

CREATE TABLE `cars` (
  `id` int(11) NOT NULL,
  `fabrikat` varchar(20) NOT NULL,
  `modell` varchar(20) NOT NULL,
  `regnr` char(6) NOT NULL,
  `farg` char(7) NOT NULL,
  `mil` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_swedish_ci;

--
-- Dumpning av Data i tabell `cars`
--

INSERT INTO `cars` (`id`, `fabrikat`, `modell`, `regnr`, `farg`, `mil`) VALUES
(1, 'Kia', 'EV6', 'ABC123', '#000000', 0),
(2, 'Volvo', 'XC90', 'CBA321', '#ff0080', 0),
(3, 'Kia', 'EV6', 'QWE456', '#0080ff', 0),
(4, 'Audi', 'A8', 'GHJ999', '#8000ff', 999);

--
-- Index för dumpade tabeller
--

--
-- Index för tabell `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT för dumpade tabeller
--

--
-- AUTO_INCREMENT för tabell `cars`
--
ALTER TABLE `cars`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=99;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
