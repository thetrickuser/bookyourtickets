import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login/Login";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  const handleShowLogin = () => setShowLogin(true);
  const handleHideLogin = () => setShowLogin(false);
  return (
    <>
      {showLogin && <Login onClose={handleHideLogin} />}
      <Header onShowLogin={handleShowLogin}></Header>
      <Home></Home>
    </>
  );
}

export default App;
