import React, { useState } from "react";

export const useForm = (initialState:any) => {
  const [form, setForm] = useState(initialState);

  const handleInputChange = (event:{target:HTMLInputElement}) => {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value });
  };

  const clear = () => {
    setForm(initialState);
  };

  return [form, handleInputChange, clear];
};
export default useForm;