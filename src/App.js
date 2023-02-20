import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import AuthContextProvider from "./contexts/AuthContext";
import RootLayout from "./layouts/RootLayout";

// pages
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </div>
  );
}

export default App;
