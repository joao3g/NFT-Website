import { CardSection } from './components/CardSection'
import { HomeSection } from './components/HomeSection'
import { InvestSection } from './components/InvestSection'
import { Navbar } from './components/Navbar'
import { SupportSection } from './components/SupportSection'

function App() {

  return (
    <div className="App">
      <Navbar />
      <HomeSection />
      <CardSection />
      <InvestSection />
      <SupportSection />
    </div>
  )
}

export default App
