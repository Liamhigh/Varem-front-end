import React from 'react';
import logo from './assets/verum-omnis-logo.png';

function App() {
  const [status, setStatus] = React.useState('Loading...');

  React.useEffect(() => {
    fetch('https://verum-backend.vercel.app/api/verum_backend')
      .then(res => res.json())
      .then(data => setStatus(data.message))
      .catch(() => setStatus('❌ Error connecting to backend.'));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <img src={logo} alt="Verum Omnis Logo" style={{ width: 200 }} />
      <h1>Welcome to Verum Omnis</h1>
      <p>The world's first forensic AI platform — self-verifying, sealed, and secured.</p>
      <p><strong>Backend Status:</strong> {status}</p>
    </div>
  );
}

export default App;