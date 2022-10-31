import { CardSection } from './components/CardSection'
import { HomeSection } from './components/HomeSection'
import { InvestSection } from './components/InvestSection'
import { Navbar } from './components/Navbar'

function App() {

  return (
    <div className="App">
      <Navbar />
      <HomeSection />
      <CardSection />
      <InvestSection />
    </div>
  )
}

export default App
