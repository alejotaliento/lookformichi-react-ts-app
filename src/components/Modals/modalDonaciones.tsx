import React from "react";
import styled from "styled-components";

const ModalDonaciones = ({ children, estadoDon, cambiarEstadoDon }) => {
    return (
      <>
        {estadoDon && (
          <Overlay>
            <ContenedorModal>
              <EncabezadoModal>
                <h3>Donaciones</h3>
              </EncabezadoModal>
  
              <BotonCerrar onClick={() => cambiarEstadoDon(false)}>X</BotonCerrar>
  
              {children}
            </ContenedorModal>
          </Overlay>
        )}
      </>
    );
  };
  
  export default ModalDonaciones;
  
  const Overlay = styled.div`

    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height:100%;
    background: rgba(0,0,0,.5);

    
    
`;

const ContenedorModal = styled.div`
    width: 500px;
    height: 100px;
    background: #fff;
    position: relative;

    border-radius: 10px;
    box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
    padding; 200px;
    
`;

const EncabezadoModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
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