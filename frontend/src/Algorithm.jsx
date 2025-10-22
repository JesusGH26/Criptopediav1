import { useState } from 'react';
import { simulate } from './api';

function Algorithm() {
  const [text, setText] = useState('');
  const [key, setKey] = useState('');
  const [result, setResult] = useState('');
  const [algorithm, setAlgorithm] = useState('cesar');
  const [mode, setMode] = useState('encrypt');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSimulate = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await simulate({ algorithm, text, key, mode });
      setResult(res.data.result);
    } catch (err) {
      setError('Error al simular el algoritmo');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Simulador de Algoritmos</h2>

      <label>
        Algoritmo:
        <select value={algorithm} onChange={(e) => setAlgorithm(e.target.value)}>
          <option value="cesar">César</option>
          <option value="vigenere">Vigenère</option>
        </select>
      </label>

      <label>
        Modo:
        <select value={mode} onChange={(e) => setMode(e.target.value)}>
          <option value="encrypt">Cifrar</option>
          <option value="decrypt">Descifrar</option>
        </select>
      </label>

      <input
        placeholder="Texto"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        placeholder="Clave"
        value={key}
        onChange={(e) => setKey(e.target.value)}
      />

      <button onClick={handleSimulate} disabled={loading}>
        {loading ? 'Procesando...' : 'Ejecutar'}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      <p><strong>Resultado:</strong> {result}</p>
    </div>
  );
}

export default Algorithm;