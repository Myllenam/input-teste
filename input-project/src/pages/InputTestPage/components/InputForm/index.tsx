import React, { useState } from "react";
import { Form, Data, Button } from "./styled";
import { Input } from "../../../../components/Input/index";
import { useForm } from "../../../../hooks/useForm";

export const InputForm = () => {
  const [form, onChange, clear] = useForm({
    cpf: "",
    email: "",
    date: "",
    cep: "",
  });
  const [clicked, setClicked] = useState(false);

  const onSubmitForm = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(form);
  };

  // To do: filtrar dados para regex ou enviar para um futuro/ possível back
  // const newForm = {...form, "cpf":form.cpf.replace(/\D/g,""), "cep": form.cep.replace(/\D/g,"")}
  // console.log("SPREAD",newForm)

  const formString = JSON.stringify(form);
  return (
    <>
      <br />
      <Form onSubmit={onSubmitForm}>
        <Input
          placeholder="cpf"
          onChange={onChange}
          name={"cpf"}
          value={form.cpf}
          mask={"cpf"}
        />
        <br />
        <Input
          placeholder="e-mail"
          onChange={onChange}
          name={"email"}
          value={form.email}
          maxLength={35}
        />
        <br />
        <Input
          placeholder="date"
          onChange={onChange}
          name={"date"}
          value={form.date}
          mask={"date"}
        />
        <br />
        <Input
          placeholder="cep"
          onChange={onChange}
          name={"cep"}
          value={form.cep}
          mask={"cep"}
        />
        <br />
        <br />
        <Button onClick={() => setClicked(true)}>Enviar</Button>
      </Form>
      <br />
      <br />
      {clicked && <Data>{formString}</Data>}
    </>
  );
};
