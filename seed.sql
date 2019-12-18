DROP DATABASE IF EXISTS management_SystemsDB;
CREATE database management_SystemsDB;

USE management_SystemsDB;

CREATE TABLE department( 

id INT NOT NULL AUTO_INCREMENT,
departmentName VARCHAR(30) NULL,
PRIMARY KEY (id)
);

CREATE TABLE role(

id INT NOT NULL AUTO_INCREMENT,
roleTitle VARCHAR(30) NULL,
salary  DECIMAL,
--should be id from department table
department_id INT,
PRIMARY KEY (id)
);

CREATE TABLE employee(

id INT PRIMARY KEY
first_name VARCHAR(30),
last_name VARCHAR(30),
--to hold reference to role employee has
role_id INT, 
--to hold reference to another employee that manager of the current employee. 
    --This field may be null if the employee has no manager
manager_id INT NULL
);

--
--join table needs to have employee id, first, last, title, department, salary, manager
    --department is inputted as name from department table. match the number inputted in employee table to the department id from department table
    --manager is inputted as eployee id. employee id will populate first & last (or null)
--