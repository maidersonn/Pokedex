import context from "store/context";
import { useContext, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import Form from "components/loginForm";
import Answer from "components/loginAnswer";
import "./login.scss";

export default () => {
  const { user, login } = useContext(context);
  const history = useHistory();
  const [loginResult, setLoginResult] = useState(true);

  const onSubmit = async (data) => {
    const result = await login(data);
    setLoginResult(result);
  };

  const goToRegister = () => history.push("/register");

  return user ? (
    <Redirect to="/user" />
  ) : (
    <section className="loginPage">
      <section className="registerInLogin">
        <p>Not registered yet?</p>
        <button onClick={goToRegister}>Register</button>
      </section>

      <h2>Login:</h2>
      <Form onSubmit={onSubmit} />
      <Answer result={loginResult} />
    </section>
  );
};
