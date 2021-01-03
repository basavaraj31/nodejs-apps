
#Creat following DB objects


-- Sequence: product_id_seq

-- DROP SEQUENCE product_id_seq;

CREATE SEQUENCE product_id_seq
  INCREMENT 1
  MINVALUE 1
  MAXVALUE 9223372036854775807
  START 6
  CACHE 1;
ALTER TABLE product_id_seq
  OWNER TO postgres;




-- Table: products

-- DROP TABLE products;

CREATE TABLE products
(
  id integer NOT NULL DEFAULT nextval('product_id_seq'::regclass),
  name character varying(255),
  price double precision,
  sku character varying(255),
  CONSTRAINT products_pkey PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE products
  OWNER TO postgres;
