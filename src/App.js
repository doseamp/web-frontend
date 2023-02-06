import "./App.css";
import Home from "./pages/Home";
import Signup from "./components/Signup";
import Signin from "./components/Signin";

function App() {
  return (
    <div className="App">
      <Home />
      <Signup />
      <Signin />
    </div>
  );
}

export default App;
