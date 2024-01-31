import App from "../App"
import Home from "../View/home"
import Login from "../View/Login"

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
]