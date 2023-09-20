import React, { useEffect, useState } from "react";
import "./style.css";
import logo from "../../assets/Logo.svg";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const validationToken = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      api
        .post("auth/token_health", {}, config)
        .then((response) => {
          if (response.data.type == "company") {
            localStorage.setItem(
              "company",
              JSON.stringify(response.data.company)
            );
            navigate("/jornada/admin");
          } else {
            localStorage.setItem(
              "employee",
              JSON.stringify(response.data.employee)
            );
            navigate("/jornada/page1");
          }
        })
        .catch((error) => {
          localStorage.clear();
        });
    }
  };
  useEffect(() => {
    validationToken();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const params = new URLSearchParams();
    params.append("username", username);
    params.append("password", password);

    api
      .post("auth/login", params)
      .then((response) => {
        localStorage.setItem("token", JSON.stringify(response.data));
        alert("Bem-vindo!");
      })
      .catch((error) => alert("Usuário incorreto!"));
    validationToken();
  };

  return (
    <div className="container">
      <div className="background-image"></div>
      <div className="content">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                placeholder="Digite seu email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Senha:</label>
              <input
                type="password"
                id="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
              />
            </div>
            <div className="forgot-password">
              <Link to="/esqueceuSenha">
                <a href="#">Esqueceu a senha?</a>
              </Link>
            </div>
            <button type="submit" className="button">
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
