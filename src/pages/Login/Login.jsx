import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import { useState } from "react";

const Login = () => {
  const { userSignIn, signInWithGoogle, loading, setLoading } = useAuth();
  const navigate = useNavigate();
  const [isHostChecked, setIsHostChecked] = useState(false);
  const [isGuestChecked, setIsGuestChecked] = useState(false);

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

                  {/* <div className=" text-center border-2 border-primary rounded-2xl">
                    <button
                      onClick={() => document.getElementById('my_modal_1')}
                      className="text-primary  mr-3"
                    >
                      <p className="flex items-center gap-3">
                        <FcGoogle className="text-2xl" />
                        <span className="text-lg font-bold">
                          Sign in with Google
                        </span>
                      </p>
                    </button>
                  </div> */}

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

        
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
   
    
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <div className="flex justify-center items-center mt-2">
            <label className="flex items-center mr-10">
                <input
                    type="checkbox"
                    disabled={isGuestChecked}
                    checked={isHostChecked}
                    onChange={() => setIsHostChecked('host')}
                    className="w-8 h-8 mr-3"
                />
                <span className="text-2xl">Join as a host</span>
            </label>
            <label className="flex items-center">
                <input
                    type="checkbox"
                    disabled={isHostChecked}
                    checked={isGuestChecked}
                    onChange={() => setIsGuestChecked('guest')}
                    className="w-8 h-8 mr-3"
                />
                <span className="text-2xl">Join as a guest</span>
            </label>
        </div>
     
         
        <button
            disabled={loading || (!isGuestChecked && !isHostChecked)}
            onClick={handleGoogle}
            className="flex disabled:cursor-not-allowed lg:w-full justify-center mx-auto items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
          >
            <FcGoogle size={32} />
            <p>Continue with Google</p>

          </button>
      </form>
    </div>
    {/* <button
            disabled={loading}
            onClick={handleGoogle}
            className="flex disabled:cursor-not-allowed justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
          >
            <FcGoogle size={32} />
            <p>Continue with Google</p>

          </button> */}

  </div>
</dialog>



    </div>
  );
};

export default Login;
