import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Login(props) {
  const [choice, setChoice] = useState(1);

  let history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    props.setUser(choice);
    history.push("/points");
  }

  function handleChange(e) {
    setChoice(parseInt(e.target.value));
  }
  return (
    <div className="loginForm-container">
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>
          <h3>Login</h3>
          <select className="loginInput" onChange={handleChange}>
            <option value="1">John</option>
            <option value="2">Jane</option>
          </select>
        </label>
        <input className="login-button" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Login;
