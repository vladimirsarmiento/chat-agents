// import './App.css'

import { Home } from "./components/layouts/Home";
import { Navbar } from "./components/layouts/Navbar";

function App() {
  return (
    <>
      <div className="h-screen flex">
        <Navbar />
        <Home />
      </div>
    </>
  );
}

export default App;
