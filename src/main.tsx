import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"

import { BrowserRouter as Router } from "react-router-dom"
import { Toaster } from "sonner"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
    <Toaster richColors position="top-right" />
      <App />
    </Router>
  </React.StrictMode>
)
