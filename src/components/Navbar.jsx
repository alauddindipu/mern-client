import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { MdDashboard, MdSpaceDashboard } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { IoMdLogIn } from "react-icons/io";
import logoBook from "../assets/logo-book.jpg";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);

  return (
    <>
      <div className="navbar border-b">
        <div className="navbar-start">
          <Link to="/" className="">
            <div className="avatar">
              <div className="bg-accecnt mask mask-hexagon w-24">
                <img src={logoBook} alt="BooKTech" />
              </div>
            </div>
          </Link>
        </div>
        <div className="navbar-center flex gap-x-5	">
          <div className="">
            <Link to="/"> <button className="btn btn-outline btn-accent">Home</button></Link >
          </div>
          <div className="">
            <Link to="/totalProducts"> <button className="btn btn-outline btn-accent">Products</button></Link >
          </div>
        </div>
        <div className="navbar-end">
          {user ? (
            <Link to="/dashboard" title="Dashboard">
              <MdDashboard className="w-6 h-6" />
            </Link>
          ) : (
            <Link
              to="/login"
              className="font-semibold flex items-center justify-end gap-2"
            >
              Login <IoMdLogIn />

            </Link>
          )}
        </div>
      </div>
    </>
  );
};
export default Navbar;
