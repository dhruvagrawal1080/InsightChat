import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login_Signup from "./pages/Login_Signup";
import NotFoundPage from "./pages/NotFoundPage";
import Dashboard from "./pages/dashboard/dashboard";

function App() {
  return (
    <div className="h-screen">

      <Navbar />

      <div className="h-[calc(100vh-3.5rem)] overflow-auto">

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/auth" element={<Login_Signup />}></Route>
          <Route path="*" element={<NotFoundPage />} />

          <Route path="/dashboard/chats" element={<Dashboard />}>
          </Route>

        </Routes>

      </div>

    </div>
  )
}

export default App
