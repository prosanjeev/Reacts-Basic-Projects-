import React, { useState } from 'react';

const TotalGrid = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', quantity: 1, price: 10 },
    { id: 2, name: 'Product 2', quantity: 1, price: 20 },
    { id: 3, name: 'Product 3', quantity: 1, price: 30 },
  ]);

  const handleQuantityChange = (id, newQuantity) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, quantity: newQuantity } : product
      )
    );
  };

  const handlePriceChange = (id, newPrice) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, price: newPrice } : product
      )
    );
  };

  const calculateTotal = () => {
    return products.reduce((total, product) => total + product.quantity * product.price, 0);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>
                <input
                  type="number"
                  value={product.quantity}
                  onChange={(e) =>
                    handleQuantityChange(product.id, parseInt(e.target.value, 10))
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  value={product.price}
                  onChange={(e) =>
                    handlePriceChange(product.id, parseInt(e.target.value, 10))
                  }
                />
              </td>
              <td>{product.quantity * product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: '10px' }}>
        <strong>Total: {calculateTotal()}</strong>
      </div>
    </div>
  );
};

export default TotalGrid;
