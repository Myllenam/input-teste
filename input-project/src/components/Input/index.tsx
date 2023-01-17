import React, { InputHTMLAttributes, useCallback } from "react";
import {InputStyled} from './styled'
import { cpf, cep, date} from "./masks";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
mask?: "cep"| "cpf" |"date"
}
export const Input:React.FC<InputProps> = ({mask,...props}) => {

    const handleKeyUp = useCallback((event:React.FormEvent<HTMLInputElement>)=>{
   if(mask === "cep"){
    cep(event)
   }else if (mask === "cpf"){
    cpf(event)
   }else if(mask === "date"){
    date(event)
   }
      
     
    }, [])
  return (
    <InputStyled
      {...props}
      onKeyUp={handleKeyUp}
    />
  );
};
