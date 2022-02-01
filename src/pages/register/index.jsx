import context from "store/context";
import { useContext } from "react";
import { Redirect } from "react-router-dom";

import Form from "components/registerForm";
import "./register.scss";

const Register = () => {
  const { register, registered } = useContext(context);
  const handleClickSubmit = (formData) => register(formData);

  return registered ? (
    <Redirect to="/login" />
  ) : (
    <section className="registerPage">
      <h2>Register</h2>
      <Form handleClickSubmit={handleClickSubmit} />
    </section>
  );
};

export default Register;
