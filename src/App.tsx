import { HashRouter as Router, Route, Routes } from "react-router"
import { Home, ListPage, Map, NotFound } from "@src/pages"
import { useEffect } from "react";
import './App.css'

function App() {
  const isDarkLocalStorage = localStorage.getItem("isDark");

  useEffect(() => {
    if(isDarkLocalStorage === null) {
    localStorage.setItem("isDark", "false");
    }
  }, [])

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
