import Accordion from "./components/Accordion"
import FrequentlyAskQuestion from "./components/FrequentlyAskQuestion"
import Header from "./components/header"
import OurService from "./components/OurService"

const App = () => {
    const serviceHeading1 = 'New sharing made for people'
    const serviceHeading2 = 'One integrated solution Manage'
    const serviceHeading3 = 'Thousand of features and Custom option.'

    return (
        <div>
            <Header />
            <div className="container">
                <OurService/>
                <FrequentlyAskQuestion />
                <Accordion />
            </div>
        </div>
    )
}

export default App