import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ExperienceDetail from "./pages/ExperienceDetail";


function App(){
  return(
    <>
      <Navbar />
      
      <div >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/experience/:slug"
            element={<ExperienceDetail />}
          />
        </Routes>
      </div>

      <Footer />
    </>
  )
}

export default App;