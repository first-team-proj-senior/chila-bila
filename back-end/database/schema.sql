-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema chilabila
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema chilabila
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `chilabila` DEFAULT CHARACTER SET utf8 ;
USE `chilabila` ;

-- -----------------------------------------------------
-- Table `chilabila`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `chilabila`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` LONGTEXT NOT NULL,
  `role` VARCHAR(45) NOT NULL DEFAULT 'user',
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `chilabila`.`annouces`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `chilabila`.`annouces` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `description` LONGTEXT NOT NULL,
  `category` VARCHAR(255) NOT NULL,
  `location` VARCHAR(255) NOT NULL,
  `price` VARCHAR(45) NOT NULL,
  `imageUrl` LONGTEXT NOT NULL,
  `phone` VARCHAR(255) NOT NULL,
  `users_id` INT NOT NULL,
  PRIMARY KEY (`id`, `users_id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_annouces_users_idx` (`users_id` ASC) VISIBLE,
  CONSTRAINT `fk_annouces_users`
    FOREIGN KEY (`users_id`)
    REFERENCES `chilabila`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
