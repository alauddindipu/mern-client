import {Outlet} from "react-router-dom";

export default function Main() {
  return (<div className="max-w-6xl mx-auto">
    <Outlet></Outlet>
  </div>);
}
