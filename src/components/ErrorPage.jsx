import { Link } from "react-router";
import errorImg from "../assets/images/error-404.png";
const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-10 my-18">
      <img src={errorImg} alt="" />
      <h1 className="text-5xl text-[#00193199] font-bold">
        Oops, page not found!
      </h1>
      <h3 className="text-lg text-[#00193199]">
        The page your are looking for is not available.
      </h3>
      <Link
        to="/"
        className="btn w-[160px] h-11 text-lg bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white"
      >
        Go Back!
      </Link>
    </div>
  );
};

export default ErrorPage;
