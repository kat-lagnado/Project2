### Schema

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