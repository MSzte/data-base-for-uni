CREATE DATABASE IF NOT EXISTS formularzDB;
USE formularzDB;

CREATE TABLE IF NOT EXISTS uzytkownicy (
  id INT AUTO_INCREMENT PRIMARY KEY,
  imie VARCHAR(100),
  nazwisko VARCHAR(100),
  email VARCHAR(150)
);
