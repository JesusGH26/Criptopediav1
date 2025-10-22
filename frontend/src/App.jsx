import { useState } from 'react';
import Login from './Login';
import Algorithm from './Algorithm';
import Exercise from './Exercise';

function App() {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('token'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
  };

  if (!loggedIn) return <Login onLogin={() => setLoggedIn(true)} />;

  return (
    <div>
      <h1>Criptopedia V1</h1>
      <button onClick={handleLogout}>Cerrar sesión</button>
      <Algorithm />
      <Exercise />
    </div>
  );
}

export default App;