import { use } from "react";
import { Link } from "react-router";
import logo from "../assets/images/utility-bill-logo.webp";
import { AuthContext } from "../contexts/AuthContext";
import MyLink from "./MyLink";
const Navbar = () => {
  const { user, logOutUser } = use(AuthContext);
  const handleLogOut = () => {
    logOutUser()
      .then((result) => {
        console.log(result);
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.message);
      });
  };
  return (
    <div className="navbar bg-base-100 shadow-sm bg-gradient-to-r from-[#e7e3d5] via-[#e3d9e7] to-[#c6c2cc]">
      <div className="navbar max-w-[1600px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li className="mx-1 px-2">
                <MyLink to="/" className="flex gap-3">
                  <h1 className="text-lg font-semibold">Home</h1>
                </MyLink>
              </li>
              <li className="mx-1 px-2">
                <MyLink to="/allbills" className="flex gap-">
                  <h1 className="text-lg font-semibold">All Bills</h1>
                </MyLink>
              </li>
              {user && (
                <>
                  <li className="mx-1 px-2">
                    <MyLink to="/mybills" className="flex gap-3">
                      <h1 className="text-lg font-semibold">My Bills</h1>
                    </MyLink>
                  </li>
                  {/* added */}
                  <li className="mx-1 px-2">
                    <MyLink to="/mypaid" className="flex gap-3">
                      <h1 className="text-lg font-semibold">Paid Bills</h1>
                    </MyLink>
                  </li>
                  <li className="mx-1 px-2">
                    <MyLink to="/payment" className="flex gap-3">
                      <h1 className="text-lg font-semibold">Payment</h1>
                    </MyLink>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-18 rounded-full" src={logo} alt="logo" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-[#070016] via-[#0663ee] to-[#0c011f] animate-[pulse_3s_infinite] bg-clip-text text-transparent py-2">
              Utility Bills
            </h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 items-center">
            <li className="mx-1 px-2">
              <MyLink to="/" className="flex gap-2">
                <h1 className="text-lg font-semibold">Home</h1>
              </MyLink>
            </li>
            <li className="mx-1 px-2">
              <MyLink to="/allbills" className="flex gap-2">
                <h1 className="text-lg font-semibold">All Bill</h1>
              </MyLink>
            </li>
            {user && (
              <>
                <li className="mx-1 px-2">
                  <MyLink to="/mybills" className="flex gap-2">
                    <h1 className="text-lg font-semibold">My Bill</h1>
                  </MyLink>
                </li>
                {/* added */}
                <li className="mx-1 px-2">
                  <MyLink to="/mypaid" className="flex gap-2">
                    <h1 className="text-lg font-semibold">Paid Bill</h1>
                  </MyLink>
                </li>
                <li className="mx-1 px-2">
                  <MyLink to="/payment" className="flex gap-2">
                    <h1 className="text-lg font-semibold">Payment</h1>
                  </MyLink>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="navbar-end gap-4">
          {user ? (
            <a
              onClick={handleLogOut}
              className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer"
            >
              <Link to={"/login"}>Log Out</Link>
            </a>
          ) : (
            <div>
              <button className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer">
                <Link to={"/login"}>Log in</Link>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
