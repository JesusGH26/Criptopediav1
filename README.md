# Criptopedia V1

Criptopedia es una aplicación web educativa que permite simular algoritmos clásicos de criptografía y generar ejercicios interactivos con ayuda de IA. Esta versión V1 incluye:

- Login con token simulado
- Simulador de algoritmos (César y Vigenère)
- Generador de ejercicios IA
- Frontend en React + Vite
- Backend en FastAPI

## Instalación local

### 1. Backend (FastAPI)
en la terminal de vs code coloca:

cd backend
pip install -r requirements.txt
uvicorn main:app --reload --host 0.0.0.0 --port 8000

Verifica en http://localhost:8000/docs que los endpoints estén activos.

### 2. Frontend (React + Vite)
abrre otra terminal y coloca:

cd frontend
npm install

Crea un archivo .env en frontend con:
VITE_API_BASE_URL=http://localhost:8000

Luego ejecuta en la terminal de frontend:
npm run dev

Abre http://localhost:5173 en tu navegador.



