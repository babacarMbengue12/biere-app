import React from "react";
import {
  AppButton,
  Input,
  useFormData,
  useFormValidation,
} from "../components/Form";
const Login = ({ history }) => {
  const [data, onChange] = useFormData({
    email: "test@gmail.com",
    password: "passerty",
  });
  const [errors, validate, setErrors] = useFormValidation({}, (Yup) => {
    return {
      email: Yup.string().required().email().label("Email"),
      password: Yup.string().required().label("Password"),
    };
  });
  const onSubmit = React.useCallback(() => {
    validate(data)
      .then(() => {
        if (data.email !== "test@gmail.com" || data.password !== "passerty") {
          setErrors({ email: "invalid credentials" });
        } else {
          history.push("/home");
        }
      })
      .catch((ex) => {
        console.log("error", ex);
      });
  }, [data, history, setErrors, validate]);
  return (
    <div>
      <div className="row align-items-center justify-content-center mt-5">
        <div className="col-md-4">
          <h1>Login</h1>
          <Input
            name="email"
            value={data.email}
            onChange={onChange}
            error={errors.email}
            label="Email"
            type="email"
          />
          <Input
            name="password"
            value={data.password}
            onChange={onChange}
            error={errors.password}
            label="Password"
            type="password"
          />
          <AppButton title="Login" className="btn-primary" onPress={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Login;
