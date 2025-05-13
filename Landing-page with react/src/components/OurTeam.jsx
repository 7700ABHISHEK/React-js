import React from 'react'
import Heading from './Heading'
import TeamProfile from './TeamProfile'

const OurTeam = () => {
    return (
        <section>
            <div className="container">
                <Heading main="Meet The Team" des="Awesome pix saas Team"/>
                <div className="row">
                    <TeamProfile img="https://saaspik.pixelsigns.art/saaspik/media/team/1.jpg" title="Dylan Meringue" post="Project Manager"/>
                    <TeamProfile img="https://saaspik.pixelsigns.art/saaspik/media/team/2.jpg" title="Lance Bogrol" post="Developer"/>
                    <TeamProfile img="https://saaspik.pixelsigns.art/saaspik/media/team/3.jpg" title="Dylan Meringue" post="UI/UX designer"/>
                </div>
            </div>
        </section>
  )
}

export default OurTeam