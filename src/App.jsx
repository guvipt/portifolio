
import React from 'react';

function Sidebar() {
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
        <li style={{ marginBottom: '10px' }}>Dashboard</li>
        <li style={{ marginBottom: '10px' }}>Configurações</li>
        <li style={{ marginBottom: '10px' }}>Notificações</li>
        <li style={{ marginBottom: '10px' }}>Ajuda</li>
        <li>Sair</li>
      </ul>
    </div>
  );
}

function InfoBoxes() {
  return (
    <div style={{
      marginLeft: '270px', // Empurra para o lado da sidebar
      padding: '20px',
      display: 'flex',
      gap: '20px'
    }}>
      <div style={{
        padding: '15px',
        background: '#333',
        borderRadius: '5px',
        color: 'white',
        width: '350px'
      }}>
        <h3>Informações</h3>
        <p>Última atualização: Hoje</p>
        <p>Status do sistema: Online</p>
      </div>

      <div style={{
        padding: '15px',
        background: '#444',
        borderRadius: '5px',
        color: 'white',
        width: '350px'
      }}>
        <h3>Ajuda rápida</h3>
        <p>Precisa de suporte? Entre em contato!</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Sidebar />
      <InfoBoxes />
    </div>
  );
}

export default App;
