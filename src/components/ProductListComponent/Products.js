import React, { useEffect, useRef, useMemo } from "react";
import About from "./AboutComponent/About";
import Title from "../UI/Title";
import Greeting from "../UI/GreetingComponent/Greeting";
import Paralax from "../UI/Paralax";
import Contact from "../ContactComponent/Contact";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, setPositionElement } from "../../action";
import styled from "styled-components";
import Spinner from "../UI/Spinner/Spinner";

const List = styled.div`
  display: flex;
  width: 70%;
  margin: 0 auto;
  flex-direction: row-reverse;
  flex-wrap: wrap;

  @media(max-width:1002px){
    justify-content: center;
  }
  .card-container {
    width: 220px;
    margin: 5px;
    height: 260px;
    background-color: #ecf0f1;
    border-radius: 10px;
    overflow: hidden;
  }
  .card-container:hover {
    transform: scale(1.05);
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3), 4px 4px 4px rgba(0, 0, 0, 0.3),
      4px 4px 4px rgba(0, 0, 0, 0.3);
  }
  .image-container {
    width: 100%;
    height: 200px;
    background-color: white;
  }

  .image {
    width: 100%;
    height: 100%;
    background-color: black;
    object-fit: contain;
    cursor: pointer;
  }

  p {
    text-align: center;
  }
`;

export default (props) => {
  const products = useSelector((state) => state.products);
  const positionElement = useSelector(state => state.positionElement)
  const dispatch = new useDispatch();
  const refDiv = useRef('')
  let history = useHistory();
  
  useEffect(() => {
    dispatch(fetchProducts("products"));
    window.scroll(positionElement.y, positionElement.x)
  }, [dispatch]);

  const renderProducts = useMemo(() => {
    if ((products.length === 0) | !Array.isArray(products)) return <Spinner />;

    return products.map((product, index) => (
      <div 
      ref={refDiv} 
      key={product.productId} 
      className="card-container"
      onClick={() => {
       const { right, bottom } = refDiv.current.getBoundingClientRect() 
       dispatch(setPositionElement({x: right, y: bottom}))
      }}
      >
        <div className="image-container">
          <img
            className="image"
            src={product.image}
            alt="product"
            onClick={() => {
              history.push(`/products/${index}`);
            }}
          />
        </div>
        <p>{product.name}</p>
      </div>
    ));
  }, [products]);

  return (
    <div>
      <Greeting page="גלה את המוצרים שלנו" />
      <About />
      <Title title="מוצרים שלנו" />
      <List>{renderProducts}</List>
      <Paralax />
      <Title title="אנשי קשר" />
      <Contact />
    </div>
  );
};
