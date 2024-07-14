import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useContext, useEffect, useRef, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContex } from "../Providers/AuthProviders";
const Login = () => {
  // capcha
  const capchaRef = useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { createUser } = useContext(AuthContex);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleValidateCapcha = () => {
    const user_captcha_value = capchaRef.current.value;
    if (validateCaptcha(user_captcha_value) === true) {
      alert("not cru");
    }
  };

  const handleLogin = (ev) => {
    ev.preventDefault();
    createUser(email, password).then((result) => {
      const user = result.user;
      console.log(user);
    });
  };

  return (
    <div className="text-center flex items-center  justify-center mt-40">
      <form
        className="flex flex-col w-3/4  border-2 border-black p-6 md:w-1/3 gap-4"
        onClick={handleLogin}
      >
        <input
          className=" h-10 bg-gray-300 rounded"
          type="email"
          placeholder="Enter yor Email"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
          required
        />
        <input
          className=" h-10 bg-gray-300 rounded"
          type="password"
          placeholder="Enter your Password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          required
        />
        
        <p>
          Alrady have an a account?{" "}
          <span className="text-red-400 cursor-pointer">Register</span>
        </p>
        <button type="submit" className="bg-blue-700 h-10 rounded mt-6 ">
          Log in
        </button>
        <button className="bg-red-400 h-10 rounded val  flex items-center justify-center gap-3 ">
          {" "}
          <FcGoogle className="text-xl" /> Google
        </button>
      </form>
      <LoadCanvasTemplate />

        <div className=" flex gap-3 items-center justify-center mr-2">
          <input
            ref={capchaRef}
            name="capcha"
            type="text"
            className=" h-10 bg-gray-300 rounded"
            placeholder="Enter your Capcha"
          />
          <button
            type="submit"
            onClick={handleValidateCapcha}
            className="bg-blue-700 h-10 p-2 rounded "
          >
            validate
          </button>
        </div>
    </div>
  );
};

export default Login;
