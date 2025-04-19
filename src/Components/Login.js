import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {signUpUser} from "../slice/userAuthSlice"
const Login = () => {
  const [isSignIn, setSignIn] = useState(false);
  const [debounceData, setDebouncedData] = useState(null)
  const [userData, setUserData] = useState({
    Fullname: "",
    Email: "",
    Password: "",
  });

  const userDataDispatch = useDispatch();
  const handleSignUp = () => {
    setSignIn(!isSignIn);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(isSignIn)
      userDataDispatch(signUpUser(userData))
  };

  useEffect(()=>{
    const timer = setTimeout(() =>{
      setDebouncedData(userData);
    }, 500)

    return () => clearTimeout(timer);
  }, [userData])

  useEffect(() =>{
    
  },[debounceData])

  const handleOnchange = (e) => {
    const {name, value} = e.target;
    
    setUserData((prv) =>({
      ...prv,
      [name]: value
    }));
  };

 
  return (
    <div className=" fixed  flex justify-center bottom-0 right-0 w-full p-4 z-50">
      <form className="shadow-lg p-12 m-4 h-auto w-1/3" onSubmit={handleSubmit}>
        <h1 className="p-2 mb-6 text-center font-bold text-2xl">
          {isSignIn ? "Sign Up " : "Sign in to your workshop"}
        </h1>
        <label className="">Full name</label>
        <input
          type="text"
          name="Fullname"
          className="w-full bg-blue-100 rounded-sm p-2 mb-12"
          onChange={handleOnchange}
        />
        <label className="w-full">Email</label>
        <input
          type="email"
          name="email"
          className="w-full bg-blue-100  rounded-sm p-2 mb-12"
          onChange={handleOnchange}
        />
        <label>Password</label>
        <input
          type="pasword"
          name="password"
          className="w-full p-2 mb-12 rounded-sm bg-blue-100 "
          onChange={handleOnchange}
        />
        <button
          type="submit"
          className="w-full p-2 mt-4 rounded-sm bg-blue-500"
        >
          {isSignIn ? "Sign up" : "Sign in"}
        </button>

        {!isSignIn && (
          <p className="p-4">
            New to Workspace?{" "}
            <span className="hover:underline" onClick={handleSignUp}>
              {" "}
              Sign Up
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
