import { useEffect, useState } from "react"

export const useCEP = (cep) => {
  const [endereco, setEndereco] = useState({});

  const fetchCEP = (cep) => {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(dados => dados.json())
    .then(endereco => {
      console.log(endereco);
      setEndereco(endereco);
    })
  }

  useEffect(() => {
    fetchCEP(cep);
  }, [cep]) // Para buscar sempre que receber um novo cep

  return endereco;
}