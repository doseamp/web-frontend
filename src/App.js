import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./layouts/RootLayout";

// pages
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import SignupEmail from "./pages/SignupEmail";
import Login from "./pages/Login";
import ConfirmEmail from "./pages/ConfirmEmail";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Wallets from "./pages/Wallets";
import WalletDetails from "./pages/WalletDetails";
import Help from "./pages/Help";
import CreateTransaction1 from "./pages/CreateTransaction1";
import CreateTransaction2 from "./pages/CreateTransaction2";
import CreateTransaction3 from "./pages/CreateTransaction3";
import CreateTransaction4 from "./pages/CreateTransaction4";
import Account from "./pages/Account";
import PrivateRoutes from "./utils/PrivateRoutes";
import RestrictedRoutes from "./utils/RestrictedRoutes";
import Profile from "./pages/Profile";
import Statement from "./pages/Statement";
import Security from "./pages/Security";
import Support from "./pages/Support";
import FAQs from "./pages/FAQs";
import Kyc from "./pages/Kyc";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route element={<RestrictedRoutes />}>
          <Route index element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup/email" element={<SignupEmail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/confirm-email" element={<ConfirmEmail />} />
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route path="/kyc" element={<Kyc />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/wallets" element={<Wallets />} />
          <Route path="/wallets/:id" element={<WalletDetails />} />
          <Route
            path="/transactions/create/1"
            element={<CreateTransaction1 />}
          />
          <Route
            path="/transactions/create/2"
            element={<CreateTransaction2 />}
          />
          <Route
            path="/transactions/create/3"
            element={<CreateTransaction3 />}
          />
          <Route
            path="/transactions/create/4"
            element={<CreateTransaction4 />}
          />
          <Route path="/account" element={<Account />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/statement" element={<Statement />} />
          <Route path="/security" element={<Security />} />
          <Route path="/support" element={<Support />} />
          <Route path="/faq" element={<FAQs />} />
          <Route path="/help" element={<Help />} />
        </Route>
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
