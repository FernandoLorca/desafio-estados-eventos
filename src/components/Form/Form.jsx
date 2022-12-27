import { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "./Form.css";

const Form = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const formValidation = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      return alert("Ingresa tu nombre de usuario");
    }

    if (!password.trim()) {
      return alert("Ingresa tu contraseña");
    }

    alert("Formulario enviado con éxito");
  };

  return (
    <div className="containerForm">
      <h1>Formulario</h1>
      <form className="containerForm__form">
        <Input
          changeEvent={(e) => setName(e.target.value)}
          type="text"
          placeholder="Ingresar nombre de usuario"
          value={name}
        />
        <Input
          changeEvent={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Ingresar contraseña"
          value={password}
        />
        {password === "252525" ? (
          <Button onclick={formValidation} text="Enviar" />
        ) : null}
      </form>
    </div>
  );
};

export default Form;
