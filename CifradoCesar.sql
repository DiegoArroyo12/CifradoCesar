CREATE DATABASE cifradoCesar;

USE cifradoCesar;

CREATE TABLE registros(
	id INT AUTO_INCREMENT PRIMARY KEY,
    palabra_normal VARCHAR(100),
    palabra_cifrada VARCHAR(100),
    fecha DATETIME DEFAULT CURRENT_TIMESTAMP
);

select * from registros;