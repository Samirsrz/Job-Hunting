import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { TiTick } from "react-icons/ti";
import RegisterAnnimation from "../../../public/Annimations/RegisterAnnimation.json";
import Lottie from "lottie-react";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import { imageUpload } from "../../api/utils";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
const SignUp = () => {
  const [isHostChecked, setIsHostChecked] = useState(false);
  const [isGuestChecked, setIsGuestChecked] = useState(false);
  const axiosSecure = useAxiosSecure();
  const {
    createUser,
    signInWithGoogle,
    loading,
    setLoading,
    updateUserProfile,
  } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0];
   
 

    let role = "";
    
    if (isGuestChecked) {
      role = "guest";
    } else {
      role = "host";
    }

    console.log(role);
    try {

      setLoading(true);
       
      //upload image and get image Url
      const photo = await imageUpload(image);
      console.log(photo);
      //user registration
      const result = await createUser(email, password);
      console.log(result);
      await updateUserProfile(name, photo);
      toast.success("SignUp successfull");
      const userData = {
        name,email, password,photo,role
      }
    //  console.table(userData);

   if(result?.user){
   const {data} = await axiosSecure.put('/user', userData)
    //  navigate("/");
    if(role=='host'){
      navigate('/dashboard/company-profile')
    }
    else{
      navigate('/')
    }
   }
      //save user image and photo
    
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  const handleGoogle = async () => {
    try {
      if(isHostChecked || isGuestChecked){
    const login = await signInWithGoogle();
       console.log(login);
    // setLoading(false)
    console.log(login?.user);
    const user = login?.user
  
      let role = ""
      toast.success("Signup Successful");
      setLoading(false);
      if (isGuestChecked) {
        role = 'guest'
     
      } else if (isHostChecked) {
        role = 'host'
       
      }

    const userData = {
      role,
      name: user?.displayName,
      email : user?.email,
      photo: user?.photoURL,

    }

 if(login?.user){
  const {data} = await axiosSecure.put('/user', userData)
 
 if(role=='host'){
  navigate('/dashboard/company-profile')
 }
else{
  navigate("/");
}
  
  }
     }
    else{
       return toast.error('select a role')
    }
      setLoading(false)  
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container max-w-screen-xl m-auto flex flex-col overflow-x-auto lg:w-[1770px] items-center justify-center min-h-screen mx-auto lg:flex-row gap-10 ">
      <Helmet>
        <title>Job Hunting | Sign Up</title>
      </Helmet>
      <div className="card lg:w-[442px] p-3 my-3 lg:mt card-compact  shadow-xl">
        <figure>
          <Lottie
            animationData={RegisterAnnimation}
            className="h-96 w-72 lg:w-96"
          ></Lottie>
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {" "}
            <TiTick /> Register to know more details{" "}
          </h2>
          <h2 className="card-title">
            {" "}
            <TiTick /> Get your dream Job{" "}
          </h2>
          <h2 className="card-title">
            {" "}
            <TiTick /> Use your skill to earn!!!{" "}
          </h2>

          <div className="card-actions">
            <p className="lg:px-6 text-sm text-center text-gray-400">
              Already have an account?{" "}
              <Link
               to='/login'
              >
               <span className="text-primary text-xl font-bold">Login</span>
              </Link>
              .
            </p>
          </div>
        </div>
      </div>

      {/* sign up form  */}
      <div className="flex justify-center  flex-1 items-center min-h-screen">
        <div className="flex flex-col lg:w-full p-6 rounded-md sm:p-10 border-x-2  text-gray-900">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-6xl italic font-bold">~~Sign Up~~</h1>
            <p className="text-sm text-gray-500">
              Create your Next-Hire profile
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            noValidate=""
            action=""
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Your Name Here"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>
              <div>
                <label htmlFor="image" className="block mb-2 text-sm">
                  Select Image:
                </label>
                <input
                  required
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Enter Your Email Here"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>
              <div>
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm mb-2">
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  name="password"
                  autoComplete="new-password"
                  id="password"
                  required
                  placeholder="*******"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                />
              </div>
              <div>
                <div className="flex justify-between">
                  <label htmlFor="phone" className="text-sm mb-2">
                    Phone
                  </label>
                </div>
                <input
                  type="number"
                  name="phone"
                  autoComplete="new-password"
                  id="phone"
                  required
                  placeholder="+880**********"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                />
              </div>

              {/* <div className="flex justify-center items-center mt-20">
                <label className="flex items-center mr-10">
                  <input
                    type="checkbox"
                     disabled={isGuestChecked}
                    checked={isHostChecked}
                    onChange={() => setIsHostChecked(!isHostChecked)}
                    className="w-8 h-8 mr-3"
                  />
                  <span className="text-2xl">Join as a host</span>
                </label>
                <label className="flex items-center ">
                  <input
                    type="checkbox"
                    disabled={isHostChecked}
                    checked={isGuestChecked}
                    onChange={() => setIsGuestChecked(!isGuestChecked)}
                    className="w-8 h-8 mr-3"
                  />
                  <span className="text-2xl">Join as a guest</span>
                </label>
              </div> */}

<div className="flex justify-center items-center mt-20 space-x-10">
  <label className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow-md hover:bg-blue-50 transition duration-300 ease-in-out">
    <input
      type="radio"
      name="joinOption"
      checked={isHostChecked}
      onChange={() => setIsHostChecked(true)}
      className="w-6 h-6 text-blue-500 focus:ring-blue-400"
    />
    <span className="text-2xl font-semibold text-gray-700">Join as a host</span>
  </label>
  
  <label className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow-md hover:bg-blue-50 transition duration-300 ease-in-out">
    <input
      type="radio"
      name="joinOption"
      checked={isGuestChecked}
      onChange={() => setIsGuestChecked(true)}
      className="w-6 h-6 text-blue-500 focus:ring-blue-400"
    />
    <span className="text-2xl font-semibold text-gray-700">Join as a guest</span>
  </label>
</div>



            </div>

            <div>
              <button
                 disabled={loading || (!isGuestChecked && !isHostChecked)}
                type="submit"
                className="bg-primary w-full lg:[100px] rounded-md py-3 text-white"
              >
                {loading ? (
                  <TbFidgetSpinner className="animate-spin m-auto"></TbFidgetSpinner>
                ) : (
                  "Register Now"
                )}
              </button>
            </div>
          </form>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            <p className="px-3 text-sm dark:text-gray-400">
              Signup with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          </div>
          <button
            //  disabled={loading || (!isGuestChecked && !isHostChecked)}
            onClick={handleGoogle}
            className="flex disabled:cursor-not-allowed justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
          >
            <FcGoogle size={36} />
            <p>Continue with Google</p>
          </button>
        </div>
         

      </div>
    </div>
  );
};

export default SignUp;
