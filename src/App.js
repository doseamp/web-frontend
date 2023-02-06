import "./App.css";
import Home from "./pages/Home";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Home />
        <Signup />
        <Signin />
      </AuthContextProvider>
    </div>
  );
}

export default App;
