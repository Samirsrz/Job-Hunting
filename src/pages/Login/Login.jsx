import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="">
          <div className="card  w-96  shadow-2xl bg-base-100">
            <h1 className="text-4xl text-center font-semibold mt-5">sign in</h1>
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover text-primary">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-primary text-white font-bold text-xl"
                  type="submit"
                  value="sign in"
                />
              </div>

              <div className="divider">OR</div>

              <div className=" text-center border-2 border-primary rounded-2xl">
                <button className="text-primary  mr-3">
                  <p className="flex items-center gap-3">
                    <FcGoogle className="text-2xl"/>
                    <span className="text-lg font-bold">
                      Sign in with Google
                    </span>
                  </p>
                </button>
              </div>

              <p className="mt-10">
                If you new to this website?{" "}
                <Link to="/signup" className="underline font-bold text-primary">
                  Please Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
