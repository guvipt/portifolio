import React, { useState } from 'react';

function Sidebar({ onSelect }) {
  const itemStyle = { marginBottom: '10px', cursor: 'pointer' };

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
      <h2>Menu</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li onClick={() => onSelect('dashboard')} style={itemStyle}>Informações</li>
        <li onClick={() => onSelect('config')} style={itemStyle}>Tecnologias</li>
        <li onClick={() => onSelect('notificacoes')} style={itemStyle}>Abilidades</li>
      </ul>
    </div>
  );
}

function MainContent({ selected }) {
  let content;

  switch (selected) {
    case 'dashboard':
      content = (
        <>
          <h3>Informações sobre mim</h3>
          <p>Nome: gustavo Dev</p>
          <p>email: </p>
          <p>numero: (19)99919-7431</p>
        
          <p>Profissão: Desenvolvedor</p>
        </>
      );
      break;
    case 'config':
      content = (
        <>
          <h3>Tecnologias</h3>
          <p>React, Node.js, TypeScript, etc.</p>
        </>
      );
      break;
    case 'notificacoes':
      content = (
        <>
          <h3>abilidades</h3>
          <p>canva, exel, word</p>
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
