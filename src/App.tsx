import Destination from "./components/destination";
import Home from "./components/home"
import Crew from "./components/crew"
import Technology from "./components/technology";
import { Navigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>

        <Route path="/destination/:place" element={<Destination/>}/>
        <Route path="/destination" element={<Navigate to="/destination/moon" replace />} />

        <Route path="/crew/:title" element={<Crew/>}/>
        <Route path="/crew" element={< Navigate to="/crew/commander" replace/>}/>

        <Route path="/technology" element={<Navigate to="/technology/vehicle" replace />}/>
        <Route path="/technology/:title" element={<Technology/>}/>

      </Routes>
    </Router>
    </>
  )
}

export default App
