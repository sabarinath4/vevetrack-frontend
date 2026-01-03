import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import "./styles/topbar.css"
import "./styles/booking.css"
import { UserProvider } from "./context/UserContext"

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <App />
  </UserProvider>
)
