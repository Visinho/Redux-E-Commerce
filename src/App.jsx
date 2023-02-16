import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./containers/Header";
import ProductLising from "./containers/ProductLising";
import ProductDetails from "./containers/ProductDetails";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element= {<ProductLising/>} />
          <Route path="/product/:productId" element= {<ProductDetails/>} />
          <Route>404 Not Found!</Route>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
