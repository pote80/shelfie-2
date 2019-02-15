CREATE TABLE product (
    id SERIAL PRIMARY KEY,
    img_url TEXT NOT NULL,
    product_name VARCHAR(40) NOT NULL,
    price FLOAT NOT NULL
);