import { CardSection } from './components/CardSection'
import { HomeSection } from './components/HomeSection'
import { InvestSection } from './components/InvestSection'
import { Navbar } from './components/Navbar'
import { SupportSection } from './components/SupportSection'
import { Footer } from './components/Footer'
import { ReceiveTransmissionSection } from './components/ReceiveTransmissionSection'
import { FirstStepSection } from './components/FirstStepSection'
import { BuySellSection } from './components/BuySellSection'

function App() {

  return (
    <div className="App">
      <Navbar />
      <HomeSection />
      <CardSection />
      <InvestSection />
      <SupportSection />
      <BuySellSection />
      <FirstStepSection />
      <ReceiveTransmissionSection />
      <Footer />
    </div>
  )
}

export default App
