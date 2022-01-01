import { useForm } from "react-hook-form";

const Form = ({ handleClickSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(handleClickSubmit)}>
      <input placeholder="username" {...register("username")}></input>
      <input
        placeholder="email"
        {...register("email", {
          required: true,
          pattern: {
            value: /^\S+@\S+$/i,
          },
        })}
      ></input>
      {errors.email && <p>This field is required</p>}
      {errors.email && errors.email.type === "pattern" ? (
        <p>This is not an email</p>
      ) : null}
      <input
        placeholder="password"
        type="password"
        {...register("password", { required: true })}
      ></input>
      {errors.password && <p>This field is required</p>}
      <input type="submit" />
    </form>
  );
};

export default Form;
