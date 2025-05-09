// src/pages/Register.tsx
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        username,
        password,
      });
      alert(res.data.message);
      navigate("/login");
    } catch (err: any) {
      alert("Erro ao registrar");
    }
  };

  return (
    <div className="auth-container">
      <h2>Registrar</h2>
      <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Criar Conta</button>
      <p style={{ textAlign: "center" }}>
        Já tem conta? <a href="/login">Entrar</a>
      </p>
    </div>
  );
}
