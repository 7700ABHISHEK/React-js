import Accordion from "./components/Accordion"
import FrequentlyAskQuestion from "./components/FrequentlyAskQuestion"
import Header from "./components/header"
import OurService from "./components/OurService"
import OurTeam from "./components/OurTeam"
import Service2 from "./components/Service2"

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
                <Service2 />
                <OurTeam />
            </div>
        </div>
    )
}

export default App