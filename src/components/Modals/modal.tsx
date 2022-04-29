import React from "react";
import styled from "styled-components";

const Modal = ({ children, estado, cambiarEstado }) => {
  return (
    <>
      {estado && (
        <Overlay>
          <ContenedorModal>
            <EncabezadoModal>
              <h3>Detalles:</h3>
            </EncabezadoModal>

            <BotonCerrar onClick={() => cambiarEstado(false)}>X</BotonCerrar>

            {children}
          </ContenedorModal>
        </Overlay>
      )}
    </>
  );
};

export default Modal;

const Overlay = styled.div`
position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    flex-wrap: nowrap;
    background: rgba(0,0,0,.5);
`;

const ContenedorModal = styled.div`
    width: 500px;
    min-height: 100px;
    background: #fff;
    position: relative;
    border-radius: 10px;
    box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
    padding; 20px;
`;

const EncabezadoModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin:20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #E8E8E8;
    
    h3{
        font-weight: 500;
        font-size: 16px;
        color: #1766DC;
    }
`;

const BotonCerrar = styled.button`
    position: absolute;
    background: none;
    color: #1766DC;
    width: 30px;
    height: 20px;
    top: 20px;
    right: 20px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    transition: .3s ease all;

    &:hover{
        background: #f2f2f2;
    }

`;
