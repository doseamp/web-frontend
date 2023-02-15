import "./App.css";
import Home from "./pages/Home";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import AuthContextProvider from "./contexts/AuthContext";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Home />
        <Signup />
        <Signin />
        <ForgotPassword />
        <ResetPassword />
      </AuthContextProvider>
    </div>
  );
}

export default App;
