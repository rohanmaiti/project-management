import { Route, Routes } from "react-router-dom";
import "./App.css";
import { IfNotLogin } from "./layouts/IfNotLogin";
import { Landingpage } from "./pages/Landingpage";
import { Signin } from "./components/Signin";
import { Signup } from "./components/Signup";
import { LoggedinLayout } from "./layouts/LoggedinLayout";
import { Dashboard } from "./screens/dashboard/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route element={<IfNotLogin />}>
          <Route index element={<Landingpage />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        <Route element={<LoggedinLayout/>}>
           <Route path="/dashboard"  element={<Dashboard/>} />
           <Route path="/projects" element={<h1> projects </h1>} />
        </Route>
      </Routes>



    </>
  );
}
export default App;
