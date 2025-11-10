import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function CardPizza({ name, price, img, desc, ingredients }) {
  return (
    <Card
      className="shadow-sm m-2"
      style={{ width: "20rem", borderRadius: "15px" }}
    >
      <Card.Img
        variant="top"
        src={img}
        alt={name}
        style={{
          height: "200px",
          objectFit: "cover",
          borderTopLeftRadius: "15px",
          borderTopRightRadius: "15px",
        }}
      />
      <Card.Body>
        <Card.Title className="text-capitalize">{name.toUpperCase()}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <h6>Ingredientes:</h6>
        <ul>
          {ingredients.map((ingrediente, i) => (
            <li key={i}>{ingrediente}</li>
          ))}
        </ul>
        <h5 className="text-success">${price}</h5>
        <div className="d-flex justify-content-between mt-3">
          <Button variant="outline-primary">Ver más</Button>
          <Button variant="success">Añadir</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardPizza;


