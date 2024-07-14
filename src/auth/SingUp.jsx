import {  useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm, } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContex } from "../Providers/AuthProviders";

const SingUp = () => {
    const {createUser} = useContext(AuthContex)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    formState: { isSubmitSuccessful },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    if(isSubmitSuccessful){
        reset()
    }
  }, [isSubmitSuccessful, reset]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSingup =(ev)=>{
    ev.preventDefault()
    createUser(email,password)
    .then(result =>console.log(result.user))
  }

  return (
    <>
    <Helmet>
        <title>SingUp</title>
    </Helmet>
    <div className="text-center flex items-center  justify-center my-40">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-3/4  border-2 border-black p-6 md:w-1/3 gap-4"
        onClick={handleSingup}
      >
        <input
          className=" h-10 bg-gray-300 rounded"
          type="taxt"
          name="name"
          {...register("name", { required: true, maxLength: 20 })}
          placeholder="Enter yor Name"
        />
        {errors.name && (
          <span className="text-red-800">This field is required</span>
        )}

        <input
          className=" h-10 bg-gray-300 rounded"
          type="email"
          placeholder="Enter yor Email"
          {...register("email", { required: true })}
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        {errors.email && (
          <span className="text-red-800">Please entre an email address</span>
        )}

        <input
          className=" h-10 bg-gray-300 rounded"
          type="password"
          placeholder="Enter your Password"
          {...register("password", {
            required: true,
            maxLength: 20,
            minLength: 6,
            pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,25}/
          })}
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        {errors.password?.type==='required' && (
          <span className="text-red-800">This field is required</span>
        )}
        {errors.password?.type === "minLength" && (
          <p className="text-red-800" role="alert">
            Password must be 6 characters
          </p>
        )}
        {errors.password?.type === "pattern" && (
          <p className="text-red-800" role="alert">
            at least one lowercase letter, one uppercase letter, one numeric digit, and one special character
          </p>
        )}

        <p>
          Already registered? Go to{" "}
          <Link to={"/login"}>
            <span className="text-red-400 cursor-pointer">LogIn</span>
          </Link>
        </p>
        <button type="submit" className="bg-blue-700 h-10 rounded mt-6 ">
          Log in
        </button>
        <button className="bg-red-400 h-10 rounded val  flex items-center justify-center gap-3 ">
          {" "}
          <FcGoogle className="text-xl" /> Google
        </button>
      </form>
    </div>
    </>
  );
};

export default SingUp;
