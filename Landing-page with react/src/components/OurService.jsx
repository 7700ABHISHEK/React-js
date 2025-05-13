import Card from "./Card"
import Heading from "./Heading"

const OurService = () => {
    return (
        <section id="ourService" className="my-5">
            <div className="container">
                < Heading main = "Our Servies" des = "Why you choose Our plugin"/>
                <div className="row">
                    < Card serviceH = "New sharing made for people" serviceD = "The full monty twit cracking goal Jeffrey lurgy chinwag bobby vagabond David, I don't want no agro what a load.!" serviceImg = "https://saaspik.pixelsigns.art/saaspik/media/feature/20.png"/>
                    < Card serviceH = "One integrated solution Manage" serviceD = "The full monty twit cracking goal Jeffrey lurgy chinwag bobby vagabond David, I don't want no agro what a load.!" serviceImg = "	https://saaspik.pixelsigns.art/saaspik/media/feature/19.png"/>
                    < Card serviceH = "Thousand of features and Custom option." serviceD = "The full monty twit cracking goal Jeffrey lurgy chinwag bobby vagabond David, I don't want no agro what a load.!" serviceImg = "https://saaspik.pixelsigns.art/saaspik/media/feature/18.png"/>
                </div>
            </div>
        </section>
    )
}

export default OurService