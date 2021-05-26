import React from "react";
import {
  AppButton,
  Input,
  useFormData,
  useFormValidation,
} from "../components/Form";
const Register = ({ history }) => {
  const [data, onChange] = useFormData({
    first_name: "",
    last_name: "",
    phone: "",
    date: "",
    email: "",
    password: "",
  });
  const [errors, validate] = useFormValidation({}, (Yup) => {
    return {
      email: Yup.string().required().email().label("Email"),
      password: Yup.string().required().label("Password"),
      last_name: Yup.string().required().label("Last Name"),
      first_name: Yup.string().required().label("First Name"),
      phone: Yup.string().required().label("Phone"),
      date: Yup.string().required().label("Birth Date"),
    };
  });
  const onSubmit = React.useCallback(() => {
    validate(data)
      .then(() => {
        history.push("/home");
      })
      .catch((ex) => {
        console.log("error", ex);
      });
  }, [data]);
  return (
    <div>
      <div className="row align-items-center justify-content-center mt-5">
        <div className="col-md-4">
          <h1>Register</h1>
          <Input
            name="email"
            value={data.email}
            onChange={onChange}
            error={errors.email}
            label="Email"
            type="email"
          />
          <Input
            name="first_name"
            value={data.first_name}
            onChange={onChange}
            error={errors.first_name}
            label="First Name"
          />
          <Input
            name="last_name"
            value={data.last_name}
            onChange={onChange}
            error={errors.last_name}
            label="Last Name"
          />
          <Input
            name="phone"
            value={data.phone}
            onChange={onChange}
            error={errors.phone}
            type="tel"
            label="Phone Number"
          />
          <Input
            name="date"
            value={data.date}
            onChange={onChange}
            error={errors.date}
            label="Birth Date"
            type="date"
          />
          <Input
            name="password"
            value={data.password}
            onChange={onChange}
            error={errors.password}
            label="Password"
            type="password"
          />
          <AppButton
            title="Register"
            className="btn-primary btn-block"
            onPress={onSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
