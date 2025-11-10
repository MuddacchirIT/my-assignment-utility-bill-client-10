import { NavLink } from "react-router";
const MyLink = ({ to, className, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "text-blue-900 bg-gray-50 font-bold shadow-sm"
          : `${className} font-bold`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyLink;
