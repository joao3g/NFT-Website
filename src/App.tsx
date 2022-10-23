import { useEffect, useRef, useState } from 'react'
import { HomeSection } from './components/HomeSection'
import { Navbar } from './components/Navbar'

function App() {
  const [navbarHeight, setNavbarHeight] = useState(72)
  const navbar = useRef(document.createElement("div"))

  useEffect(() => { 
    setNavbarHeight(navbar.current.clientHeight)
  })

  return (
    <div className="App">
      <Navbar reference={navbar}/>
      <HomeSection marginTop={navbarHeight} />
    </div>
  )
}

export default App
