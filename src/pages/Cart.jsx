import React, { useState } from "react";
import { pizzaCart } from "../components/pizzas";
import Button from "react-bootstrap/Button";

function Cart() {
  const [cart, setCart] = useState(pizzaCart);

  const aumentar = (id) => {
    setCart(
      cart.map((p) =>
        p.id === id ? { ...p, count: p.count + 1 } : p
      )
    );
  };

  const disminuir = (id) => {
    const nuevo = cart
      .map((p) =>
        p.id === id && p.count > 0 ? { ...p, count: p.count - 1 } : p
      )
      .filter((p) => p.count > 0);
    setCart(nuevo);
  };

  const total = cart.reduce((acc, p) => acc + p.price * p.count, 0);

  return (
    <main className="container mt-4">
      <h2 className="text-center mb-4">🛒 Carrito de Compras</h2>
      <div className="card p-3 shadow-sm">
        {cart.map((p) => (
          <div
            key={p.id}
            className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2"
          >
            <div className="d-flex align-items-center">
              <img
                src={p.img}
                alt={p.name}
                style={{
                  width: "70px",
                  height: "70px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  marginRight: "10px",
                }}
              />
              <div>
                <h6 className="mb-0">{p.name.toUpperCase()}</h6>
                <small className="text-muted">${p.price}</small>
              </div>
            </div>
            <div>
              <Button
                variant="outline-danger"
                size="sm"
                onClick={() => disminuir(p.id)}
              >
                −
              </Button>
              <span className="mx-2">{p.count}</span>
              <Button
                variant="outline-success"
                size="sm"
                onClick={() => aumentar(p.id)}
              >
                +
              </Button>
            </div>
          </div>
        ))}

        <h5 className="text-end mt-3">
          Total: <span className="text-success">${total}</span>
        </h5>
        <div className="text-end mt-3">
          <Button variant="primary">Pagar</Button>
        </div>
      </div>
    </main>
  );
}

export default Cart;
