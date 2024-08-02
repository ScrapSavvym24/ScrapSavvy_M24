-- create database ScrapSavvy;
use ScrapSavvy;
-- Admin Table
CREATE TABLE Admin (
    AdminID INT PRIMARY KEY AUTO_INCREMENT,
    AdminName VARCHAR(100),
    AdminPassword VARCHAR(255),
    AdminUsername VARCHAR(50),
    Role VARCHAR(50)
);

-- Customer Table
CREATE TABLE Customer (
    CustomerID INT PRIMARY KEY AUTO_INCREMENT,
    CName VARCHAR(100),
    Email VARCHAR(100),
    Password VARCHAR(255),
    Username VARCHAR(50),
    Address TEXT,
    PhoneNo VARCHAR(20)
);

-- Order Table
CREATE TABLE `Order` (
    OrderID INT PRIMARY KEY AUTO_INCREMENT,
    ResaleItemsID INT,
    CustomerID INT,
    OrderDate DATE,
    Status VARCHAR(50),
    FOREIGN KEY (CustomerID) REFERENCES Customer(CustomerID)
);

-- Payment Table
CREATE TABLE Payment (
    PaymentID INT PRIMARY KEY AUTO_INCREMENT,
    TransactionID INT,
    PaymentDate DATE,
    Status VARCHAR(50),
    Amount DECIMAL(10, 2),
    PaymentMethodID INT
);

-- PaymentMethod Table
CREATE TABLE PaymentMethod (
    PaymentMethodID INT PRIMARY KEY AUTO_INCREMENT,
    Type VARCHAR(50),
    CustomerID INT,
    AccountNo VARCHAR(50),
    FOREIGN KEY (CustomerID) REFERENCES Customer(CustomerID)
);

-- RecycleFactory Table
CREATE TABLE RecycleFactory (
    RecycleFactoryID INT PRIMARY KEY AUTO_INCREMENT,
    Type VARCHAR(50),
    Name VARCHAR(100),
    PhoneNo VARCHAR(20),
    Address TEXT
);

-- ResaleItems Table
CREATE TABLE ResaleItems (
    ResaleItemsID INT PRIMARY KEY AUTO_INCREMENT,
    Category VARCHAR(50),
    Description TEXT,
    Images TEXT
);

-- ScrapYard Table
CREATE TABLE ScrapYard (
    ScrapYardID INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(100),
    Email VARCHAR(100),
    Password VARCHAR(255),
    Username VARCHAR(50),
    Address TEXT,
    PhoneNo VARCHAR(20)
);

-- Scrap Table
CREATE TABLE Scrap (
    ScrapID INT PRIMARY KEY AUTO_INCREMENT,
    Types VARCHAR(50),
    Description TEXT,
    Weight DECIMAL(10, 2),
    Images TEXT,
    ScrapSellerID INT
);

-- ScrapSeller Table
CREATE TABLE ScrapSeller (
    ScrapSellerID INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(100),
    Email VARCHAR(100),
    Password VARCHAR(255),
    Username VARCHAR(50),
    Address TEXT,
    PhoneNo VARCHAR(20)
);

-- ScrapType Table
CREATE TABLE ScrapType (
    ScrapTypeID INT PRIMARY KEY AUTO_INCREMENT,
    ScrapID INT,
    ScrapYardID INT,
    Type VARCHAR(50),
    FOREIGN KEY (ScrapID) REFERENCES Scrap(ScrapID),
    FOREIGN KEY (ScrapYardID) REFERENCES ScrapYard(ScrapYardID)
);

-- Offer Table
CREATE TABLE Offer (
    OfferID INT PRIMARY KEY AUTO_INCREMENT,
    Description TEXT,
    ScrapID INT,
    ScrapYardID INT,
    Status VARCHAR(50),
    FOREIGN KEY (ScrapID) REFERENCES Scrap(ScrapID),
    FOREIGN KEY (ScrapYardID) REFERENCES ScrapYard(ScrapYardID)
);

-- TeamMember Table
CREATE TABLE TeamMember (
    TeamMemberID INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(100),
    Email VARCHAR(100),
    Password VARCHAR(255),
    Username VARCHAR(50),
    Address TEXT,
    PhoneNo VARCHAR(20)
);

-- Transaction Table
CREATE TABLE Transaction (
    TransactionID INT PRIMARY KEY AUTO_INCREMENT,
    OrderID INT,
    PaymentMethodID INT,
    TransactionDate DATE,
    Status VARCHAR(50),
    Amount DECIMAL(10, 2),
    FOREIGN KEY (OrderID) REFERENCES `Order`(OrderID),
    FOREIGN KEY (PaymentMethodID) REFERENCES PaymentMethod(PaymentMethodID)
);

-- Verification Table
CREATE TABLE Verification (
    VerificationID INT PRIMARY KEY AUTO_INCREMENT,
    ScrapID INT,
    Status VARCHAR(50),
    Date DATE,
    TeamMemberID INT,
    FOREIGN KEY (ScrapID) REFERENCES Scrap(ScrapID),
    FOREIGN KEY (TeamMemberID) REFERENCES TeamMember(TeamMemberID)
);