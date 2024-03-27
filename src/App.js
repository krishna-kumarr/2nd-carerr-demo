import Login from "./views/common/Login";
import ResetPassword from "./views/common/ResetPassword";
import ChangePassword from "./views/common/ChangePassword";
import RoleSelection from "./views/common/RoleSelection";
import ProfessionalManualSignup from "./views/professional/ProfessionalManualSignup";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    // <Login/>    
    <Routes>
      <Route path="/" element={<ResetPassword/>}/>
    </Routes>
  );
}

export default App;
