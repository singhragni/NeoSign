import { useState } from "react";

const Login = () => {
  const [isSignIn, setSignIn] = useState(false);

  const handleSignUp = () => {
    setSignIn(!isSignIn);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <div className=" flex justify-end w-full h-screen">
      <form className="shadow-lg p-12 m-4 h-auto w-1/3" onSubmit={handleSubmit}>
        <h1 className="p-2 mb-8 text-center font-bold text-2xl">
          {isSignIn ? "Sign Up " : "Sign in to your workshop"}
        </h1>
        <label className="">Full name</label>
        <input
          type="text"
          className="w-full bg-blue-100 rounded-sm p-2 mb-12"
        />
        <label className="w-full">Email</label>
        <input
          type="email"
          className="w-full bg-blue-100  rounded-sm p-2 mb-12"
        />
        <label>Password</label>
        <input
          type="pasword"
          className="w-full p-2 mb-12 rounded-sm bg-blue-100 "
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
