--Setup a new MySQL local instance, make sure it runs on port 3006
--Make sure there is an account for this instance with as such:
--username: BlairMackenzie
--password: Zab153647
--This is so that whenever we sync from the github we don't have to change the account name and password for the database everytime
--In the instance create a new schema called ip3 and create the following tables using the code provided:

CREATE TABLE `users` (
  `idUsers` int NOT NULL,
  `userName` varchar(45) NOT NULL,
  `emailAddress` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `userBio` mediumtext,
  PRIMARY KEY (`idUsers`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `posts` (
  `idPosts` int NOT NULL,
  `postTitle` varchar(60) NOT NULL,
  `postDate` datetime NOT NULL,
  `postBody` mediumtext NOT NULL,
  `postCategory` enum('Planes','Destinations','Environment') NOT NULL,
  `postLikes` int NOT NULL,
  `idUser` int NOT NULL,
  PRIMARY KEY (`idPosts`),
  KEY `idUser_idx` (`idUser`),
  CONSTRAINT `idUser` FOREIGN KEY (`idUser`) REFERENCES `users` (`idUsers`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `comments` (
  `idcomments` int NOT NULL,
  `idUser` int NOT NULL,
  `idPost` int NOT NULL,
  `commentText` mediumtext NOT NULL,
  PRIMARY KEY (`idcomments`),
  KEY `idUser_idx` (`idUser`),
  KEY `idPost_idx` (`idPost`),
  CONSTRAINT `idPost_FK` FOREIGN KEY (`idPost`) REFERENCES `posts` (`idPosts`),
  CONSTRAINT `idUser_FK` FOREIGN KEY (`idUser`) REFERENCES `users` (`idUsers`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;