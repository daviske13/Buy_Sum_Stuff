-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

-- USE DATABASE
USE ecommerce_db;

-- DEPARTMENT TABLE
CREATE TABLE department (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30)
);

-- ROLE TABLE
CREATE TABLE role (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES department(id)
);

-- EMPLOYEE TABLE
CREATE TABLE employee (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id) REFERENCES role(id),
    FOREIGN KEY (manager_id) REFERENCES employee(id)
);

-- YOUR_MANAGER TABLE
CREATE TABLE your_manager (
    id INT AUTO_INCREMENT PRIMARY KEY,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES department(id)
);
