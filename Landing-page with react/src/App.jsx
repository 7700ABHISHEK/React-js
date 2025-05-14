import Accordion from "./components/Accordion"
import Footer from "./components/Footer"
import FrequentlyAskQuestion from "./components/FrequentlyAskQuestion"
import Header from "./components/Header"
import Main from "./components/Main"
import OurService from "./components/OurService"
import OurTeam from "./components/OurTeam"
import Service2 from "./components/Service2"
import Subscribe from "./components/Subscribe"
import Subscribe2 from "./components/subscribe2"

const App = () => {
    const serviceHeading1 = 'New sharing made for people'
    const serviceHeading2 = 'One integrated solution Manage'
    const serviceHeading3 = 'Thousand of features and Custom option.'

    return (
        <div>
            <Header />
            <Main />
            <OurService />
            <FrequentlyAskQuestion />
            <Accordion />
            <Subscribe2 />
            <Service2 />
            <OurTeam />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default App