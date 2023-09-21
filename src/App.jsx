import { TopHeader } from "./components/TopHeader"
import { Header } from "./components/Header"
import { MiddleText } from "./components/MiddleText"
import { PurchaseStatus } from "./components/PurchaseStatus"
import { MainContent } from "./components/MainContent"
import { Footer } from "./components/Footer"

function App() {
  return (
    <>
      <div className="flex flex-col">
        <TopHeader/>
        <Header/>
        <MiddleText/>
        <PurchaseStatus/>
        <MainContent/>
        <Footer/>
      </div>
    </>
  )
}

export default App
