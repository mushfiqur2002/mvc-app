import NavBar from "./components/NavBar"
import FeatureSection from "./section/FeatureSection"
import FooterSection from "./section/FooterSection"
import HeroSection from "./section/HeroSection"
import ShoppingSection from "./section/ShoppingSection"

function App() {

  return (
    <div className="relative flex flex-col overflow-hidden">
      <NavBar />
      <HeroSection />
      <FeatureSection />
      <ShoppingSection />
      <FooterSection />
    </div>
  )
}

export default App
