import React, { useState } from 'react';

function Sidebar({ onSelect }) {
  // Estilo base para os itens do menu
  const itemStyle = {
    marginBottom: '10px',
    cursor: 'pointer',
    border: '1px solid white',
    borderRadius: '5px',
    padding: '8px 12px',
    backgroundColor: 'transparent',
    transition: 'background-color 0.2s ease'
  };

  // Componente com hover usando eventos
  const MenuItem = ({ label, value }) => (
    <li
      onClick={() => onSelect(value)}
      style={itemStyle}
      onMouseEnter={e => e.currentTarget.style.backgroundColor = '#000'}
      onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
    >
      {label}
    </li>
  );

  return (
    <div style={{
      width: '250px',
      height: '100vh',
      background: '#454',
      color: 'white',
      padding: '20px',
      position: 'fixed',
      left: 0,
      top: 0,
    }}>
      <h2>Gustavo Sales Alves</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <MenuItem label="Informações" value="Informações" />
        <MenuItem label="Tecnologias" value="Tecnologias" />
        <MenuItem label="Habilidades" value="Habilidades" />
      </ul>
    </div>
  );
}

function MainContent({ selected }) {
  let content;

  switch (selected) {
    case 'Informações':
      content = (
        <>
          <h3>Informações sobre mim</h3>
          <p>Nome: gustavo sales alves</p>
          <p>e-mail: gugasalles.g@email.com</p>
          <p>número: (19)99919-7431</p>
          <p>Profissão: Desenvolvedor</p>
          <p>capinas, Brazil</p>
        </>
      );
      break;
    case 'Tecnologias':
      content = (
        <>
          <h3>Tecnologias</h3>
          <p>React, Node.js, TypeScript, Python</p>
        </>
      );
      break;
    case 'Habilidades':
      content = (
        <>
          <h3>Habilidades</h3>
          <p>Canva, Excel, Word</p>
        </>
      );
      break;
    default:
      content = <p>Escolha uma opção no menu.</p>;
  }
 return (
    <div style={{
      marginLeft: '300px',
      padding: '200px',
    }}>
      <div style={{
        padding: '20px',
        background: '#333',
        color: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
        width: '500px'
      }}>
        {content}
      </div>
    </div>
  );
}

function App() {
  const [selected, setSelected] = useState('dashboard');

  return (
    <div>
      <Sidebar onSelect={setSelected} />
      <MainContent selected={selected} />
    </div>
  );
}

export default App;
