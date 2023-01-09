import React, { InputHTMLAttributes, useCallback } from "react";
import {InputStyled} from './styled'

// type InputProperty = {
//   placeholder: string;
//   pattern?: string;
//   onChange: any;
//   name: string;
//   value: string;
// };
export const Input:React.FC<InputHTMLAttributes<HTMLInputElement>> = ({...props}) => {

    const handleKeyUp = useCallback((event:React.FormEvent<HTMLInputElement>)=>{
    //    event.currentTarget.maxLength = 14;
       let value = event.currentTarget.value;
       value = value.replace(/\D/g,"");
       value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
       event.currentTarget.value = value
    }, [])
  return (
    <InputStyled
      {...props}
      onKeyUp={handleKeyUp}
    />
  );
};
