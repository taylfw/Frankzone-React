import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function PortNav() {
  return (
    <div className="container">
      <Link className="link" to="/public/numberGen/index.html">
        Number Generator
      </Link>

      <Link className="link" to="/backgroundButton/index.html">
        Background Generator
      </Link>

      <Link className="link" to="/snake/index.html">
        Snake
      </Link>

      <Link className="link" to="/retrodraw/index.html">
        Retro Draw!
      </Link>

      <Link className="link" to="/Calculator/index.html">
        Calculator
      </Link>
    </div>
  );
}

export default PortNav;
