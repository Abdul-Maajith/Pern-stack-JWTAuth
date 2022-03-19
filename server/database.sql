CREATE DATABASE jwtAuth;

-- In order to use uuid = we just need to use download the uuid extension.
-- create extension if not exists "uuid-ossp";
CREATE TABLE users (
    user_id uuid PRIMARY KEY DEFAULT
    uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL
);

-- Inserting fake data's! - Values must be in single quotes.
INSERT INTO users (
    user_name,
    user_email,
    user_password
) VALUES (
    'Maajee',
    'maajee0703@gmail.com',
    'test'
);