-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 27, 2018 at 01:23 PM
-- Server version: 5.6.38
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `niamulha_bpositive`
--

-- --------------------------------------------------------

--
-- Table structure for table `blood_groups`
--

CREATE TABLE `blood_groups` (
  `id` int(11) NOT NULL,
  `name` varchar(25) NOT NULL,
  `details` varchar(250) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `blood_groups`
--

INSERT INTO `blood_groups` (`id`, `name`, `details`) VALUES
(1, 'A+', 'A+ are the first catagory'),
(2, 'A-', 'A- are the 2nd category'),
(3, 'B+', 'B+ are the 3rd category'),
(4, 'B-', 'B- are the 4th category'),
(5, 'O+', ''),
(6, 'O-', ''),
(7, 'AB+', ''),
(8, 'AB-', '');

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
(1, 'Standard User', ''),
(2, 'Admin', '{\r\n\"admin\": 1,\r\n\"moderator\": 1\r\n}\r\n');

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
(1, 'hasan', '52319fc648f560cd364398072018ea9440287120f28398d85caf6a0aed1bf929', 'PBUY1bJ7qTHB513MbIS8epwi4Ci4GhSw', 'Niamul Hasan', '2018-02-21 19:29:38', 3),
(2, 'david', 'febb11b74ccce249ef43998e94240c90ab7b2356ff0c972d797b117f6fce79f5', 'sx03hfQM3TrGxi9PV7ZOO5mpCLbC51yy', 'David', '2018-02-21 23:50:08', 3),
(3, 'nabil', 'fdbdfffdb672fdfa361f799c2d63476223604ebccfcb66075a7001067f567f7f', 'IysEaIgOWmph8tf0ReMYYYCoEgzWUvcD', 'Nabil Magi', '2018-02-22 14:07:54', 3),
(4, 'nabila', 'e981c62751a6a46961c9b8a81a5db4442ac562a6dfeed95548619b3b22927f34', 'pICYonAdu1G4k5rKdEPxpjk2Bbmq9mqy', 'Nabil', '2018-02-22 14:30:47', 3),
(5, 'niamulhasan', '738bc7049bf9d584a1aafa52bb3096cfcfef7b31ab41f38d6618040d740607cf', 'VBRemPM4TuDELSakFBhGolK2PMuXuIdq', 'hasan', '2018-02-22 18:57:57', 3),
(6, 'niamulhasan4', '027f037740b5687b64dfb6af2e5a7115c682c33390321484b8d27ca9be19411c', 'bA22JnehzbjJSonDpommK3oSJVhFeu3q', 'foo5', '2018-02-26 14:14:44', 3),
(7, 'iamauser', 'f4950b62077232504d656fbd204d4cb7f87ab8f560e1b9b3ed473a83b41c96b1', 'yBHkA5TcnorcLUcplMjpkFqQyNsd8ZZH', 'Niamul Hasan', '2018-02-26 14:25:25', 3),
(8, 'hello', 'b95f7e4761c8db5221864eb85546c34a3c266cb021c33cd36b55bc810c34b774', 'zt52KKNPuNzKjU8vRnytEje0cIZGPU6o', 'Niamul Hasanh', '2018-02-26 14:25:53', 3),
(9, 'niamulhasanbd@gmail.com', '18e73ba5e3e510ee53ccc036870369752cde19ff3aeb9577dd32f5cbe3e87f27', '9Mkpdv7OWheYXn8jCrLohNDMtAwkYz48', 'Niamul Hasan', '2018-02-26 14:29:17', 3),
(10, 'niamulhasan@gmail.com', '5ea05d969088615790ad19ea3eb40443b5fb4b6ad5f165ac334af0c75bdc5c57', 'amXA9YCWVt32LmBOBL2Z597pTOm42Mkc', 'Niamul Hasan', '2018-02-26 14:31:36', 3),
(11, 'anexample@example.com', '5a6d2eee3eef322b140932c6a16e62c15eebe8489fd27d74fa989b80dcacb1f4', 'I5imxXo4GVRuXdBZgQxqPDR1Vx1M8tyQ', 'Hdbaasdbsad', '2018-02-26 14:55:33', 3),
(12, 'jun@gmail.com', 'd374ffb7a6b0c2049657084a0dc540ac87764c343b711375489bb79a3197d1fc', 'mdisuxUwFtGG89hpACNqJ3dSS8TmV1Ji', 'Junaeed', '2018-02-26 18:17:30', 3),
(13, 'test', '7778b6d72623bf528ed742407f38909ac920d51f8a7aa4804d0a3de5224b154e', 'plkwSh4pOZlxpDOUPvvBRUnyns91dhBC', 'foo5', '2018-02-26 18:51:46', 3),
(14, 'admin', '21a4133be27fe716b9d2333c876283ff675c2fe41854bc2a63bc0584339a03d2', 'LDoqTT4TDPgcAB42aXxxyyhLBRsZ44YQ', 'Admin', '2018-02-28 14:31:52', 3),
(15, 'testddd', '42854fa78eac79e9a3550690d39e55d1fe7727f3e9a6aeddda1f1f402e2cc07f', 'zY4hkkNTLvyzQAbQ0CHNBsNOzhRvfXMO', 'foo5fff', '2018-02-28 20:32:00', 3),
(16, 'testdddgg', '096d17c98d191ed6fb874bf1fb8a69db2a2df153caee254766e3086db1374849', 'NvxrWVYAmFx7hvUTos67SFNxZvBxAOIo', 'foo5fff', '2018-02-28 20:45:00', 3),
(17, 'Hasana', '096f5bf8ed7473e8fe7429c002419dbad5dfbbda2d5c4c908ec5a051bf96d915', 'L6pLl2or5WDhbW9tKgdF8SLiQJDg663R', 'Niamul', '2018-02-28 20:54:56', 3),
(18, 'hhgggg', '8b610c698fed2964cb0d9dc286fe91945f329efb4d7ba64074d014b903095bd9', '967MOeN8sCFAKVvlAcO1hvYoyLKkwvsF', 'yyyyyy', '2018-03-14 20:12:51', 3);

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
-- Indexes for table `blood_groups`
--
ALTER TABLE `blood_groups`
  ADD PRIMARY KEY (`id`);

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
-- AUTO_INCREMENT for table `blood_groups`
--
ALTER TABLE `blood_groups`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `groups`
--
ALTER TABLE `groups`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
