import React, { useState } from 'react'
import { Form,Data,Button } from './styled'
import { Input } from '../../../../components/Input/index'
import {useForm} from '../../../../hooks/useForm'

// type FormType = {
//   email:string,
//   cpf: string,
//   data:string
// }

export const InputForm = () => {
const [form, onChange, clear]=useForm({email:"", cpf:"", date:""})
const[clicked, setClicked]=useState(false)

const onSubmitForm = (event:React.ChangeEvent<HTMLInputElement>) => {
  event.preventDefault();
 console.log(form)
};
const formString = JSON.stringify(form)
  return (
    <>
    <br/>
   <Form onSubmit={onSubmitForm} >
    <Input placeholder='cpf' onChange={onChange}  name={"cpf"}  value={form.cpf} maxLength={14}/>
    <br/>
    <Input placeholder='e-mail' onChange={onChange} name={"email"} value={form.email} maxLength={30}/>
    <br/>
    <Input placeholder='date' onChange={onChange} name={"date"}  value={form.date} maxLength={8}/>
    <br/>
    <br/>
    <Button onClick={()=>setClicked(true)}>Enviar</Button>
   </Form>
   <br/>
   <br/>
   {clicked && <Data>{formString}</Data>}
   </>
  )
}
