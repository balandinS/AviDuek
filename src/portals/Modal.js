import ReactDOM from "react-dom";
import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchImg } from "../action";
import styled from "styled-components";
import SlideDown from './ModalAnimation'
import Spinner from '../components/UI/Spinner/Spinner'
const Container = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  min-height: 500px;
  direction: rtl;
  z-index: 3;
  background-color: transparent;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: black;
    opacity: 0.5;
  }
`;

const ImageConatiner = styled.div`
  display: flex;
  margin: 30px auto;
  z-index: 99;
  height: 100%;
  width: 100%;
 
  justify-content: center;
  align-items: center;
  .imageBox {
    width: 400px;
    height: 400px;
    z-index:999;
    animation-name: ${SlideDown};
    animation-duration: 1s;
    animation-timing-function: ease;
    background-color: whitesmoke;
    border-radius: 5px;
    transition: .4s ease-in-out;
  }
  img{
    height: 100%;
    width: 100%;
    border-radius: 5px;
    object-fit: scale-down;
  }
`;
const ModalComponent = () => {
  const image = useSelector(state => state.selectedImage);
  const { path, id } = useParams();
  const history = useHistory()
  const dispatch = new useDispatch();
  useEffect(() => {
    dispatch(fetchImg(path,id));
  }, [image, dispatch, id, path]);
  return (
    <>
    <Container onClick={()=>{
      
      switch (path) {
        case 'gallery':
          dispatch({type: 'CLEAN_UP'})
          history.push('/gallery')
          break;
        case 'products':
          dispatch({type: 'CLEAN_UP'})
          history.push('/')
          break
        default:
          break;
      }
      
    }}>
    <ImageConatiner>
        <div className="imageBox">
          {image === ''? <Spinner /> : <img src={image} alt="zoomed" />}
        </div>
      </ImageConatiner>
    </Container>
    
    </>
    
  );
};
export const Modal = () =>
  ReactDOM.createPortal(
       <ModalComponent />,
    document.getElementById("modal-root")
  );
