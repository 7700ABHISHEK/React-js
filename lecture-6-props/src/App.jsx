import Card from "./Card"

const App = () => {
    
    let aboutDesciption = "let me tell you about website in About Section..."
    let serviceDesciption = "let me tell you about our serices in our this section..."
    let contactDesciption = "You can contact me on this section..."
    let aboutBtn = "About Button"
    let serviceBtn = "Service Button"
    let contactBtn = "Contact Button"
    let aboutColor = "primary"
    let serviceColor = "danger"
    let contactColor = "success"

    return (
        <div>
            <section>
                <div className="container">
                    <div className="row my-5">
                        <div className="col-4">
                            <Card pageName="About" ds={aboutDesciption} btn={aboutBtn} color={aboutColor}/>
                        </div>
                        <div className="col-4">
                            <Card pageName="Service" ds={serviceDesciption} btn={serviceBtn} color={serviceColor}/>
                        </div>
                        <div className="col-4">
                            <Card pageName="Contact" ds={contactDesciption} btn={contactBtn} color={contactColor}/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default App