import { Link, Outlet } from "react-router-dom";

function Destination() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Pick Your Destination</h1>
      
      {/* Sub-nav */}
      <nav className="flex gap-6 mt-4">
        <Link to="moon">Moon</Link>
        <Link to="mars">Mars</Link>
        <Link to="europa">Europa</Link>
        <Link to="titan">Titan</Link>
      </nav>

      {/* Where DestinationDetail will render */}
      <div className="mt-6">
        <Outlet />
      </div>
    </div>
  );
}

export default Destination;
