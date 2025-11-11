import { use } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { Link } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
const Register = () => {
  const { show, setShow, signInWithGoogle } = use(AuthContext);
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.message);
      });
  };
  return (
    <div className="min-h-[96vh] flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 relative overflow-hidden">
      {/* Animated floating circles */}
      <div className="absolute inset-0">
        <div className="absolute w-72 h-72 bg-pink-400/30 rounded-full blur-2xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-purple-400/30 rounded-full blur-2xl bottom-10 right-10 animate-pulse"></div>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-6 lg:p-10 text-white">
        <div className="max-w-lg text-center lg:text-left">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[#32eb04] via-[#12f130] to-[#daaa0d] bg-clip-text text-transparent py-5">
            Create Account for Online Utility Bills
          </h1>
          <p className="mt-4 text-lg text-white/80 leading-relaxed text-gradient-to-r from-[#32eb04] via-[#a1fcd1] to-[#daaa0d]">
            Manage your account, explore new features, and more.
          </p>
        </div>

        <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center text-white">
            Register now!
          </h2>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Photo</label>
              <input
                type="text"
                name="photo"
                placeholder="Your photo URL here"
                className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="example@email.com"
                className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            <div className="relative">
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type={show ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />

              <span
                onClick={() => setShow(!show)}
                className="absolute right-[8px] top-[36px] cursor-pointer z-50"
              >
                {show ? <FaEye /> : <IoEyeOff />}
              </span>
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
            >
              Register
            </button>
            {/* Divider */}
            <div className="flex items-center justify-center gap-2 my-2">
              <div className="h-px w-16 bg-white/30"></div>
              <span className="text-sm text-white/70">or</span>
              <div className="h-px w-16 bg-white/30"></div>
            </div>
            {/* Google Signin */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="google"
                className="w-5 h-5"
              />
              Continue with Google
            </button>
            <div className="text-center mt-3">
              <p className="text-sm text-white/80">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-pink-300 hover:text-white font-medium underline"
                >
                  Log In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
