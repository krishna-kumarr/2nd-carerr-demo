import Login from "./views/common/Login";
import ResetPassword from "./views/common/ResetPassword";
import ChangePassword from "./views/common/ChangePassword";
import RoleSelection from "./views/common/RoleSelection";
import { Route, Routes } from "react-router-dom";
import Home from "./views/professional/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/forgot-password" element={<ChangePassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      <Route path="/role-selector" element={<ResetPassword/>}/>
      <Route path="/role-selector/professional" element={<ResetPassword />}>
        <Route path="manual-signup" element={<ResetPassword />} />
        <Route path="google-signup" element={<ResetPassword />} />
        <Route path="linkedIn-signup" element={<ResetPassword />} />
        <Route path="apple-signup" element={<ResetPassword />} />
      </Route>


      <Route path="/home">
        <Route path="all" element={<Home />} exact/>
        <Route path="recommended" element={<Home />} />
        <Route path="applied" element={<Home />} />
        <Route path="saved" element={<Home />} />
      </Route>

    </Routes>
  );
}

export default App;
