import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { userSignIn, signInWithGoogle, loading, setLoading } = useAuth();
  const navigate = useNavigate();

  //sign in email and password
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email);
    userSignIn(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        toast.success("Signup Successful");
        console.log(loggedInUser);
        setLoading(true);
      })
      .catch((error) => {
        toast.success(error);
      });
  };

  //google login
  const handleGoogle = async () => {
    try {
      await signInWithGoogle();
      toast.success("Signup Successful");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Helmet><title>Job Hunting | login</title></Helmet>
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
                <form onSubmit={handleLogin} className="card-body p-0 mt-5">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      id="email"
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
                      className="input input-bordered text-black"
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
                    <button
                      onClick={handleGoogle}
                      className="text-primary  mr-3"
                    >
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
