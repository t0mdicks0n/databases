DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;

DROP TABLE IF EXISTS users;
CREATE TABLE users (
  ID INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (ID)
);

-- DROP TABLE IF EXISTS groups;
-- CREATE TABLE groups (
--   ID INT NOT NULL AUTO_INCREMENT,
--   groupname VARCHAR(100),
--   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   PRIMARY KEY (ID)
-- );



-- DROP TABLE IF EXISTS messages;
-- CREATE TABLE messages (
--   ID INT NOT NULL AUTO_INCREMENT,
--   message VARCHAR(300),
--   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   user VARCHAR(100),
--   -- group_ID INT,
--   -- FOREIGN KEY (group_ID) REFERENCES groups (ID),
--   FOREIGN KEY (user) REFERENCES users(username),
--   PRIMARY KEY (ID)
-- );

DROP TABLE IF EXISTS messages;
CREATE TABLE messages (
  ID INT NOT NULL AUTO_INCREMENT,
  message VARCHAR(300),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  user_ID INT,
  -- group_ID INT,
  FOREIGN KEY (user_ID) REFERENCES users (ID),
  -- FOREIGN KEY (group_ID) REFERENCES groups (ID),
  PRIMARY KEY (ID)
);

-- Test data:
INSERT INTO users(username)
VALUES ('Tom');

INSERT INTO users(username)
VALUES ('Ebba');

-- INSERT INTO groups(groupname)
-- VALUES ('Lobby');

INSERT INTO messages(message, user_ID)
VALUES ('Yalla yalla alla balla!', 1);

INSERT INTO messages(message, user_ID)
VALUES ('Hej min fina bror!', 2);

/* Create other tables and define schemas for them here! */


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

