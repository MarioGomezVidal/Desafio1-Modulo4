import React, { useState } from "react";
import { pizzas } from "../components/pizzas";
import CardPizza from "./CardPizza";

function Home() {
  const [listaPizzas] = useState(pizzas);

  return (
    <main className="container mt-4">
      <h2 className="text-center mb-4">🍕 Nuestras Pizzas</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {listaPizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            img={pizza.img}
            desc={pizza.desc}
            ingredients={pizza.ingredients}
          />
        ))}
      </div>
    </main>
  );
}

export default Home;
