import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { TbFidgetSpinner } from "react-icons/tb";

const Login = () => {
  const { userSignIn, signInWithGoogle, loading, setLoading } = useAuth();
  const navigate = useNavigate();
  const [isHostChecked, setIsHostChecked] = useState(false);
  const [isGuestChecked, setIsGuestChecked] = useState(false);


  const location = useLocation();
 const from = location?.state || '/'
  //sign in email and password
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email);
    userSignIn(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        toast.success("Signup Successful");
        navigate(from)
        
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
      navigate(from)
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Helmet><title>Job Hunting | login</title></Helmet>
    
      <div className='flex justify-center items-center min-h-screen'>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Log In</h1>
          <p className='text-sm text-gray-400'>
            Sign in to access your account
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          noValidate=''
          action=''
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                required
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-primary bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2'>
                  Password
                </label>
              </div>
              <input
                type='password'
                name='password'
                autoComplete='current-password'
                id='password'
                required
                placeholder='*******'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-primary bg-gray-200 text-gray-900'
              />
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='bg-primary w-full rounded-md py-3 text-white'
            >
             {loading? <TbFidgetSpinner className='animate-spin m-auto'></TbFidgetSpinner> : 'Continue'}
            </button>
          </div>
        </form>
        <div className='space-y-1'>
          <button className='text-xs hover:underline hover:text-primary text-gray-400'>
             Forgot Password? 
          </button>
        </div>
        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-400'>
            Login with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
        <button onClick={handleGoogle} disabled={loading} className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </button>
        <p className='px-6 text-sm text-center text-gray-400'>
          Don&apos;t have an account yet?{' '}
          <Link
            to='/signup'
            className='hover:underline hover:text-primary text-gray-600'
          >
            Sign up
          </Link>
          .
        </p>
      </div>
    </div>



    </div>
  );
};

export default Login;
