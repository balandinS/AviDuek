import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGallery } from "../../action";
import Greeting from "../UI/GreetingComponent/Greeting";
import Title from "../UI/Title";
import Contact from "../ContactComponent/Contact";
import Paralax from "../UI/Paralax";
import styled from "styled-components";
import ImageBox from "./ImageBoxComponent/ImageBox";
import Spinner from '../UI/Spinner/Spinner'

const Gallery = styled.div`
  display: grid;
  width: 80%;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 3px;
  width: 80%;
  margin: 0 auto;
`;

export default () => {
  const gallery = useSelector((state) => state.gallery);
  const dispatch = new useDispatch();

  useEffect(() => {
    dispatch(fetchGallery("gallery"));
  }, [dispatch]);

  const renderImages = () => {
    if (!Array.isArray(gallery) || gallery.length === 0)
      return <Spinner />;

    return gallery.map((image, index) => (
      <ImageBox key={image.productId} image={image.image} index={index} />
    ));
  };
  return (
    <div>
      <Greeting page="גלריה שלנו" />
      <Title title="גלריה" />
      <Gallery>{renderImages()}</Gallery>
      <Paralax />
      <Title title="אנשי קשר" />
      <Contact />
    </div>
  );
};
