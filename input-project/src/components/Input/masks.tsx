
export const cpf = (event: React.FormEvent<HTMLInputElement>) => {
  event.currentTarget.maxLength = 14;
  let value = event.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d)/, "$1.$2.$3-$4");
  event.currentTarget.value = value;
  return event;
};

export const cep = (event: React.FormEvent<HTMLInputElement>) => {
  event.currentTarget.maxLength = 9;
  let value = event.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{5})(\d)/, "$1-$2");
  event.currentTarget.value = value;
  return event;
};

export const date = (event: React.FormEvent<HTMLInputElement>) => {
  event.currentTarget.maxLength = 10;
  let value = event.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{2})(\d{2})(\d)/, "$1/$2/$3");
  event.currentTarget.value = value;
  return event;
};
