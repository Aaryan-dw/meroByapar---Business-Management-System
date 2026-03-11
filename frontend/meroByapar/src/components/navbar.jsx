import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between p-4 bg-gray-800 text-white">
      <h1>MeroByapar</h1>

      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
}

export default Navbar;