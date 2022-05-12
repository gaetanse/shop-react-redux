import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ListeProduct from './../containers/ListeProduct'
import Detail from './../components/Detail'
import Menu from './../containers/Header'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Menu/>
      <div style={{margin: "25px 25px"}}>
      <Routes>
        <Route path="/" element={<ListeProduct/>}></Route>
        <Route path="/detail" element={<Detail/>}></Route>
      </Routes>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App