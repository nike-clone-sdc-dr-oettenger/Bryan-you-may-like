DROP DATABASE youMayLike;

CREATE DATABASE IF NOT EXISTS youMayLike;

USE youMayLike;

DROP TABLE IF EXISTS shoes;

CREATE TABLE shoes (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(250),
  picture TEXT NOT NULL,
  price INT NOT NULL,
  type VARCHAR(250),
  PRIMARY KEY (id)
);

INSERT INTO shoes (name, picture, price, type) VALUES ('shoey', 'picture', '57', 'cotton' )