import Login from "./views/common/Login";
import ResetPassword from "./views/common/ResetPassword";
import ChangePassword from "./views/common/ChangePassword";
import RoleSelection from "./views/common/RoleSelection";
import { Route, Routes } from "react-router-dom";
import Home from "./views/professional/Home";
import ProfessionalSignUpForm from "./components/Forms/ProfessionalSignUpForm";
import ProfessionalManualSignup from "./views/professional/ProfessionalManualSignup";
import ProfessionalSocialMediaSignup from "./views/professional/ProfessionalSocialMediaSignup";
import LearningPage from "./views/professional/LearningPage";
import CommunityPage from "./views/professional/CommunityPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/forgot-password" element={<ChangePassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      

      <Route path="/role-selector" element={<RoleSelection/>}/>
      <Route path="/role-selector/professional">
        <Route index element={<ProfessionalManualSignup />} exact/> 
        <Route path="google-signup" element={<ProfessionalSocialMediaSignup />} />
        <Route path="linkedIn-signup" element={<ProfessionalSocialMediaSignup />} />
        <Route path="apple-signup" element={<ProfessionalSocialMediaSignup />} />
      </Route>


      <Route path="/home">
        <Route path="all" element={<Home />} exact/>
        <Route path="recommended" element={<Home />} />
        <Route path="applied" element={<Home />} />
        <Route path="saved" element={<Home />} />
      </Route>

      <Route path="/learning" element={<LearningPage/>}/>
      <Route path="/community" element={<CommunityPage/>}/>

    </Routes>
  );
}

export default App;
