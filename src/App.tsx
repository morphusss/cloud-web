import { HashRouter as Router, Route, Routes } from "react-router"
import { Home } from "./pages/home"
import { ListPage } from "./pages/listPage"
import { NotFound } from "./pages/notFound"
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cityList" element={<ListPage/>}/>
          <Route path="/*" element={<NotFound/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
