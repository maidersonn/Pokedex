import { useForm } from "react-hook-form";

const Form = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="username" {...register("username")} />
      <input
        placeholder="email"
        {...register("email", {
          required: true,
          pattern: {
            value: /^\S+@\S+$/i,
          },
        })}
      />
      {errors.email && <span>This field is required</span>}
      <input
        placeholder="password"
        type="password"
        {...register("password", { required: true })}
      />
      {errors.password && <span>This field is required</span>}
      <input type="submit" />
    </form>
  );
};
export default Form;
