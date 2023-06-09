const voosDisponiveis = [
  {
    id: "123",
    title: "Volta ter. 19 de julho",
    details: [
      {
        id: "132",
        title: "Espaço para pernas dentro da média (76 cm)",
      },
      {
        id: "133",
        title: "Saída USB",
      },
      {
        id: "134",
        title: "Vídeo sob demanda",
      },
      {
        id: "135",
        title: "Estimativas das emissões de carbono: 83 kg",
      },
    ],
  },

  {
    id: "151",
    title: "13:00 - 15:00",
    details: [
      {
        id: "132",
        title: "Espaçoso para pernas dentro da média (76 cm)",
      },
      {
        id: "133",
        title: "Saída USB",
      },
      {
        id: "134",
        title: "Vídeo sob demanda",
      },
      {
        id: "135",
        title: "Estimativas das emissões de carbono: 83 kg",
      },
    ],
  },
];

function ItemVooDetails({ details }) {
  return (
    <ul>
      {details.map((detail) => (
        <li key={detail.id}>{detail.title}</li>
      ))}
    </ul>
  );
}

function ItemVoo({title, children}) {
  return (
    <div className="voo">
      <header>
        <h3>{title}</h3>
      </header>
      <div className="voo-details">
        {children}
      </div>
    </div>
  );
}

function Voos() {
  return (
    <div className="voos">
      {voosDisponiveis.map((voo) => (
        <ItemVoo key={voo.id} title={voo.title}>
          <ItemVooDetails details={voo.details} />
        </ItemVoo>
      ))}
    </div>
  );
}

export default Voos;
