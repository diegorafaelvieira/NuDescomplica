import { useState, useRef } from "react";

export const Formulario = () => {
  const [fieldValue, setFieldValue] = useState({
    nome: '',
    cidade: ''
  });
  
  const fieldCidade = useRef(null);

  //Funcao que vai ser invocada toda vez que o usuério digitar no input
  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setFieldValue({
      ...fieldValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(fieldCidade.current.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} action="https://descomplica.com.br">
        //Evento que é invocado toda vez que o campo altera
        <input type="text" name="nome" value={fieldValue.nome} onChange={handleChange} />
        <input type="text" name="cidade" ref={fieldCidade} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
