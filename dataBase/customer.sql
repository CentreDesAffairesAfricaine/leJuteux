CREATE DATABASE customer;
DROP TABLE IF EXISTS Customers;
CREATE TABLE IF NOT EXISTS Customers (CustomerID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,CustomerName NVARCHAR(255),CustomerPhoneNumber NVARCHAR(255),CustomerEmail NVARCHAR(255));
INSERT INTO Customers(CustomerName,CustomerPhoneNumber,CustomerEmail), VALUES ("Zoulkifil AKOMEDI","+22996834311","zoulkifil.akomedi@gmail.com");