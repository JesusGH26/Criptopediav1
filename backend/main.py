from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# 🔑 Configuración CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # en producción puedes restringir a tu dominio
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class LoginReq(BaseModel):
    username: str
    password: str

class SimReq(BaseModel):
    algorithm: str
    text: str
    key: str
    mode: str

class ExReq(BaseModel):
    algorithm: str

@app.post("/login")
def login(req: LoginReq):
    return {"token": "fake-jwt-token"}

@app.post("/simulate")
def simulate(req: SimReq):
    return {"result": f"Simulación de {req.algorithm} con texto {req.text}"}

@app.post("/exercise")
def exercise(req: ExReq):
    return {
        "exercise": f"Ejercicio de {req.algorithm}: cifra 'HOLA' con clave 3",
        "solution": "KROD"
    }