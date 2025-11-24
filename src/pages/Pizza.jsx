import React, { useEffect, useState } from "react";

export default function Pizza() {
  const apiurl = "http://localhost:5000/api/pizzas/p001";
  const [pizza, setPizza] = useState(null);
  const [token, setToken] = useState(false);

  const getPizza = async () => {
    try {
      const res = await fetch(apiurl);
      const data = await res.json();
      setPizza(data);
    } catch (error) {
      console.log("Error al obtener la pizza:", error);
    }
  };

  const cerrarSesion = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  useEffect(() => {
    getPizza();
    setToken(localStorage.getItem("token"));
  }, []);

  if (!token) {
    return <p>Necesitas iniciar sesión para ver la pizza</p>;
  }

  if (!pizza) {
    return <p>Cargando información...</p>;
  }

  return (
    <div>
      <h1>{pizza.name}</h1>

      <img src={pizza.img} alt={pizza.name} width="300" />

      <h3>Precio: ${pizza.price}</h3>

      <h4>Ingredientes:</h4>
      <ul>
        {pizza.ingredients.map((ing, i) => (
          <li key={i}>🍕 {ing}</li>
        ))}
      </ul>

      <p>{pizza.desc}</p>

      <button>Añadir al carrito</button>

      <br /><br />
      <button onClick={cerrarSesion}>Cerrar Sesión</button>
    </div>
  );
}
