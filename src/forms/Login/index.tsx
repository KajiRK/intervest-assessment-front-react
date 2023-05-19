import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import UserIcon from "components/Icons/User";
import LockIcon from "components/Icons/Lock";
import PrimaryButton from "components/Buttons/Primary";

export default function LoginForm() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // form validation
  const schema = yup
    .object({
      username: yup.string().required("Username field is required"),
      password: yup.string().required("Password field is required"),
    })
    .required();

  // validation schema resolver and set default values
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data: any) => {
    console.log(data, "loginData");
    // we can the authendication process here
    // and once the credentials are compaored if success - will navigate to home page
    // if not - return back to login page with repective error message that comes from authendication process
    navigate("/home");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="py-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <UserIcon />
            </div>
            <input
              {...register("username", {
                onChange: (e) => {
                  setUsername(e.target.value);
                },
              })}
              value={username}
              autoComplete="off"
              placeholder="Username"
              type="text"
              className="w-full p-2 pl-10 text-md border border-gray-300 rounded placeholder:font-light placeholder:text-gray-500"
            />
          </div>
          {errors.username && (
            <p className="text-red-600 text-sm mt-2">
              {errors.username.message}
            </p>
          )}
        </div>
        <div className="py-2">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <LockIcon />
            </div>
            <input
              {...register("password", {
                onChange: (e) => {
                  setPassword(e.target.value);
                },
              })}
              value={password}
              placeholder="Password"
              type="password"
              className="w-full p-2 pl-10 text-md border border-gray-300 rounded placeholder:font-light placeholder:text-gray-500"
            />
          </div>
          {errors.password && (
            <p className="text-red-600 text-sm mt-2">
              {errors.password.message}
            </p>
          )}
        </div>
        <div className="flex justify-between w-full py-4">
          <div className="flex items-center mr-7">
            <input
              type="checkbox"
              className="w-5 h-5 text-primary-purple border-gray-300 rounded focus:ring-primary-purple focus:ring-2"
            />
            <label className="ml-2">Remember me</label>
          </div>
          <a href="/" className="text-md text-primary-purple">
            Forgot password
          </a>
        </div>
        <PrimaryButton type="submit" text="Login In" />
        <div>
          Or{" "}
          <a href="/" className="text-md text-primary-purple">
            register now!
          </a>
        </div>
      </form>
    </>
  );
}
