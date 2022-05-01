import React from "react";
import { Overlay, EncabezadoModal, BotonCerrar, ContenedorModal } from "./styled-components";

export interface ModalBaseProps {
  title: string;
  estado: boolean;
  cambiarEstado: (estado: boolean) => void;
  children?: React.ReactNode;
}

const ModalBase = ({ title, estado, cambiarEstado, children }: ModalBaseProps) => {
  return (
    <>
      {estado && (
        <Overlay>
          <ContenedorModal>
            <EncabezadoModal>
              <h3>{title}</h3>
            </EncabezadoModal>

            <BotonCerrar onClick={() => cambiarEstado(false)}>X</BotonCerrar>

            {children}
          </ContenedorModal>
        </Overlay>
      )}
    </>
  );
};

export default ModalBase;
