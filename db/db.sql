CREATE DATABASE Moviles;

CREATE TABLE "Users" (
  "id" SERIAL PRIMARY KEY,
  "username" varchar,
  "name" varchar,
  "password" varchar
);

CREATE TABLE "Products" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar,
  "price" int,
  "description" varchar
);