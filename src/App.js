import { Route, Routes } from "react-router-dom";
import "./App.css"
import { Sitebar , Header } from "./components";
import { Home } from "./pages/Home/Home";
import { Tickets } from "./pages/Tickets/Tickets";


function App() {
  return (
    <div className="App">
      <div className="wrapper" >
      <div className="left" >
        <Sitebar />
      </div>
      <div className="right" >
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/tickets" element={<Tickets/>} />
        </Routes>
        </div>
      </div>
      </div>
  );
}

export default App;
