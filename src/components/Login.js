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
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Login
          <select onChange={handleChange}>
            <option value="1">John</option>
            <option value="2">Jane</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Login;
