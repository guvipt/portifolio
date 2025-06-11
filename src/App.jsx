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
      <h2>Gustavo Sales Alves</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ marginBottom: '10px' }}>email: </li>
        <li style={{ marginBottom: '10px' }}>numero:</li>
        <li style={{ marginBottom: '10px' }}></li>
      </ul>
    </div>
  );
}

export default App;

function InfoBox1() {
  return (
    <div style={{
      position: 'absolute',
      top: '150px',
      left: '300px',
      padding: '15px',
      background: '#333',
      borderRadius: '5px',
      color: 'white',
      width: '350px'
    }}>
      <h3>Informações sobre mim</h3>
      <p>Nome: Gustavo Sales Alves</p>
      <p>Profissão: Desenvolvedor </p>
    </div>
  );
}

function InfoBox2() {
  return (
    <div style={{
      position: 'absolute',
      top: '350px',
      left: '300px',
      padding: '15px',
      background: '#444',
      borderRadius: '5px',
      color: 'white',
      width: '350px'
    }}>
      <h3>stecks</h3>
      <p>React, Node.js, TypeScript, etc.</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Sidebar />
      <InfoBox1 />
      <InfoBox2 />
    </div>
  );
}