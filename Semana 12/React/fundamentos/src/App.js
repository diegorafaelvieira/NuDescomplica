import Voos from "./Voos";
import React, { createContext, useState, useContext } from "react";
import { AssentosOnibus } from "./AssentosOnibus";
import { ViaCep } from "./ViaCep";
import { RenderProps } from "./RenderProps";
import { Fonts } from "./Fonts";
import { Formulario } from "./Formulario";

const Titulo = () => (
  <h2>
    <span>Olá, </span>
    <strong>mundo2</strong>
    !!!
  </h2>
);

class MeuBotao extends React.Component {
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   console.log('Clicou', e)
  // };

  imprime() {
    console.log("Imprime aqui");
  }

  handleClick(e) {
    e.preventDefault();
    this.imprime();
    console.log(this);
  }

  render() {
    return (
      <a
        onClick={(e) => {
          this.handleClick(e);
        }}
        href="https://descomplica.com.br"
      >
        {this.props.label} - {this.props.idade}
      </a>
    );
  }
}

function PessoaIdade(props) {
  return <strong>{props.label}</strong>;
}

function Pessoa(props) {
  if (props.idade < 10) {
    return <h4>Área restrita</h4>;
  }

  return (
    <section>
      Você é{" "}
      {props.idade >= 18 ? (
        <PessoaIdade label="de maior" />
      ) : (
        <PessoaIdade label="de menor" />
      )}
    </section>
  );
}

const ListItem = ({ label }) => {
  return <li>{label}</li>;
};

const Lista = () => {
  const passos = [
    "Configurar projeto",
    "Embedar projeto",
    "Criar componentes",
    "Escrever testes",
    "Fazer deploy",
  ];

  return (
    <ul>
      {passos.map((valor, index) => (
        <ListItem key={`item-${index}`} label={valor} />
      ))}
    </ul>
  );
};

export const ThemeContext = createContext({});

export const useThemeContext = () => useContext(ThemeContext);

const SettingsContext = createContext({});
export const useSettingsContext = () => useContext(SettingsContext);

function App() {
  const [font, setFont] = useState("arial");
  const labelBotao = "Entre aqui";
  return (
    <SettingsContext.Provider value={{cepUrlBase: 'https://viacep.com.br'}}>
      <ThemeContext.Provider value={{ color: "blue", font, setFont }}>
        <div className="App">
          <Titulo />
          <Formulario />
          <RenderProps />
          <Fonts />
          <ViaCep />
          <AssentosOnibus />
          <MeuBotao label={`${labelBotao} !!!`} idade={30} />
          <Voos />
          {/* <Lista />
        <Pessoa idade={19} />
        <Pessoa idade={14} />
        <Pessoa idade={9} />
        <article>
          <h2>Subtítulo</h2>
          <p>Parágrafo</p>
        </article> */}
        </div>
      </ThemeContext.Provider>
    </SettingsContext.Provider>
  );
}

export default App;
