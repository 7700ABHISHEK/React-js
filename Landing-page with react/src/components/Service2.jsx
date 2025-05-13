import React from 'react'
import Heading from './Heading'
import ServiceCart from './ServiceCart'

const Service2 = () => {
    return (
        <section>
            <div className="container my-5">
                <Heading main="Our service" des="Why you choose Our plugin"/>
                <div className="row">
                    <ServiceCart heading="App Development" des="The full monty do one nancy boy say gutted mate cockup Why at public school.!" img="https://saaspik.pixelsigns.art/saaspik/media/feature/6.png"/>
                    <ServiceCart heading="Customization" des="The full monty do one nancy boy say gutted mate cockup Why at public school.!" img="https://saaspik.pixelsigns.art/saaspik/media/feature/7.png"/>
                    <ServiceCart heading="Multiple Managers" des="The full monty do one nancy boy say gutted mate cockup Why at public school.!" img="https://saaspik.pixelsigns.art/saaspik/media/feature/8.png"/>
                    <ServiceCart heading="Cloud Data Saved" des="The full monty do one nancy boy say gutted mate cockup Why at public school.!" img="https://saaspik.pixelsigns.art/saaspik/media/feature/9.png"/>
                    <ServiceCart heading="UI/UX Branding" des="The full monty do one nancy boy say gutted mate cockup Why at public school.!" img="https://saaspik.pixelsigns.art/saaspik/media/feature/10.png"/>
                    <ServiceCart heading="Customer Support" des="The full monty do one nancy boy say gutted mate cockup Why at public school.!" img="https://saaspik.pixelsigns.art/saaspik/media/feature/11.png"/>
                </div>
            </div>
        </section>
    )
}

export default Service2