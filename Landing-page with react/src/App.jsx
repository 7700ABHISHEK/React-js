import Accordion from "./components/Accordion"
import FrequentlyAskQuestion from "./components/FrequentlyAskQuestion"
import Header from "./components/header"
import MainSection from "./components/mainSection"

const App = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <MainSection />
                <FrequentlyAskQuestion />
                <Accordion />
            </div>
        </div>
    )
}

export default App