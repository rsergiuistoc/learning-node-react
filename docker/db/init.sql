CREATE USER admin WITH ENCRYPTED PASSWORD 'admin';
ALTER USER admin CREATEDB;
CREATE DATABASE packed;
GRANT ALL PRIVILEGES ON DATABASE packed TO admin; 

