import Heading from "./Heading"

const FrequentlyAskQuestion = () => {
    return (
        <section id="questions" className="pt-5">
            <div className="container">
                < Heading main = "Frequently ask Question" des = "Want to ask something from us?"/>
                <div className="row">
                    <div className="states">
                        <div className="courses">
                            <div className="d-flex gap-4 rounded my-5 justify-content-center flex-wrap">
                                <button className="btn btn-danger p-2 rounded">UI/UX Design</button>
                                <button className="btn btn-primary p-2 rounded">Full Stack Web Dev</button>
                                <button className="btn btn-success p-2 rounded">Cyber Security</button>
                                <button className="btn btn-warning text-white p-2 rounded">AI/ML</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FrequentlyAskQuestion