import React, { useEffect, useState } from "react";

export default function Home() {
  const apiurl = "http://localhost:5000/api/pizzas";
  const [pizzas, setPizzas] = useState([]);
  const [token, setToken] = useState(false);

  const getPizzas = async () => {
    try {
      const res = await fetch(apiurl);
      const data = await res.json();
      setPizzas(data);
    } catch (error) {
      console.log("Error al obtener las pizzas:", error);
    }
  };

  const cerrarSesion = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  useEffect(() => {
    getPizzas();
    setToken(localStorage.getItem("token"));
  }, []);

  return (
    <div>
      {token ? (
        <>
          <h1>Lista de Pizzas</h1>

          {pizzas.length === 0 ? (
            <p>Cargando pizzas...</p>
          ) : (
            pizzas.map((p) => (
              <div key={p.id} className="pizza-card">
                <h3>{p.name}</h3>
                <img src={p.img} alt={p.name} width="200" />
                <p>Precio: ${p.price}</p>
                <p>Ingredientes: {p.ingredients.join(", ")}</p>
              </div>
            ))
          )}

          <button onClick={cerrarSesion}>Cerrar Sesión</button>
        </>
      ) : (
        <>
          <p>Necesitas iniciar sesión para ver las pizzas</p>
        </>
      )}
    </div>
  );
}

