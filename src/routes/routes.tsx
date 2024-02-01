import App from "../App"
import Home from "../View/home"
import Login from "../View/Login"
import OTPVerification from "../View/otp_verification.tsx";

export const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/otp_verf",
    element: <OTPVerification />
  }
]