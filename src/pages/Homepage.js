import React, { useState, useEffect } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { Col, Row } from "antd";
import ItemList from "../components/ItemList";

const Homepage = () => {
  const [items, setItems] = useState([]);
  //useEffect es un hook que se ejecuta cuando el componente se monta
  useEffect(() => {
    const getAllItems = async () => {
      //fetch es una función que nos permite hacer peticiones a un servidor
      try {
        const response = await fetch(
          "http://localhost:8080/api/v1/items/get-item"
        );
        const data = await response.json();
        console.log(data);
        setItems(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllItems();
  }, []);
  return (
    <>
      <DefaultLayout>
        {/* En este lugar se pondrá todo lo que se quiere renderizar como contenido, 👇 según el path.  */}
        <Row>
          {/* Muestra cada elemento que se trae en los datos.    */}
          {items.map((item) => (
            <Col xs={24} lg={6} md={12} sm={6}>
              <ItemList item={item} />
            </Col>
          ))}
        </Row>
      </DefaultLayout>
    </>
  );
};

export default Homepage;
