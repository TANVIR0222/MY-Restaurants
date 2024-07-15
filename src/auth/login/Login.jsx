import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useEffect, useRef, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import  './login.css'
import useAuth from "../../Hooks/useAuth";
const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // user jekhane caiche oi khane jabe ta na hole home page a jave
  const from = location.state?.from?.pathname || "/";

  // capcha
  const capchaRef = useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { singIn , googleSingin } = useAuth();

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
    singIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Login success full",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from, { replace: true });
    });
  };

  const handleGoogleLogin = () =>{
    googleSingin()
    .then(res => {
      console.log(res.user);
      navigate(from, { replace: true });

    })
  }

  return (
    <>
      <Helmet>
        <title>SingUp</title>
      </Helmet>
      <div className="bgimg">
        <div className="text-center flex items-center  left-0 right-0 top-0 bottom-0  justify-center ">
          <form
            className="flex flex-col w-3/4  mt-44 border-2 border-black p-6 md:w-1/3 gap-4"
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
              New here?{" "}
              <Link to={"/singup"}>
                <span className="text-red-400 cursor-pointer">
                  Create a New Account
                </span>
              </Link>
            </p>
            <button type="submit" className="bg-blue-700 h-10 rounded mt-6 ">
              Log in
            </button>
            <button onClick={handleGoogleLogin} className="bg-red-400 h-10 rounded val  flex items-center justify-center gap-3 ">
              {" "}
              <FcGoogle className="text-xl" /> Google
            </button>
          </form>

          <div className=" hidden  gap-3 items-center justify-center mr-2">
            <LoadCanvasTemplate />
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
      </div>
    </>
  );
};

export default Login;
