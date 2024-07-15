import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import imgs from "../assets/others/authentication.gif";
import useAuth from "../Hooks/useAuth";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { FcGoogle } from "react-icons/fc";
const SingUp = () => {
  const axiosPublic = useAxiosPublic();
  const { createUser, userProfile, googleSingin } = useAuth();
  //   naviget
  const from = location.state?.from?.pathname || "/";

  //   react hock from
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  // google sing in and  send  database
  const handleGoogleSingin = () => {
    googleSingin().then((res) => {
      console.log(res.user);
      // user data send database
      const userInfo = {
        email: res.user?.email,
        name: res.user?.dispalyName
      }
      axiosPublic.post('/user', userInfo)
      .then(res => {
        console.log(res.data);
        navigate(from, { replace: true });

      })

    });
  };

  const onSubmit = (data) => {
    // 
    createUser(data.email, data.password).then(() => {
      // 
      userProfile(data.name, data.photoURL)
        .then(() => {
          // user info all data
          const userInfo = {
            name: data.name,
            email: data.email,
          };
          //   user data send database
          axiosPublic.post("/user", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("user data send database");
              Swal.fire({
                position: "center",
                icon: "success",
                title: "User created successfully.",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate(from, { replace: true });
            }
          });
          reset();
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <>
      <Helmet>
        <title> Sign Up</title>
      </Helmet>
      <div className="hero  min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img src={imgs} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-5xl mt-5 text-center font-bold">
              Sign up now!
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-red-600">Photo URL is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    Password must be less than 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have one Uppercase one lower case, one number
                    and one special character.
                  </p>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="mb-4 text-center">
              Already have an account{" "}
              <span className="text-blue-600">
                <Link to="/login">Login</Link>
              </span>
            </p>
            <button
              onClick={handleGoogleSingin}
              className="bg-red-400 mx-7 mb-8 h-10 rounded val  flex items-center justify-center gap-3 "
            >
              {" "}
              <FcGoogle className="text-xl " /> Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingUp;
