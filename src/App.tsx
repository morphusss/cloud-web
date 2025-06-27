import { HashRouter as Router, Route, Routes } from "react-router"
import { Home, ListPage, Map, NotFound } from "./pages"

import './App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cityList" element={<ListPage/>}/>
          <Route path="/map" element={<Map/>}/>
          <Route path="/*" element={<NotFound/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
