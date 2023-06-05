const mysql = require('mysql2');


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'mysql'
});


const createProduct = (product) => {
  const { name, price } = product;
  const query = 'INSERT INTO products (name, price) VALUES (?, ?)';
  const values = [name, price];

  connection.query(query, values, (error, results) => {
    if (error) {
      console.error('Erro ao criar o produto:', error);
      return;
    }

    console.log('Produto criado com sucesso!');
  });
};


const getAllProducts = () => {
  const query = 'SELECT * FROM products';

  connection.query(query, (error, results) => {
    if (error) {
      console.error('Erro ao recuperar os produtos:', error);
      return;
    }

    console.log('Produtos:', results);
  });
};


const updateProduct = (productId, updatedProduct) => {
  const { name, price } = updatedProduct;
  const query = 'UPDATE products SET name = ?, price = ? WHERE id = ?';
  const values = [name, price, productId];

  connection.query(query, values, (error, results) => {
    if (error) {
      console.error('Erro ao atualizar o produto:', error);
      return;
    }

    console.log('Produto atualizado com sucesso!');
  });
};


const deleteProduct = (productId) => {
  const query = 'DELETE FROM products WHERE id = ?';
  const values = [productId];

  connection.query(query, values, (error, results) => {
    if (error) {
      console.error('Erro ao excluir o produto:', error);
      return;
    }

    console.log('Produto excluído com sucesso!');
  });
};


const newProduct = { name: 'Pão de Forma', price: 2.0 };
createProduct(newProduct);


getAllProducts();


const updatedProduct = { name: 'Novo Nome', price: 3.5 };
updateProduct(1, updatedProduct);


deleteProduct(2);


connection.end();
