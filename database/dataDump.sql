-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 28, 2020 at 11:38 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `corex_israt`
--

-- --------------------------------------------------------

--
-- Table structure for table `groups`
--

CREATE TABLE `groups` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `permissions` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `groups`
--

INSERT INTO `groups` (`id`, `name`, `permissions`) VALUES
(1, 'Standard User', '{ \"admin\": 0, \"moderator\": 0 }'),
(2, 'Admin', '{\r\n\"admin\": 1,\r\n\"moderator\": 1\r\n}\r\n'),
(3, 'Moderator', '{\r\n\"admin\": 0,\r\n\"moderator\": 1\r\n}\r\n');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(250) NOT NULL,
  `password` text NOT NULL,
  `salt` text NOT NULL,
  `name` varchar(250) NOT NULL,
  `joined` datetime NOT NULL,
  `usrGroup` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `salt`, `name`, `joined`, `usrGroup`) VALUES
(22, 'saiful', 'dc5cb6898112edd20c9a88d46392728bb1cd878150c853c0c5510355e1cfd054', 'vNDuWsQxALm0MamIkDjZ3UHQkVjE8FZh', 'Saiful Islam', '2020-12-28 23:16:14', 3),
(21, 'rakib', 'efa9928fd706a0f335b54a6f22b45619980d76de4097281f45e59c53594e2ab3', 'fG4eJUyzQyMpiY0EVL0HYaqLyHWh0Qpg', 'Rakib', '2020-12-28 23:15:50', 3),
(20, 'niamul', '7925692eb014b28def8c5bce1897eff06d4257cd2160a3c475a58ab08a4482e0', 'IrZGjKHQqb2WPTO257z06RPM0vFCtpo5', 'Niamul Hasan 2', '2020-12-28 23:15:34', 3),
(19, 'hasan', 'a5ff14418f5883c83bec809cee4cb835fb7d25c606f4deabdf45cc27d42b5ffe', 'iwzwHfz5hDTgaiNlB1eA6LNLa6iwOfkW', 'Niamul Hasan', '2020-12-28 22:57:41', 2);

-- --------------------------------------------------------

--
-- Table structure for table `users_session`
--

CREATE TABLE `users_session` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `hash` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `groups`
--
ALTER TABLE `groups`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `groups`
--
ALTER TABLE `groups`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
