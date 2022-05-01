import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";

// YUP -> for validations forms

import  { ModalBase } from "../"
import type { ModalBaseProps } from "../"

import styles from "./index.module.css";

export interface ModalFormProps extends ModalBaseProps {

}

type Inputs = {
  name: string,
  email: string,
  description: string
};

const ModalForm = ({ title, cambiarEstado, estado, children }: ModalFormProps) =>  {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return (
    <ModalBase title="Contacto" cambiarEstado={cambiarEstado} estado={estado}>
          <div >
            <form  onSubmit={handleSubmit(onSubmit)}>
              <div>
                {/* register your input into the hook by invoking the "register" function */}
                Nombre:
                <input className={styles.input} type="text" autoComplete="on" name="Nombre" placeholder="Marcelo Gallardo" {...register("name",{
                required: {
                  value: true,
                  message: "El campo es requerido"
                },
                pattern: {
                  value: /^[A-Z]/i,
                  message: "El formato no es correcto"
                }
                })} />
            </div>

            <div>
            <label>Email:</label>
              <input className={styles.input} type="text" autoComplete="on" name="Email" placeholder="example@gmail.com" {...register("email",{
              required: {
                value: true,
                message: "El campo es requerido"
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "El formato no es correcto"
              }
              })} />
            </div>
            
            <div>
              Description:
              <input className={styles.input2} type="text" autoComplete="on" name="Description" placeholder="..." {...register("description",{
              required: {
                value: true,
                message: "El campo es requerido"
              },
              pattern: {
                value: /^[A-Z0-9._%+-]/i,
                message: "Puede contener caracteres inválidos"
              }
              })} />
            </div>

            <input className={styles.submit} type="submit" />
            </form>

            </div>
        </ModalBase>
  )
}

export default ModalForm;