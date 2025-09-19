// import Destination from "./components/destination";
// import Home from "./components/home"
// import Crew from "./components/crew"
// import Technology from "./components/technology";

import { Navigate, BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import NotFound from "./components/notfound";

const Home = lazy(() => import("./components/home"));
const Destination = lazy(() => import("./components/destination"));
const Crew = lazy(() => import("./components/crew"));
const Technology = lazy(() => import("./components/technology"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="text-black text-xl h-screen flex items-center justify-center">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination/:place" element={<Destination />} />
          <Route path="/destination" element={<Navigate to="/destination/moon" replace />} />
          <Route path="/crew/:title" element={<Crew />} />
          <Route path="/crew" element={<Navigate to="/crew/commander" replace />} />
          <Route path="/technology" element={<Navigate to="/technology/vehicle" replace />} />
          <Route path="/technology/:title" element={<Technology />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
