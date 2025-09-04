// import Destination from "./components/destination";
// import Home from "./components/home"
// import Crew from "./components/crew"
// import Technology from "./components/technology";

import { Navigate, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./components/home"));
const Destination = lazy(() => import("./components/destination"));
const Crew = lazy(() => import("./components/crew"));
const Technology = lazy(() => import("./components/technology"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="text-white">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination/:place" element={<Destination />} />
          <Route path="/destination" element={<Navigate to="/destination/moon" replace />} />
          <Route path="/crew/:title" element={<Crew />} />
          <Route path="/crew" element={<Navigate to="/crew/commander" replace />} />
          <Route path="/technology" element={<Navigate to="/technology/vehicle" replace />} />
          <Route path="/technology/:title" element={<Technology />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
