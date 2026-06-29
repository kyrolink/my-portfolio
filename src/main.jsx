import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import 'animate.css';
import 'remixicon/fonts/remixicon.css'

import App from './App.jsx'
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import PreLoader from "./components/PreLoader.jsx"

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

import { BrowserRouter } from "react-router-dom";


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     {/* <PreLoader /> */}
//     <div className='container mx-auto px-4'>
//       <Navbar />
//       <App />
//       <Footer />
//     </div>
//   </StrictMode>,
// )


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);