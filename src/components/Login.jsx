import { Link } from "react-router";
const Login = () => {
  return (
    <div className="min-h-[calc(100vh-20px)] flex items-center justify-center bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 relative overflow-hidden">
      {/* Animated glow orbs */}
      <div className="absolute inset-0">
        <div className="absolute w-72 h-72 bg-purple-400/30 rounded-full blur-xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-blue-400/30 rounded-full blur-xl bottom-10 right-10 animate-pulse"></div>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-6 lg:p-10 text-white">
        {/* Left section */}
        <div className="max-w-lg text-center lg:text-left">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-[#32eb04] via-[#3ae73a] to-[#daaa0d] bg-clip-text text-transparent py-5">
            Online Utility Bill Payment System
          </h1>
          <p className="mt-4 text-lg text-white/80 leading-relaxed text-gradient-to-r from-[#32eb04] via-[#0bec43] to-[#daaa0d]">
            Log in to continue your bills. Manage your account, explore new
            features, and more.
          </p>
        </div>

        {/* Login card */}
        <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
          <form className="space-y-5">
            <h2 className="text-2xl font-semibold mb-2 text-center text-white">
              Log In
            </h2>

            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                name="email"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                placeholder="example@email.com"
                className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="relative">
              <label className="block text-sm mb-1">Password</label>
              <input
                name="password"
                placeholder="••••••••"
                className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <span className="absolute right-[8px] top-[36px] cursor-pointer z-50"></span>
            </div>

            <button className="hover:underline cursor-pointer" type="button">
              Forget password?
            </button>
            <button
              type="submit"
              className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
            >
              Log In
            </button>
            <p className="text-center text-sm text-white/80 mt-3">
              Don’t have an account?{" "}
              <Link
                to="/register"
                className="text-pink-300 hover:text-white underline"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
