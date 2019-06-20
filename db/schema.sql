### Schema

drop database cat_db;
CREATE DATABASE cat_db;
USE cat_db;

#Table for outfits
#User has the ability to add up to 4 seasons for a specific item (Only the first one is mandatory)
#User is able to add up 4 occasions (fomral, work, athletic, casual)
#User can choose one of the following clothing types (top, bottom, shoes, accessory) 
CREATE TABLE outfit
(
    id int NOT NULL AUTO_INCREMENT,
    type varchar(255) NOT NULL,
    color VARCHAR(255) NOT NULL,
	season1 VARCHAR(50) NOT NULL,
	season2 VARCHAR(50),
    season3 VARCHAR(50),
    season4 VARCHAR(50),
    occasion1 VARCHAR(50) not null,
    occasion2 VARCHAR(50),
    occasion3 VARCHAR(50),
    occasion4 VARCHAR(50),
	gender VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);

