import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";

function App() {
  return (
    <div>
      
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter> */}
      <Home />
    </div>
  );
}

export default App;
