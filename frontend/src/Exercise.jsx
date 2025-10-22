import { useState } from 'react';
import { generateExercise } from './api';

function Exercise() {
  const [exercise, setExercise] = useState('');
  const [solution, setSolution] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [algorithm, setAlgorithm] = useState('cesar');

  const handleGenerate = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await generateExercise(algorithm);
      setExercise(res.data.exercise);
      setSolution(res.data.solution);
    } catch (err) {
      setError('Error al generar el ejercicio');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Ejercicio IA</h2>

      <label>
        Algoritmo:
        <select value={algorithm} onChange={(e) => setAlgorithm(e.target.value)}>
          <option value="cesar">César</option>
          <option value="vigenere">Vigenère</option>
        </select>
      </label>

      <button onClick={handleGenerate} disabled={loading}>
        {loading ? 'Generando...' : 'Generar'}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <p><strong>Ejercicio:</strong> {exercise}</p>
      <p><strong>Solución:</strong> {solution}</p>
    </div>
  );
}

export default Exercise;