
DROP DATABASE IF EXISTS burger_db;


CREATE DATABASE burger_db;

USE burger_db;

-- Create the table plans.
CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  burger varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO burger (burgers) VALUES ('chicken burger');
