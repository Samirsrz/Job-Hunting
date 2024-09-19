import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <dialog id="my_modal_3" className="modal flex justify-end ">
        <div className="modal-box size-full ">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-primary absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="hero min-h-screen ">
            <div className="">
              <div className="card">
                <h1 className="text-4xl text-black font-semibold mt-5">
                  Login
                </h1>
                <form className="card-body p-0 mt-5">
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
                      <a
                        href="#"
                        className="label-text-alt link link-hover text-primary"
                      >
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
                        <FcGoogle className="text-2xl" />
                        <span className="text-lg font-bold">
                          Sign in with Google
                        </span>
                      </p>
                    </button>
                  </div>

                  <p className="mt-10 text-black">
                    If you new to this website?{" "}
                    <Link
                      to="/signup"
                      className="underline font-bold text-primary"
                    >
                      Please Sign up
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
