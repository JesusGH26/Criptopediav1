import { useState } from 'react';
import { login } from './api';

function Login({ onLogin }) {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (!user || !pass) {
      setError('Por favor ingresa usuario y contraseña');
      return;
    }

    try {
      const res = await login({ username: user, password: pass });
      localStorage.setItem('token', res.data.token);
      setError('');
      onLogin();
    } catch (err) {
      setError('Credenciales inválidas o error de servidor');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Usuario"
        autoComplete="username"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        autoComplete="current-password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <button onClick={handleLogin}>Entrar</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default Login;